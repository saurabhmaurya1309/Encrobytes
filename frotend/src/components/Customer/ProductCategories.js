import React, { useState, useEffect } from 'react';
import { getCategories, getProductsByCategory } from '../../api/api';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const ProductCategories = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // For handling lightbox
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = async (categoryId) => {
    try {
      const response = await getProductsByCategory(categoryId);
      setProducts(response.data);
      setSelectedCategory(categoryId);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleImageClick = (images, index) => {
    setCurrentImages(images);
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Product Category
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
              onClick={() => handleCategoryClick(category._id)}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <p className="mt-4 text-lg font-medium text-gray-900">
                {category.name}
              </p>
            </div>
          ))}
        </div>

        {selectedCategory && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900">Products</h3>
            <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <div key={product.id} className="p-6 bg-white rounded-lg shadow-md">
                  {/* Display the first image and allow users to click to view all images in the lightbox */}
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md cursor-pointer"
                    onClick={() => handleImageClick(product.images, 0)} // Open the lightbox with the first image
                  />
                  <p className="mt-4 text-lg font-medium text-gray-900">
                    {product.name}
                  </p>
                  <p className="mt-2 text-gray-600">{product.description}</p>
                  <p className="mt-2 text-gray-900 font-bold">${product.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lightbox for displaying product images */}
        {isOpen && (
          <Lightbox
            mainSrc={currentImages[photoIndex]}
            nextSrc={currentImages[(photoIndex + 1) % currentImages.length]}
            prevSrc={currentImages[(photoIndex + currentImages.length - 1) % currentImages.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() => setPhotoIndex((photoIndex + currentImages.length - 1) % currentImages.length)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % currentImages.length)}
          />
        )}
      </div>
    </section>
  );
};

export default ProductCategories;
