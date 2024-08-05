import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

interface ProductListProps {
  limit?: number;
  sortBy?: string;
  pagination?: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ limit = 16, sortBy = 'default', pagination = true }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => {
        const sortedProducts = sortProducts(response.data, sortBy);
        setProducts(sortedProducts);
        setTotalPages(Math.ceil(sortedProducts.length / limit));
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, [limit, sortBy]);

  const sortProducts = (products: any[], sortBy: string) => {
    switch (sortBy) {
      case 'price-asc':
        return products.sort((a, b) => a.salePrice - b.salePrice);
      case 'price-desc':
        return products.sort((a, b) => b.salePrice - a.salePrice);
      case 'rating':
        return products.sort((a, b) => b.rating - a.rating);
      default:
        return products;
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * limit;
  const displayedProducts = products.slice(startIndex, startIndex + limit);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {pagination && (
        <div className="flex justify-center mb-4 mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded-md mx-1"
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 border rounded-md mx-1 ${currentPage === index + 1 ? 'bg-yellow-500 text-white' : ''}`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded-md mx-1"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
