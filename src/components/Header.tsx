import FurniroLogo from "../assets/FurniroLogo.svg"
import Login from "../assets/LoginIcon.svg"
import Cart from "../assets/CartIcon.svg"
import { Link, useNavigate } from "react-router-dom"
import ShoppingCartModal from "./ShoppingCartModal"
import { useCart } from '../components/CartContext'

const Header: React.FC = () => {
  const { isCartOpen, openCart, closeCart, cartItems, removeItemFromCart } = useCart()
  const navigate = useNavigate()

  const handleViewCart = () => {
    closeCart();
    navigate('/Cart')
  }

  const handleLoginClick = () => {
    navigate('/Login');
  };

  return (
    <>
      <header className="w-full h-24 flex items-center">
        <img src={FurniroLogo} alt="Furniro Logo" className="ml-[100px]" />
        <div className="flex gap-20 font-medium ml-[270px]">
          <Link to="/">Home</Link>
          <Link to="/Shop">Shop</Link>
          <Link to="">About</Link>
          <Link to="/Contact">Contact</Link>
        </div>
        <img 
          src={Login} className="ml-72 cursor-pointer"
          onClick={handleLoginClick}
          />
        <img
          src={Cart}
          className="ml-10 cursor-pointer"
          onClick={openCart}
          alt="Cart"
        />
      </header>
      {isCartOpen && (
        <ShoppingCartModal
          items={cartItems}
          onClose={closeCart}
          onRemoveItem={removeItemFromCart}
          onViewCart={handleViewCart}
        />
      )}
    </>
  )
}

export default Header
