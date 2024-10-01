// server/routes/authRoutes.js
const express = require('express');
const { login, signup, logout,getCurrentUser,countUsers } = require('../controllers/authController');
const router = express.Router();
const { requireAuth, requireAdmin } = require('../middleware/auth');

// Login Route
router.post('/login', login);

// Signup Route (for customers)
router.post('/signup', signup);

// Logout Route
router.post('/logout', logout);
router.get('/me', requireAuth, getCurrentUser);
router.get('/count',requireAuth,requireAdmin, countUsers);
module.exports = router;
