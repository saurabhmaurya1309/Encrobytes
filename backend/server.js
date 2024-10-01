require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const cookieParser = require('cookie-parser');

const app = express();
connectDB();

// Middleware
const corsOptions = {
    origin: 'http://localhost:3000', // Specify the exact origin
    credentials: true, // Allow credentials
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());  // Parse JSON requests

// Routes
app.use('/api/users', authRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
