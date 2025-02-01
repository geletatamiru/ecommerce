import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import "./TrendingProducts.css";
// Product Data with Background Images
const TrendingProducts = () => {
  const { products } = useContext(ProductsContext);
  return (
    <section className="trending">
      <div className="product-gridd">
        {products.slice(0,4).map((product) => (
          <div
            key={product.id}
            className="product-card1"
            style={{ backgroundImage: `url(${product.image})` }}
          >
            <div className="product-detail">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <Link to={`/product/${product.id}`}> {/* Link to the Products Page */} 
                <button className="buy-btn">Shop Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;
