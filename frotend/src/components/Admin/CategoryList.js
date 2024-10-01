import React, { useState } from 'react';
import { deleteCategory } from '../../api/api';
import EditCategoryModal from './EditCategoryModal';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CategoryList = ({ categories, fetchCategories }) => {
  const [error, setError] = useState('');
  const [editCategory, setEditCategory] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleDelete = async (id) => {
    try {
      await deleteCategory(id);
      fetchCategories(); // Refresh the category list
      toast.success('Category deleted successfully!');
    } catch (err) {
      setError('Error deleting category.');
      toast.error('Error deleting category.');
    }
  };

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md transition-shadow hover:shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Existing Categories</h2>
      
      {error && <p className="text-red-500 mb-4">{error}</p>}
      
      {categories.length === 0 ? (
        <p className="text-gray-700 text-lg">No categories available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600 border-b">
                  Name
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600 border-b">
                  Image
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600 border-b">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category._id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 text-gray-800 text-sm">{category.name}</td>
                  <td className="py-4 px-6">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-16 h-16 object-cover cursor-pointer rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      onClick={() => handleImageClick(category.image)}
                    />
                  </td>
                  <td className="py-4 px-6 space-x-2">
                    <button
                      onClick={() => setEditCategory(category)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(category._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {editCategory && (
        <EditCategoryModal
          category={editCategory}
          onClose={() => setEditCategory(null)}
          onUpdate={() => {
            fetchCategories();
            toast.success('Category updated successfully!');
          }}
        />
      )}

      {isOpen && (
        <Lightbox
          mainSrc={currentImage}
          onCloseRequest={() => setIsOpen(false)}
        />
      )}

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

export default CategoryList;
