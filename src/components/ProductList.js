import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = ({ searchQuery, filterCategory, sortOption }) => {
  const { products } = useContext(ProductsContext); // Fetching products from context

  // Filtering products based on search and category
  const filteredProducts = products.filter(
    (product) =>
      (filterCategory === 'All' || product.category === filterCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sorting logic
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOption === 'price-low-to-high') {
      return a.price - b.price;
    } else if (sortOption === 'price-high-to-low') {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="product-list">
      {sortedProducts.length > 0 ? (
        sortedProducts.map((product) => <ProductCard key={product.id} product={product} />)
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default ProductList;
