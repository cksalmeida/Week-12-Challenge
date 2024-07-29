import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home'
import Shop from './routes/Shop'
import About from './routes/About'
import Contact from './routes/Contact'
import SingleProduct from './routes/SingleProduct'
import Cart from './routes/Cart'
import { CartProvider } from './components/CartContext'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Shop",
    element: <Shop />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/product/:productId",
    element: <SingleProduct />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
)
