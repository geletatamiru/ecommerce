import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext";
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
  const handleAddToCart = () => {
    addToCart(product, 1);
  };
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p>{product.shortDescription}</p>

      <div className="product-buttons">
      <button onClick={handleAddToCart} className='add-btn'>Add to Cart</button>
        <Link to={`/product/${product.id}`} className="details-btn">View Details</Link>
      </div>
    </div>
  );
};

export default ProductCard;
