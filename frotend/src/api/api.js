// src/api/api.js
import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'https://encrobytes-iea3.onrender.com/api', // Update with your backend server URL
  withCredentials: true, // Allows cookies (for authentication)
});

// Auth Endpoints
export const login = (credentials) => api.post('/users/login', credentials);
export const signup = (userData) => api.post('/users/signup', userData);
export const logout = () => api.post('/users/logout');
export const getCurrentUser = () => api.get('/users/me');
// Count Endpoints
export const countUsers = () => api.get('/users/count');



// Category Endpoints (Admin only)
export const createCategory = (formData) => api.post('/categories', formData);
export const getCategories = () => api.get('/categories');
export const updateCategory = (id, formData) => api.put(`/categories/${id}`, formData);
export const deleteCategory = (id) => api.delete(`/categories/${id}`);
export const countCategories = () => api.get('/categories/count');

// Product Endpoints
export const createProduct = (formData) => api.post('/products', formData);
export const getProducts = () => api.get('/products');
export const getProductById = (id) => api.get(`/products/${id}`);
export const getProductsByCategory = (id) => api.get(`/products/category/${id}`);

export const updateProduct = (id, formData) => api.put(`/products/${id}`, formData);
export const deleteProduct = (id) => api.delete(`/products/${id}`);
export const countProducts = () => api.get('/products/count');

