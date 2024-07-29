// ProductDetails.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Product } from '../types/Product';
import RelatedProducts from '../components/RelatedProducts';
import Breadcrumbs from '../components/BreadCrumbs';
import { useCart } from '../components/CartContext';

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number>(1); // Estado local para a quantidade
  const { addItemToCart, openCart } = useCart();

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${productId}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
        setLoading(false);
      });

    axios.get('http://localhost:3000/products?_limit=4')
      .then(response => {
        setRelatedProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the related products!', error);
      });
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addItemToCart({ title: product.title, price: product.salePrice, quantity, image: product.images.mainImage });
      openCart();
    }
  };

  const handleQuantityChange = (change: number) => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity + change)); // Garantir que a quantidade não seja menor que 1
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <Breadcrumbs productTitle={product.title} />
      <div className="max-w-5xl mx-auto flex-wrap">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col">
              <img className="w-full rounded-xl mb-5" src={product.images.mainImage} alt={product.title} />
              <div className="flex space-x-2">
                {product.images.gallery.map((img, index) => (
                  <img key={index} className="w-16 h-16 object-cover" src={img} alt={`${product.title} ${index}`} />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 pl-14">
            <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
            <div className="text-xl font-semibold text-[#9F9F9F] mb-2">Rp {product.salePrice.toLocaleString('id-ID')}</div>
            {product.normalPrice && (
              <div className="text-[#9F9F9F] text-lg line-through mb-2">Rp {product.normalPrice.toLocaleString('id-ID')}</div>
            )}
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, index) => (
                <svg key={index} className={`h-5 w-5 ${index < product.rating ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049.716l2.368 4.77L16.51 6.6l-3.57 3.48.841 4.897L9.05 13.016l-4.373 2.3.841-4.897L.949 6.6l5.094-.934L9.05.716z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-600"> | {product.rating} Customer Review</span>
            </div>
            <p className="text-gray-700 mb-4">{product.description.short}</p>

            <div className="mb-4">
              <h3 className="font-bold mb-2 text-[#9F9F9F]">Size</h3>
              <div className="flex space-x-2">
                {product.sizes.map((size, index) => (
                  <span key={index} className="rounded bg-[#F9F1E7] font-semibold text-sm px-2 py-1">{size}</span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="font-bold mb-2 text-[#9F9F9F]">Color</h3>
              <div className="flex space-x-2">
                {product.colors.map((color, index) => (
                  <span key={index} className="w-6 h-6 rounded-full" style={{ backgroundColor: color.hex }}></span>
                ))}
              </div>
            </div>

            <div className="flex items-center pb-8 border-b mb-4">
              <div className="border rounded-md mr-4 flex items-center">
                <button onClick={() => handleQuantityChange(-1)} className="p-2 font-bold">-</button>
                <span className="px-1 font-bold">{quantity}</span>
                <button onClick={() => handleQuantityChange(1)} className="p-2 font-bold">+</button>
              </div>
              <button onClick={handleAddToCart} className="border px-4 py-2 font-semibold border-black rounded-md">Add To Cart</button>
            </div>

            <div className="mt-8 text-[#9F9F9F]">
              <div className="grid gap-5 text-sm">
                <div>
                  SKU: {product.sku}
                </div>
                <div>
                  Category: {product.category}
                </div>
                <div>
                  Tags: {product.tags.join(', ')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 p-8 border-t">
        <h3 className="font-bold text-center text-xl mb-2">Description</h3>
        <div className="max-w-6xl mx-auto">
          <p className="text-[#9F9F9F]">{product.description.long}</p>
        </div>
      </div>
      <RelatedProducts relatedProducts={relatedProducts} />
    </div>
  );
};

export default ProductDetails;
