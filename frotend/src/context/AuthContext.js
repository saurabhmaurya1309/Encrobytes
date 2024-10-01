import React, { createContext, useState, useEffect } from 'react';
import { getCurrentUser, login } from '../api/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { id, email, role }
  const [loading, setLoading] = useState(true);

  // Function to fetch user data
  const fetchUser = async () => {
    try {
      const res = await getCurrentUser(); // Get user from the backend
      setUser(res.data.user); // Set user in state
    } catch (err) {
      console.error('Fetch user error:', err);
      setUser(null); // Reset user state if fetching fails
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  // Login user and fetch user data
  const loginUser = async (credentials) => {
    try {
      const res = await login(credentials); // API call to login
      console.log('Login Response:', res.data); // Log response
      if (res.data) {
        localStorage.setItem('authToken', res.data.token); // Store token in local storage
        await fetchUser(); // Fetch user after successful login
      }
    } catch (err) {
      console.error('Login error:', err);
      throw new Error('Login failed'); // Handle errors appropriately
    }
  };

  // Check for user on mount
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      fetchUser(); // Automatically fetch user on app load if token exists
    } else {
      setLoading(false); // Set loading to false if no token
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, loginUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
