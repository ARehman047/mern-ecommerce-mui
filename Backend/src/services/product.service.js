const Category = require('../models/category.model');
const Product = require('../models/product.model');

const createProduct = async (reqData) => {
    try {
        
        let topLevel = await Category.findOne({ name: reqData.topLevelCategory });

        console.log("Top Level Category:", reqData);
        
        if (!topLevel) {
            topLevel = new Category({
                name: reqData.topLevelCategory,
                level: 1,
            });
            
            await topLevel.save();
        }

        let secondLevel = await Category.findOne({
            name: reqData.secondLevelCategory,
            parentCategory: topLevel._id,
        });

        if (!secondLevel) {
            secondLevel = new Category({
                name: reqData.secondLevelCategory,
                parentCategory: topLevel._id,
                level: 2,
            });

            await secondLevel.save();
        }

        let thirdLevel = await Category.findOne({
            name: reqData.thirdLevelCategory,
            parentCategory: secondLevel._id,
        });

        if (!thirdLevel) {
            thirdLevel = new Category({
                name: reqData.thirdLevelCategory,
                parentCategory: secondLevel._id,
                level: 3,
            });

            await thirdLevel.save();
        }


        const product = new Product({
            title: reqData.title,
            color: reqData.color,
            description: reqData.description,
            discountedPrice: reqData.discountedPrice ? reqData.discountedPrice : reqData.price,
            discountPercent: reqData.discountPercent || null,
            imageUrl: reqData.imageUrl,
            brand: reqData.brand,
            price: reqData.price,
            sizes: reqData.sizes,
            quantity: reqData.quantity,
            category: thirdLevel._id,
        });

        return await product.save();
    } catch (error) {
        throw new Error(`Error creating product: ${error.message}`);
    }
};

const deleteProduct = async (productId) => {
    const product = await findProductById(productId);

    await Product.findByIdAndDelete(productId);
    return 'Product deleted successfully'
}

const updateProduct = async (productId, reqData) => {
    return await Product.findByIdAndUpdate(productId, reqData);
}

const findProductById = async (productId) => {
    try {
        const product = await Product.findById(productId)
            .populate('category')
            .exec();

        if (!product) {
            throw new Error('Product does not exist');
        }

        return product;
    } catch (error) {
        throw new Error(`Error finding product: ${error.message}`);
    }
};

const getAllProducts = async (reqQuery) => {

    let { category, color, sizes, minPrice, maxPrice, minDiscount, sort, stock, pageNumber, pageSize } = reqQuery;

    
    // Set default values for pagination
    pageSize = parseInt(pageSize) || 1
    pageNumber = parseInt(pageNumber) || 1;
    minPrice = parseInt(minPrice) || 0;
    maxPrice = parseInt(maxPrice) || 0;
    minDiscount = parseInt(minDiscount) || 0;
    
    let query = Product.find().populate('category');

    // Filter by category
    if (category) {
        const existsCategory = await Category.findOne({ name: category });
        if (existsCategory) {
            query = query.where('category').equals(existsCategory._id);
        } else {
            return { content: [], currentPage: 1, totalPages: 0 };
        }
    }

    // Filter by color
    if (color) {
        const colorSet = new Set(color.split(',').map((clr) => clr.trim().toLowerCase()));
        if (colorSet.size > 0) {
            const colorRegex = new RegExp([...colorSet].join('|'), 'i');
            query = query.where('color').regex(colorRegex);
        }
    }

    // Filter by sizes
    if (sizes) {
        const sizesArray = Array.isArray(sizes) ? sizes : sizes.split(',');
        const sizesSet = new Set(sizesArray.map((size) => size.trim()));
        query = query.where('sizes.name').in([...sizesSet]);
    }

    // Filter by price range
    if (minPrice && maxPrice) {
        query = query.where('discountedPrice').gte(Number(minPrice)).lte(Number(maxPrice));
    }

    // Filter by minimum discount
    if (minDiscount) {
        query = query.where('discountPercent').gt(Number(minDiscount));
    }

    // Filter by stock status
    if (stock) {
        if (stock === 'in_stock') {
            query = query.where('quantity').gt(0);
        } else if (stock === 'out_stock') {
            query = query.where('quantity').lte(0);
        }
    }

    // Sort products
    if (sort) {
        let sortDirection = 1; // Default sorting is ascending
        if (sort === 'price_high') {
            sortDirection = -1;
        }
        query = query.sort({ discountedPrice: sortDirection });
    }

    // Count total products
    const totalProducts = await Product.find(query.getFilter()).countDocuments();

    // Pagination logic
    const skip = (pageNumber - 1) * pageSize;
    query = query.skip(skip).limit(pageSize);

    // Execute query
    const products = await query.exec();

    // Calculate total pages
    const totalPages = Math.ceil(totalProducts / pageSize);

    // Return the response
    return { content: products, currentPage: pageNumber, totalPages, };
};

const createMultipleProduct = async (products) => {
    for (let product in products) {
        await createProduct(product);
    }
}

module.exports = { createProduct, deleteProduct, updateProduct, findProductById, getAllProducts, createMultipleProduct };