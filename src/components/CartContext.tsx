import React, { createContext, useState, useContext, ReactNode } from 'react'

interface CartItem {
  title: string
  price: number
  quantity: number
  image: string
}

interface CartContextProps {
  cartItems: CartItem[];
  addItemToCart: (item: CartItem) => void
  removeItemFromCart: (index: number) => void
  isCartOpen: boolean
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextProps | undefined>(undefined)

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false)

  const addItemToCart = (item: CartItem) => {
    setCartItems(prevItems => [...prevItems, item])
  }

  const removeItemFromCart = (index: number) => {
    setCartItems(prevItems => prevItems.filter((_, i) => i !== index))
  }

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, isCartOpen, openCart, closeCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}