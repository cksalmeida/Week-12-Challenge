// ShoppingCartModal.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ShoppingCartModalProps {
  items: Array<{ title: string, price: number, quantity: number, image: string }>;
  onClose: () => void;
  onRemoveItem: (index: number) => void;
}

const ShoppingCartModal: React.FC<ShoppingCartModalProps> = ({ items, onClose, onRemoveItem }) => {
  const navigate = useNavigate();
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (items.length > 0) {
      navigate('/Cart'); // Navega para a página de checkout
    } else {
      alert('Seu carrinho está vazio.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-end items-start z-50">
      <div className="bg-white p-5 w-[350px] h-[650px] relative overflow-auto">
        <div className="flex justify-between border-b pb-4 items-center">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button onClick={onClose} className="text-xl">&times;</button>
        </div>
        <ul className="mt-4 overflow-auto h-[calc(100%-200px)]">
          {items.map((item, index) => (
            <li key={index} className="flex items-center mb-4">
              <img src={item.image} alt={item.title} className="w-16 h-16 rounded mr-4" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm mt-2 text-gray-500">{item.quantity} x <span className="text-[#B88E2F]">Rp {item.price.toLocaleString('id-ID')}</span></p>
              </div>
              <button onClick={() => onRemoveItem(index)} className="text-lg">&times;</button>
            </li>
          ))}
        </ul>
        <div className="mt-auto border-t pt-4">
          <p className="font-semibold">Subtotal <span className="ml-14 text-[#B88E2F]">Rp {subtotal.toLocaleString('id-ID')}</span></p>
          <div className="mt-4 flex flex-row gap-2">
            <button className="border border-black px-5 py-2 rounded-full" onClick={() => navigate('/Cart')}>Cart</button>
            <button onClick={handleCheckout} className="border border-black px-5 py-2 rounded-full">Checkout</button>
            <button className="border border-black px-5 py-2 rounded-full">Comparison</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartModal;
