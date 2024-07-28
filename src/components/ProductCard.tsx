import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    
  return (
    <Link to={`/product/${product.id}`} className="block bg-[#faf8f8] overflow-hidden m-3 relative">
      <img className="w-full" src={product.images.mainImage} alt={product.title} />
      <div className="py-3 px-1">
        <h3 className="font-bold text-lg mb-2">{product.title}</h3>
        <p className="text-gray-700 text-base">{product.description.short}</p>
        <div className="flex items-baseline justify-between mt-2">
          <span className="font-bold text-lg">Rp {product.salePrice.toLocaleString('id-ID')}</span>
          {product.normalPrice && (
            <span className="text-sm line-through text-gray-600">Rp {product.normalPrice.toLocaleString('id-ID')}</span>
          )}
        </div>
        {product.discountPercentage && (
          <span className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 text-sm">
            -{Math.round(product.discountPercentage * 100)}%
          </span>
        )}
        {product.new && (
          <span className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 text-sm">
            New
          </span>
        )}
      </div>
    </Link>
  )
}

export default ProductCard
