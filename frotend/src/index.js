// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Change to 'react-dom/client'
import App from './App';
import { AuthProvider } from './context/AuthContext';
import './index.css'; // Ensure Tailwind is imported
// import { BrowserRouter as Router } from 'react-router-dom';

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App within AuthProvider
root.render(
  // <React.StrictMode>
    <AuthProvider>
     
      <App />

     
    </AuthProvider>
  // </React.StrictMode>
);
