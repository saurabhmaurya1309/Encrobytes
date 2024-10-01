import React, { useEffect, useState } from 'react';
import { countCategories, countProducts, countUsers } from '../../api/api';
import { FaBox, FaUsers, FaClipboardList, FaShoppingCart } from 'react-icons/fa';

const DashboardOverview = () => {
  const [categoriesCount, setCategoriesCount] = useState(0);
  const [productsCount, setProductsCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [ordersCount] = useState(5); // Dummy data for orders

  useEffect(() => {
    // Fetch number of categories
    countCategories().then((res) => {
      setCategoriesCount(res.data.count);
    });

    // Fetch number of products
    countProducts().then((res) => {
      setProductsCount(res.data.count);
    });

    // Fetch number of users
    countUsers().then((res) => {
      setUsersCount(res.data.count);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-gray-100 min-h-screen">
      <div className="bg-white p-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center h-24">
        <FaClipboardList className="text-blue-500 text-2xl mr-3" />
        <div>
          <h3 className="text-lg font-bold">Categories</h3>
          <p className="text-gray-700">{categoriesCount}</p>
        </div>
      </div>
      <div className="bg-white p-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center h-24">
        <FaBox className="text-green-500 text-2xl mr-3" />
        <div>
          <h3 className="text-lg font-bold">Products</h3>
          <p className="text-gray-700">{productsCount}</p>
        </div>
      </div>
      <div className="bg-white p-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center h-24">
        <FaUsers className="text-purple-500 text-2xl mr-3" />
        <div>
          <h3 className="text-lg font-bold">Users</h3>
          <p className="text-gray-700">{usersCount}</p>
        </div>
      </div>
      <div className="bg-white p-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center h-24">
        <FaShoppingCart className="text-red-500 text-2xl mr-3" />
        <div>
          <h3 className="text-lg font-bold">Orders</h3>
          <p className="text-gray-700">{ordersCount}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
