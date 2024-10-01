// server/models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  images: [{ type: String, required: true }], // Array of image URLs
  price: { type: Number, required: true }, // Price of the product
  quantity: { type: String, required: true }, // e.g., '500g', '1kg', etc.
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
