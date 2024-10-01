// server/controllers/categoryController.js
const Category = require('../models/Category');
const mongoose = require('mongoose');

// Create Category
// exports.createCategory = async (req, res) => {
//   try {
//     const { name } = req.body;
//     const image = req.file.path; // Cloudinary image URL

//     const newCategory = new Category({ name, image });
//     await newCategory.save();

//     res.status(201).json({ message: 'Category created successfully', category: newCategory });
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating category', error });
//   }
// };

// server/controllers/categoryController.js
exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    // Check if the image is uploaded
    if (!req.file) {
      return res.status(400).json({ message: 'Image file is required' });
    }

    // The req.file.path will contain the Cloudinary URL from multer-storage-cloudinary
    const imageUrl = req.file.path;

    // Create a new category with the name and the image URL from Cloudinary
    const newCategory = new Category({ name, image: imageUrl });

    // Save the category to the database
    await newCategory.save();

    res.status(201).json({ message: 'Category created successfully', category: newCategory });
  } catch (error) {
    res.status(500).json({ message: 'Error creating category', error });
  }
};


// Get All Categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching categories', error });
  }
};

// Update Category
exports.updateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const image = req.file ? req.file.path : undefined; // If image is provided, get Cloudinary URL

    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    category.name = name || category.name;
    if (image) {
      category.image = image; // Update image if provided
    }
    await category.save();

    res.status(200).json({ message: 'Category updated successfully', category });
  } catch (error) {
    res.status(500).json({ message: 'Error updating category', error });
  }
};

// Delete Category

exports.deleteCategory = async (req, res) => {
  try {
    // Validate the ID before attempting to delete
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid Category ID' });
    }

    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Use deleteOne() instead of remove()
    await Category.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    console.error('Error deleting category:', error);
    res.status(500).json({ message: 'Error deleting category', error: error.message });
  }
};
exports.countCategories = async (req, res) => {
  try {
    const count = await Category.countDocuments();
    console.log("category count",count);
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ message: 'Error counting categories', error });
  }
};
