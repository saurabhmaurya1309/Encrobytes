// server/routes/categoryRoutes.js
const express = require('express');
const { createCategory, getCategories, updateCategory, deleteCategory ,countCategories} = require('../controllers/categoryController');
const upload = require('../middleware/upload'); // Cloudinary upload middleware
const router = express.Router();
const { requireAuth, requireAdmin } = require('../middleware/auth');
const { uploadSingle } = require('../middleware/upload');
// Create Category (Admin only)
// router.post('/', requireAuth,requireAdmin,upload.single('image'), createCategory);
router.post('/', requireAuth, requireAdmin, uploadSingle, createCategory);

// Get All Categories
router.get('/', getCategories);

// Edit Category (Admin only)
router.put('/:id',requireAuth,requireAdmin, uploadSingle, updateCategory);

// Delete Category (Admin only)
router.delete('/:id',requireAuth,requireAdmin, deleteCategory);
router.get('/count', requireAuth,requireAdmin,countCategories);
module.exports = router;
