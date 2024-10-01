const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');

// Cloudinary storage configuration for multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Encorbytes', // Cloudinary folder
    allowedFormats: ['jpg', 'png', 'jpeg'], // Allowed formats
  },
});

// Create an instance of multer for single and multiple file uploads
const uploadSingle = multer({ storage }).single('image'); // For single image upload (category)
const uploadMultiple = multer({ storage }).array('images', 5); // For multiple images (product)

// Export both configurations
module.exports = { uploadSingle, uploadMultiple };
