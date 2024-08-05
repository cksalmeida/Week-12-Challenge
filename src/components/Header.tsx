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
      <header className="w-full h-24 flex items-center px-4 md:px-8 lg:px-24">
        <img src={FurniroLogo} alt="Furniro Logo" className="hidden md:block ml-4 md:ml-10 lg:ml-[100px]" />
        <div className="flex gap-4 md:gap-10 lg:gap-20 font-medium ml-auto md:ml-[100px] lg:ml-[270px]">
          <Link to="/">Home</Link>
          <Link to="/Shop">Shop</Link>
          <Link to="">About</Link>
          <Link to="/Contact">Contact</Link>
        </div>
        <div className="flex items-center gap-4 ml-auto">
          <img 
            src={Login} className="cursor-pointer"
            onClick={handleLoginClick}
          />
          <img
            src={Cart}
            className="cursor-pointer"
            onClick={openCart}
            alt="Cart"
          />
        </div>
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
