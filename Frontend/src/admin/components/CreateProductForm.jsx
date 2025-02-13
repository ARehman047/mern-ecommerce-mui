import React, { Fragment, useState, useEffect } from "react";
import { Grid, TextField, Button, MenuItem, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { createProduct } from "../../state/Product/Action";

const firstLevelCategories = ["men", "women"];
const secondLevelCategories = ["clothing", "brands", "accessories"];
const thirdLevelCategories = ["mensKurta", "Pants", "Shoes", "Shirt"];

const CreateProductForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    quantity: "",
    price: "",
    discountedPrice: "",
    discountPercent: "",
    topLevelCategory: "",
    secondLevelCategory: "",
    thirdLevelCategory: "",
    description: "",
    sizes: [
      { name: "S", quantity: "" },
      { name: "M", quantity: "" },
      { name: "L", quantity: "" },
    ],
  });

  // Error states for discount and size quantities
  const [discountError, setDiscountError] = useState("");
  const [sizeQuantityError, setSizeQuantityError] = useState("");

  // Update discount percentage whenever price or discountedPrice changes
  useEffect(() => {
    const price = parseFloat(formData.price);
    const discountPrice = parseFloat(formData.discountedPrice);

    // Only calculate when both values are valid numbers
    if (!isNaN(price) && !isNaN(discountPrice)) {
      if (discountPrice > price) {
        setDiscountError("Discounted Price cannot be higher than Price");
        setFormData((prev) => ({
          ...prev,
          discountPercent: "",
        }));
      } else {
        setDiscountError("");
        const discountPerc = price > 0 ? ((price - discountPrice) / price) * 100 : 0;
        setFormData((prev) => ({
          ...prev,
          discountPercent: discountPerc.toFixed(2),
        }));
      }
    } else {
      // Reset error if one of the values is not a valid number
      setDiscountError("");
      setFormData((prev) => ({
        ...prev,
        discountPercent: "",
      }));
    }
  }, [formData.price, formData.discountedPrice]);

  // Validate that the total of sizes equals the overall quantity
  useEffect(() => {
    const overallQuantity = parseFloat(formData.quantity) || 0;
    const sizesTotal = formData.sizes.reduce(
      (acc, sizeObj) => acc + (parseFloat(sizeObj.quantity) || 0),
      0
    );

    if (overallQuantity > 0) {
      if (sizesTotal !== overallQuantity) {
        if (sizesTotal < overallQuantity) {
          setSizeQuantityError("Total size quantities are less than the overall quantity.");
        } else {
          setSizeQuantityError("Total size quantities exceed the overall quantity.");
        }
      } else {
        setSizeQuantityError("");
      }
    } else {
      setSizeQuantityError("");
    }
  }, [formData.quantity, formData.sizes]);

  // Handle changes for general text and number fields
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    // Prevent negative numbers for number fields
    if (type === "number" && parseFloat(value) < 0) {
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  // Handle changes for size-specific quantity inputs by updating the sizes array
  const handleSizeChange = (sizeName, value) => {
    if (parseFloat(value) < 0) return; // Prevent negative numbers
    setFormData((prevData) => ({
      ...prevData,
      sizes: prevData.sizes.map((s) =>
        s.name === sizeName ? { ...s, quantity: value } : s
      ),
    }));
  };

  // Handle form submission with all validations
  const handleSubmit = (e) => {
    e.preventDefault();

    const price = parseFloat(formData.price);
    const discountPrice = parseFloat(formData.discountedPrice);

    if (!isNaN(price) && !isNaN(discountPrice) && discountPrice > price) {
      alert("Discounted Price cannot be higher than Price");
      return;
    }

    // Validate size quantities
    const overallQuantity = parseFloat(formData.quantity) || 0;
    const sizesTotal = formData.sizes.reduce(
      (acc, sizeObj) => acc + (parseFloat(sizeObj.quantity) || 0),
      0
    );
    if (overallQuantity > 0 && sizesTotal !== overallQuantity) {
      alert("The total of size quantities does not match the overall quantity.");
      return;
    }
    dispatch(createProduct(formData));
    alert('Product Added Successfully');
  };

  return (
    <Fragment>
      <Typography variant="h3" sx={{ textAlign: "center" }} className="py-10 text-center">
        Add new Product
      </Typography>
      <form className="min-h-screen" onSubmit={handleSubmit}>
        <Grid container spacing={2} p={3}>
          {/* Image URL */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              name="imageUrl"
              variant="outlined"
              value={formData.imageUrl}
              onChange={handleChange}
            />
          </Grid>

          {/* Brand and Title */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              variant="outlined"
              value={formData.brand}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              variant="outlined"
              value={formData.title}
              onChange={handleChange}
            />
          </Grid>

          {/* Color and Quantity */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Color"
              name="color"
              variant="outlined"
              value={formData.color}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Quantity"
              name="quantity"
              variant="outlined"
              type="number"
              inputProps={{ min: 0 }}
              value={formData.quantity}
              onChange={handleChange}
            />
          </Grid>

          {/* Price, Discounted Price, and Discount Percentage */}
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              variant="outlined"
              type="number"
              inputProps={{ min: 0 }}
              value={formData.price}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discounted Price"
              name="discountedPrice"
              variant="outlined"
              type="number"
              inputProps={{ min: 0 }}
              value={formData.discountedPrice}
              onChange={handleChange}
              error={Boolean(discountError)}
              helperText={discountError}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discount Percentage"
              name="discountPercent"
              variant="outlined"
              type="number"
              value={formData.discountPercent}
              disabled
            />
          </Grid>

          {/* Categories */}
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              select
              label="Top Level Category"
              name="topLevelCategory"
              variant="outlined"
              value={formData.topLevelCategory}
              onChange={handleChange}
            >
              {firstLevelCategories.map((category, index) => (
                <MenuItem key={index} value={category}>
                  {category}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              select
              label="Second Level Category"
              name="secondLevelCategory"
              variant="outlined"
              value={formData.secondLevelCategory}
              onChange={handleChange}
            >
              {secondLevelCategories.map((secondLevelCategory, index) => (
                <MenuItem key={index} value={secondLevelCategory}>
                  {secondLevelCategory}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              select
              label="Third Level Category"
              name="thirdLevelCategory"
              variant="outlined"
              value={formData.thirdLevelCategory}
              onChange={handleChange}
            >
              {thirdLevelCategories.map((thirdLevelCategory, index) => (
                <MenuItem key={index} value={thirdLevelCategory}>
                  {thirdLevelCategory}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Description */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              variant="outlined"
              multiline
              rows={3}
              value={formData.description}
              onChange={handleChange}
            />
          </Grid>

          {/* Size and Quantity Inputs */}
          {formData.sizes.map((sizeObj, index) => (
            <Fragment key={index}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Size Name"
                  variant="outlined"
                  value={sizeObj.name}
                  disabled
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Quantity *"
                  variant="outlined"
                  type="number"
                  inputProps={{ min: 0 }}
                  value={sizeObj.quantity}
                  onChange={(e) => handleSizeChange(sizeObj.name, e.target.value)}
                />
              </Grid>
            </Fragment>
          ))}

          {/* Size Quantity Error Message */}
          {sizeQuantityError && (
            <Grid item xs={12}>
              <Typography color="error">{sizeQuantityError}</Typography>
            </Grid>
          )}

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ paddingX: 3, paddingY: 1.5 }}
            >
              ADD NEW PRODUCT
            </Button>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

export default CreateProductForm;
