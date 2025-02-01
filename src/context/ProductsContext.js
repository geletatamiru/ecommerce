import React, { createContext } from "react";
// Create Context
export const ProductsContext = createContext();

// Context Provider Component
export const ProductsProvider = ({ children }) => {
  const products = [
    {
      id: 1,
      name: 'Laptop',
      price: 500,
      shortDescription: 'A powerful laptop.',
      image: '/images/shop.jpg',
      description: 'This laptop is great for students, with high performance and a long battery life.',
      category: 'Electronics',
    },
    {
      id: 2,
      name: 'Headphones',
      price: 50,
      shortDescription: 'Noise-cancelling headphones.',
      image: '/images/shop2.jpg',
      description: 'Perfect for studying or enjoying music, these headphones provide superior sound quality.',
      category: 'Electronics',
    },
    {
      id: 3,
      name: 'Headphones',
      price: 50,
      shortDescription: 'Noise-cancelling headphones.',
      image: '/images/shop3.jpg',
      description: 'Perfect for studying or enjoying music, these headphones provide superior sound quality.',
      category: 'Electronics',
    },
    {
      id: 4,
      name: 'Laptop',
      price: 500,
      shortDescription: 'A powerful laptop.',
      image: '/images/shop4.jpg',
      description: 'This laptop is great for students, with high performance and a long battery life.',
      category: 'Electronics',
    },
    // Add more products as needed...
  ];

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
