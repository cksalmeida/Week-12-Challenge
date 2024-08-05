import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HighQuality from '../components/HighQuality'
import DefaultBanner from '../components/DefaultBanner'
import BillingDetails from '../components/BillingDetails'
import { useCart } from '../components/CartContext'

const Checkout: React.FC = () => {
  const { cartItems } = useCart()
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null)

  const handlePaymentMethodChange = (method: string) => {
    setSelectedPaymentMethod(method)
  }

  return (
    <>
      <Header />
      <DefaultBanner
        Title={<h1 className="text-3xl font-medium">Checkout</h1>}
        Path={<p className="text-lg font-bold">Home &gt; <span className="font-normal">Checkout</span></p>}
      />
      <div className="container mx-auto p-4 mt-5 mb-5 flex justify-center">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-4">
          <BillingDetails title="Billing details" />
          <div className="p-4">
            <h2 className="text-lg font-bold mt-20 mb-4">Product</h2>
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between mb-2">
                <div className="font-bold"><span className="text-[#9F9F9F] font-normal">{item.title}</span> x {item.quantity}</div>
                <span>Rp {item.price.toLocaleString('id-ID')}</span>
              </div>
            ))}
            <div className="pt-4">
              <p className="flex justify-between">
                <span className="font-bold">Subtotal</span>
                <span>Rp {subtotal.toLocaleString('id-ID')}</span>
              </p>
              <p className="flex justify-between text-xl pb-6 border-b font-bold mt-4">
                <span>Total</span>
                <span className="text-[#B88E2F]">Rp {subtotal.toLocaleString('id-ID')}</span>
              </p>
              <div className="mt-4 font-semibold">
                <form className="mt-2">
                  <div className="mb-4">
                    <input 
                      type="radio" 
                      id="bank-transfer" 
                      name="payment-method" 
                      className="mr-2" 
                      onChange={() => handlePaymentMethodChange('bank-transfer')}
                    />
                    <label htmlFor="bank-transfer">Direct Bank Transfer</label>
                    {selectedPaymentMethod === 'bank-transfer' && (
                      <div className="mt-4 text-[#9F9F9F] font-normal">
                        <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                      </div>
                    )}
                  </div>
                  <div>
                    <input 
                      type="radio" 
                      id="cod" 
                      name="payment-method" 
                      className="mr-2" 
                      onChange={() => handlePaymentMethodChange('cod')}
                    />
                    <label htmlFor="cod">Cash On Delivery</label>
                    {selectedPaymentMethod === 'cod' && (
                      <div className="mt-4 text-[#9F9F9F] font-normal">
                        <p>Pay with cash upon delivery.</p>
                      </div>
                    )}
                  </div>
                </form>
                <div className="flex justify-center mt-6">
                  <button className="px-20 py-3 border border-black rounded-lg">Place order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HighQuality />
      <Footer />
    </>
  )
}

export default Checkout
