const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res)=>{
    return res.status(200).send({message:"Welcome janaab", status:"true"});
});

const authRouter = require('./routes/auth.route.js')
app.use('/auth', authRouter);

const userRouter = require('./routes/user.route.js')
app.use('/api/users', userRouter)

const adminOrderRouter = require('./routes/adminOrder.route.js');
app.use('/api/admin/orders', adminOrderRouter)

const adminProductRouter = require('./routes/adminProduct.route');
app.use('/api/admin/products', adminProductRouter)

const cartRouter = require('./routes/cart.route');
app.use('/api/cart', cartRouter)

const cartItemRouter = require('./routes/cartItem.route');
app.use('/api/cart_items', cartItemRouter)

const orderRouter = require('./routes/order.route');
app.use('/api/orders', orderRouter)

const productRouter = require('./routes/product.route');
app.use('/api/products', productRouter)

const ratingRouter = require('./routes/rating.route');
app.use('/api/ratings', ratingRouter)

const reviewRouter = require('./routes/review.route');
app.use('/api/reviews', reviewRouter)

const addressRouter = require('./routes/address.route'); 
app.use('/api/addresses', addressRouter);

module.exports = app;
