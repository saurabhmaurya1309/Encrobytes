// server/controllers/productController.js
const Product = require('../models/Product');
const mongoose = require('mongoose');

// Create Product
exports.createProduct = async (req, res) => {
  try {
    const { name, category, price, quantity } = req.body;
    const images = req.files.map(file => file.path); // Array of image URLs from Cloudinary

    const newProduct = new Product({
      name,
      category,
      images,
      price,
      quantity,
    });

    await newProduct.save();
    res.status(201).json({ message: 'Product created successfully', product: newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error });
  }
};

// Get All Products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('category');
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
};

// Get Product By ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('category');
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product', error });
  }
};

// Update Product
exports.updateProduct = async (req, res) => {
  try {
    const { name, category, price, quantity } = req.body;
    const images = req.files.length ? req.files.map(file => file.path) : undefined; // If new images are uploaded

    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    product.name = name || product.name;
    product.category = category || product.category;
    product.price = price || product.price;
    product.quantity = quantity || product.quantity;
    if (images) {
      product.images = images;
    }

    await product.save();
    res.status(200).json({ message: 'Product updated successfully', product });
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error });
  }
};

// Delete Product


exports.deleteProduct = async (req, res) => {
  try {
    // Validate the ID before attempting to delete
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid Product ID' });
    }

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Use deleteOne() instead of remove()
    await Product.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Error deleting product', error: error.message });
  }
};
// Count the number of products
exports.countProducts = async (req, res) => {
  console.log("countpr");
  
  try {
    const count = await Product.countDocuments();
    
    res.status(200).json({ count });
  } catch (error) {
    console.error('Error counting products:', error);
    res.status(500).json({ message: 'Error counting products', error });
  }
};
exports.getProductsByCategory = async (req, res) => {
  const { categoryId } = req.params;

  try {
    // Find products that belong to the specified category
    const products = await Product.find({ category: categoryId }).populate('category');
    
    if (!products.length) {
      return res.status(404).json({ message: 'No products found for this category' });
    }

    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};


