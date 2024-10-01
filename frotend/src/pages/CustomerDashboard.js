import React from 'react';
import Features from '../components/Customer/Features';
import ProductCategories from '../components/Customer/ProductCategories';
import ProductList from '../components/Customer/ProductList';
import ProductBanner from '../components/Customer/ProductBanner';
import WhyChooseUs from '../components/Customer/WhyChooseUs';
import { useNavigate } from 'react-router-dom';
import NatureGlow from '../components/Customer/NatureGlow';
import Footer from '../components/Customer/Footer';

export default function CustomerDashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token'); // Adjust according to your auth logic
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div className="font-sans overflow-hidden">
      <nav className="flex items-center justify-between px-8 py-4 bg-gray-900">
        <a href="#home">
          <img src="https://www.payalherbal.com/wp-content/uploads/2021/07/payalherbal-1.jpg" alt="Layal's Logo" className="h-10" />
        </a>
        <ul className="flex space-x-6 text-white">
          <li><a href="#home" className="hover:text-gray-300">Home</a></li>
          <li><a href="#about" className="hover:text-gray-300">About</a></li>
          <li><a href="#shop" className="hover:text-gray-300">Shop</a></li>
          <li><a href="#faqs" className="hover:text-gray-300">Faqs</a></li>
        </ul>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="text-white hover:text-gray-300">USD <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
          </div>
          <button className="text-white hover:text-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </button>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Logout</button>
        </div>
      </nav>
      <div className="flex justify-center">
        <div className="w-full max-w-screen-xl">
          <header className="relative text-center text-white py-48" style={{ backgroundImage: "url('https://th.bing.com/th/id/OIP.gEJu3xQ8bSsl3UTo0plq4QHaEK?rs=1&pid=ImgDetMain')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10">
              <h1 className="text-5xl font-bold">Products That Every <br /> <span className='text-green-500'>Woman Needs </span></h1>
              <p className="mt-8 text-lg mx-auto max-w-xl">Integer quis tempor orci. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer quis tempor orci. Suspendisse</p>
              <div className="mt-12 flex justify-center">
                <input type="text" placeholder="Search Product" className="px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" />
                <button className="bg-green-500 hover:bg-green-700 text-white px-6 py-2 rounded-r-md">Shop Now <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></button>
              </div>
            </div>
          </header>
          <Features />
          <ProductCategories />
          <ProductList />
          <ProductBanner />
          <WhyChooseUs />
          <NatureGlow/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}
