import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import AdminOverview from '../components/Admin/DashboardOverview';
import CategoryForm from '../components/Admin/CategoryForm';
import CategoryList from '../components/Admin/CategoryList';
import ProductForm from '../components/Admin/ProductForm';
import ProductList from '../components/Admin/ProductList';
import { getCategories, getProducts } from '../api/api'; // Import the API functions

const AdminDashboard = () => {
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [showProductForm, setShowProductForm] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Hook to programmatically navigate

  const fetchCategories = async () => {
    try {
      const res = await getCategories();
      setCategories(res.data);
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await getProducts();
      setProducts(res.data);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  // Handle Logout
  const handleLogout = () => {
    // Clear token from localStorage or other necessary cleanup
    localStorage.removeItem('token'); // Adjust according to your auth logic
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex-shrink-0">
        <div className="p-4 text-2xl font-bold">Admin Dashboard</div>
        <nav className="mt-10">
          <ul>
            <li>
              <Link to="" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
                Overview
              </Link>
            </li>
            <li>
              <Link to="categories" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
                Manage Categories
              </Link>
            </li>
            <li>
              <Link to="products" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
                Manage Products
              </Link>
            </li>
            <li>
              <Link to="users" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
                View Users
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        {/* Header with Logout button */}
        <header className="flex justify-end items-center mb-6">
          
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </header>

        {/* Dynamic Routes */}
        <Routes>
          <Route path="/" element={<AdminOverview />} />
          <Route
            path="categories"
            element={
              <div className="space-y-6">
                <button
                  onClick={() => setShowCategoryForm(true)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 float-right"
                >
                  Add Category
                </button>
                {showCategoryForm && (
                  <CategoryForm
                    onCategoryCreated={() => {
                      fetchCategories();
                      setShowCategoryForm(false);
                    }}
                    onCancel={() => setShowCategoryForm(false)}
                  />
                )}
                <CategoryList categories={categories} fetchCategories={fetchCategories} />
              </div>
            }
          />
          <Route
            path="products"
            element={
              <div className="space-y-6">
                <button
                  onClick={() => setShowProductForm(true)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 float-right"
                >
                  Add Product
                </button>
                {showProductForm && (
                  <ProductForm
                    onProductCreated={() => {
                      fetchProducts();
                      setShowProductForm(false);
                    }}
                    onCancel={() => setShowProductForm(false)}
                  />
                )}
                <ProductList products={products} fetchProducts={fetchProducts} />
              </div>
            }
          />
          <Route path="users" element={<div>Users Management (Coming Soon)</div>} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminDashboard;