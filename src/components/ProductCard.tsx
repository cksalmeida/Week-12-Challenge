import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  
  return (
    <Link to={`/product/${product.id}`} className="group block bg-[#faf8f8] overflow-hidden m-3 relative">
      <div className="relative">
        <img className="w-full transition-opacity duration-300 ease-in-out group-hover:opacity-30" src={product.images.mainImage} alt={product.title} />
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-70 bg-[#3A3A3A] transition-opacity duration-300 ease-in-out">
          <button className="bg-white text-[#B88E2F] px-4 py-2 font-bold mb-2">Add to cart</button>
          <div className="flex space-x-4 text-white">
            <span>Share</span>
            <span>Compare</span>
            <span>Like</span>
          </div>
        </div>
      </div>
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
          <span className="absolute top-4 left-4 bg-[#2EC1AC] text-white px-2 py-1 text-sm">
            New
          </span>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
