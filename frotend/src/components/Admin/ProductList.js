import React, { useState, useRef } from 'react';
import { deleteProduct } from '../../api/api';
import EditProductModal from './EditProductModal';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { createPortal } from 'react-dom';

const ProductList = ({ products, fetchProducts }) => {
  const [error, setError] = useState('');
  const [editProduct, setEditProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);
  const lightboxRef = useRef(null);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(id);
        fetchProducts();
      } catch (err) {
        setError('Error deleting product.');
      }
    }
  };

  const handleImageClick = (images) => {
    setCurrentImages(images);
    setIsOpen(true);
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl mb-4">Existing Products</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-2 pl-4 border-b text-left">Name</th>
                <th className="py-2 px-2 pl-4 border-b text-left">Category</th>
                <th className="py-2 px-2 pl-4 border-b text-left">Price</th>
                <th className="py-2 px-4 border-b text-left">Quantity</th>
                <th className="py-2 px-4 border-b text-left">Images</th>
                <th className="py-2 px-4 border-b text-left">Actions</th>

              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td className="py-2 px-4 border-b">{product.name}</td>
                  <td className="py-2 px-4 border-b">
                    {product.category?.name || 'No Category'}
                  </td>
                  <td className="py-2 px-4 border-b">${product.price}</td>
                  <td className="py-2 px-4 border-b">{product.quantity}</td>
                  <td className="py-2 px-4 border-b space-x-2">
                    {product.images?.length > 0 ? (
                      <img
                        src={product.images[0]}
                        alt={`${product.name} 1`}
                        className="w-12 h-12 object-cover cursor-pointer"
                        onClick={() => handleImageClick(product.images)}
                      />
                    ) : (
                      <span>No Images</span>
                    )}
                  </td>
                  <td className="py-2 px-4 border-b space-x-2">
                    <button
                      onClick={() => setEditProduct(product)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
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

      {editProduct && (
        <EditProductModal
          product={editProduct}
          onClose={() => setEditProduct(null)}
          onUpdate={fetchProducts}
        />
      )}

      {isOpen && createPortal(
        <Lightbox
          ref={lightboxRef}
          mainSrc={currentImages[photoIndex]}
          nextSrc={currentImages[(photoIndex + 1) % currentImages.length]}
          prevSrc={currentImages[(photoIndex + currentImages.length - 1) % currentImages.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + currentImages.length - 1) % currentImages.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % currentImages.length)
          }
        />,
        document.getElementById('lightbox-root')
      )}
    </div>
  );
};

export default ProductList;
