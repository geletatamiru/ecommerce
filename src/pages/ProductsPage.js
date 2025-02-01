import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import './ProductsPage.css';

const ProductPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [sortOption, setSortOption] = useState('price-low-to-high');

  return (
    <div className="product-page">
      {/* Filters and Search */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select onChange={(e) => setFilterCategory(e.target.value)} value={filterCategory}>
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Food">Food</option>
          {/* Add more categories */}
        </select>
        <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
          <option value="price-low-to-high">Price: Low to High</option>
          <option value="price-high-to-low">Price: High to Low</option>
        </select>
      </div>

      {/* Product List (No props, uses context inside ProductList) */}
      <ProductList searchQuery={searchQuery} filterCategory={filterCategory} sortOption={sortOption} />
    </div>
  );
};

export default ProductPage;
