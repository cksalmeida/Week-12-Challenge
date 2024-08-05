import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Shop from './routes/Shop';
import About from './routes/About';
import Contact from './routes/Contact';
import SingleProduct from './routes/SingleProduct';
import Cart from './routes/Cart';
import Checkout from './routes/Checkout';
import Login from './routes/Login'; // Importando o componente de Login
import { CartProvider } from './components/CartContext';
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Shop',
    element: <Shop />,
  },
  {
    path: '/About',
    element: <About />,
  },
  {
    path: '/Contact',
    element: <Contact />,
  },
  {
    path: '/product/:productId',
    element: <SingleProduct />,
  },
  {
    path: '/Cart',
    element: <Cart />,
  },
  {
    path: '/Checkout',
    element: (
      <ProtectedRoute>
        <Checkout />
      </ProtectedRoute>
    ),
  },
  {
    path: '/Login',
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
