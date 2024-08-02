import FurniroLogo from "../assets/FurniroLogo.svg"
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

  return (
    <>
      <header className="w-full h-24 flex items-center">
        <img src={FurniroLogo} alt="Furniro Logo" className="ml-[100px]" />
        <div className="flex gap-20 font-medium ml-[270px]">
          <Link to="/">Home</Link>
          <Link to="/Shop">Shop</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </div>
        <img
          src={Cart}
          className="ml-96 cursor-pointer"
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
