import React from "react";
import FilterIcon from "../assets/FilterIcon.svg";

interface ProductFilterProps {
  limit: number;
  setLimit: (limit: number) => void;
  sortBy: string;
  setSortBy: (sortBy: string) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ limit, setLimit, sortBy, setSortBy }) => {
  return (
    <div className="flex flex-col md:flex-row items-center w-full justify-between gap-4 p-5 bg-[#F9F1E7] mb-4">
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
        <img src={FilterIcon} alt="Filter Icon" className="w-6 h-6" />
        <button className="text-gray-600">
          <i className="fas fa-filter"></i> Filter
        </button>
        <button className="text-gray-600">
          <i className="fas fa-th"></i>
        </button>
        <button className="text-gray-600">
          <i className="fas fa-list"></i>
        </button>
        <span className="text-gray-600">Showing 1-{limit} of 32 results</span>
      </div>
      <div className="flex flex-wrap items-center justify-center md:justify-end gap-4">
        <span className="text-gray-600">Show</span>
        <select
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
          className="p-2 border rounded"
        >
          <option value={4}>4</option>
          <option value={8}>8</option>
          <option value={16}>16</option>
          <option value={20}>20</option>
        </select>
        <span className="text-gray-600">Sort by</span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="default">Default</option>
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;
