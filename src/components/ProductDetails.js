import React,{useContext,useState} from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContext } from "../context/ProductsContext";
import { CartContext } from "../context/CartContext";
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1); // Set initial quantity to 1
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found!</div>;
  }
  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };
  const handleAddToCart = () => {
    addToCart(product, quantity); // Add product with the specified quantity
  };
  return (
    <div className="product-details">
      <div className="product-images">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>{product.price}</h3>
        <div className="quantity">
          <label>Quantity</label>
          <input 
            type="number" 
            value={quantity} 
            onChange={handleQuantityChange} 
            min="1" 
            max="10" 
          />
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
