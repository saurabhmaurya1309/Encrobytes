// server/controllers/authController.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/jwt');
// Signup (for customers only)
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists. Please log in.' });
    }

    // Hash the password before saving the user
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: 'customer',  // Default role is 'customer'
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'Signup successful. Please log in to continue.' });
  } catch (error) {
    res.status(500).json({ message: 'Signup failed. Try again later.', error });
  }
};
// server/controllers/authController.js


// Login (for both admin and customer)
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Compare the entered password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Generate the JWT token
    const token = generateToken(user);

    // Store token in HTTP-only cookie
   
    res.cookie('token', token, {
      httpOnly: true, // Cannot be accessed via JavaScript
      secure: process.env.NODE_ENV === 'production', // Use only over HTTPS in production
      maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
    });

    res.status(200).json({ message: 'Login successful',
      token, user: { id: user._id, email: user.email, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error });
  }
};
exports.logout = (req, res) => {
    res.clearCookie('token'); // Clear the JWT token stored in the cookie
    res.status(200).json({ message: 'Logout successful' });
  };
  // server/controllers/authController.js
// Add this function to get current user
exports.getCurrentUser = async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Not authenticated' });
  }
  res.status(200).json({ user: { id: req.user._id, email: req.user.email, role: req.user.role } });
};
// Count the number of users
exports.countUsers = async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ message: 'Error counting users', error });
  }
};

