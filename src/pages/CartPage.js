import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CartPage.css";  // Import CSS

const CartPage = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h2>{item.name}</h2>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <button className="clear-cart-button" onClick={clearCart}>Clear Cart</button>
        </div>
      )}
      <div className="cart-summary">
        <div>Total: </div>
        <div className="total-price">
          $
          {cart.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
