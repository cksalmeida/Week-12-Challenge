import { useCart } from '../components/CartContext'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import DefaultBanner from '../components/DefaultBanner'
import HighQuality from '../components/HighQuality'
import Footer from '../components/Footer'

const Cart: React.FC = () => {
  const { cartItems, removeItemFromCart, addItemToCart } = useCart()
  const navigate = useNavigate()

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  const handleQuantityChange = (index: number, delta: number) => {
    const item = cartItems[index]
    const newQuantity = item.quantity + delta

    if (newQuantity > 0) {
      const updatedItem = { ...item, quantity: newQuantity }
      removeItemFromCart(index)
      addItemToCart(updatedItem)
    }
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate('/Checkout')
    } else {
      alert('Seu carrinho está vazio.')
    }
  }

  return (
    <>
      <Header />
      <DefaultBanner
        Title={<h1 className="text-3xl font-medium">Cart</h1>}
        Path={<p className="text-lg font-bold">Home &gt; <span className="font-normal">Cart</span></p>}
      />
      <div className="container mx-auto p-4 mt-5 mb-5">
        {cartItems.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-[#F9F1E7]">
                    <th className="px-4 py-2 text-left">Product</th>
                    <th className="px-4 py-2 text-left">Price</th>
                    <th className="px-4 py-2 text-center">Quantity</th>
                    <th className="px-4 py-2 text-left">Subtotal</th>
                    <th className="px-4 py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="px-2 py-3 flex items-center">
                        <img src={item.image} alt={item.title} className="w-16 h-16 rounded mr-4" />
                        {item.title}
                      </td>
                      <td className="px-4 py-2">Rp {item.price.toLocaleString('id-ID')}</td>
                      <td className="px-4 py-2 text-center">
                        <div className="flex justify-center border py-2 border-black rounded-md items-center">
                          <button onClick={() => handleQuantityChange(index, -1)} className="px-2">-</button>
                          <span className="mx-2">{item.quantity}</span>
                          <button onClick={() => handleQuantityChange(index, 1)} className="px-2">+</button>
                        </div>
                      </td>
                      <td className="px-4 py-2">Rp {(item.price * item.quantity).toLocaleString('id-ID')}</td>
                      <td className="px-4 py-2">
                        <button onClick={() => removeItemFromCart(index)} className="text-red-500">&times;</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-span-1 bg-[#F9F1E7] p-6 ">
              <h2 className="text-xl text-center font-bold">Cart Totals</h2>
              <div className="mt-4 flex flex-col">
                <p className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rp {subtotal.toLocaleString('id-ID')}</span>
                </p>
                <p className="flex justify-between text-lg font-semibold mt-4">
                  <span>Total</span>
                  <span className='text-[#B88E2F]'>Rp {subtotal.toLocaleString('id-ID')}</span>
                </p>
                <button onClick={handleCheckout} className="mt-6 max-w-32 px-2 border border-black py-2 rounded-lg">Check Out</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <HighQuality />
      <Footer />
    </>
  )
}

export default Cart
