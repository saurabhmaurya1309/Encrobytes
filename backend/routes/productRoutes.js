// server/routes/productRoutes.js
const express = require('express');
const { createProduct, getProducts,getProductsByCategory, getProductById, updateProduct, deleteProduct,countProducts } = require('../controllers/productController');
const upload = require('../middleware/upload'); // Cloudinary upload middleware
const router = express.Router();
const { requireAuth, requireAdmin } = require('../middleware/auth');
const { uploadMultiple } = require('../middleware/upload');

// Create Product (Admin only)
router.post('/',requireAuth,requireAdmin,uploadMultiple, createProduct); // Allow up to 5 images

// Get All Products
router.get('/', getProducts);

// Get Product By ID
router.get('/count',countProducts);
router.get('/category/:categoryId',getProductsByCategory);
router.get('/:id', getProductById);

// Edit Product (Admin only)
router.put('/:id', uploadMultiple, updateProduct);

// Delete Product (Admin only)
router.delete('/:id',requireAuth ,requireAdmin,deleteProduct);
module.exports = router;
