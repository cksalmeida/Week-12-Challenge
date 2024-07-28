import ProductCard from './ProductCard'

const RelatedProducts = ({ relatedProducts }) => {

  return (
    <div className="border-t my-8">
      <div className="max-w-6xl mx-auto mt-8">
      <h2 className="text-2xl text-center font-bold mb-6">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {relatedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      </div>
    </div>
  )
}

export default RelatedProducts
