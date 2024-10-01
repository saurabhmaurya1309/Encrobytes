import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminDashboard from './pages/AdminDashboard';
import CustomerDashboard from './pages/CustomerDashboard'; // You need to create this
import { useAuth } from './hooks/useAuth'; // Custom hook to get auth status
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { user, loading } = useAuth(); // Implement useAuth to get user info

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while fetching user data
  }

  return (
    <Router>
      <ToastContainer position="top-right" autoClose={5000} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Protected Admin Route */}
        <Route
          path="/admin-dashboard/*"
          element={
            user && user.role === 'admin' ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        {/* Protected Customer Route */}
        <Route
          path="/customer-dashboard/*"
          element={
            user && user.role === 'customer' ? (
              <CustomerDashboard />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        {/* Redirect any unknown routes */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
