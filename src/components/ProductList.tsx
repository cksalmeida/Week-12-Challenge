import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'

interface ProductListProps {
  limit?: number
}

const ProductList: React.FC<ProductListProps> = ({ limit }) => {
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => {
        setProducts(response.data)
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error)
      })
  }, [])

  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {displayedProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
