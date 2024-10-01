import React, { useState, useEffect, useRef } from 'react';
import { getProducts } from '../../api/api';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { createPortal } from 'react-dom';

const ProductCard = ({ product, onImageClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
      <div className="relative">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-48 object-cover cursor-pointer"
          onClick={() => onImageClick(product.images)}
        />
        <div className="absolute top-2 right-2">
          <button className="bg-white rounded-full p-2 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-tl-md rounded-br-md">
            COMBO OFFERS
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product.category.name}</h3>
        <p className="text-base text-gray-700 mb-2">{product.name}</p>
        <p className="text-base font-medium text-gray-900">
          ${product.price} <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mt-2">
          Add
        </button>
      </div>
    </div>
  );
};

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);
  const lightboxRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts(); // Replace with your actual API endpoint
        console.log("response", response);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleImageClick = (images) => {
    setCurrentImages(images);
    setIsOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Best Seller Product</h2>
      <p className="mt-8 mb-10 text-lg mx-auto max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onImageClick={handleImageClick} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
          View More Products
        </button>
      </div>

      {isOpen && createPortal(
        <Lightbox
          ref={lightboxRef}
          mainSrc={currentImages[photoIndex]}
          nextSrc={currentImages[(photoIndex + 1) % currentImages.length]}
          prevSrc={currentImages[(photoIndex + currentImages.length - 1) % currentImages.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + currentImages.length - 1) % currentImages.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % currentImages.length)}
        />,
        document.body
      )}
    </div>
  );
};

export default ProductList;
