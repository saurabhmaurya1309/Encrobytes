import React, { useState } from 'react';
import { createCategory } from '../../api/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CategoryForm = ({ onCategoryCreated, onCancel }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name || !image) {
      setError('Name and Image are required.');
      toast.error('Name and Image are required.');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);

    try {
      const res = await createCategory(formData);
      if (res.data) {
        setSuccess('Category created successfully.');
        setName('');
        setImage(null);
        onCategoryCreated(); // Notify parent component
        toast.success('Category created successfully!'); // Show toast notification
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Error creating category.');
      toast.error('Error creating category.');
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md transition-shadow hover:shadow-lg max-w-lg mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Create New Category</h2>

      {error && <p className="text-red-600 font-medium mb-4">{error}</p>}
      {success && <p className="text-green-600 font-medium mb-4">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Category Name */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">Category Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter category name"
            required
          />
        </div>

        {/* Category Image */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Create Category
          </button>
        </div>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default CategoryForm;
