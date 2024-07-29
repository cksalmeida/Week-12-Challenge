import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'

interface ProductListProps {
  limit?: number
  sortBy?: string
}

const ProductList: React.FC<ProductListProps> = ({ limit, sortBy }) => {
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

  const sortProducts = (products: any[], sortBy: string) => {
    switch (sortBy) {
      case 'price-asc':
        return products.sort((a, b) => a.salePrice - b.salePrice)
      case 'price-desc':
        return products.sort((a, b) => b.salePrice - a.salePrice)
      case 'rating':
        return products.sort((a, b) => b.rating - a.rating)
      default:
        return products
    }
  }

  const displayedProducts = limit ? sortProducts(products, sortBy).slice(0, limit) : sortProducts(products, sortBy)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {displayedProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
