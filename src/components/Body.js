import { Link } from "react-router-dom";
import "./body.css";

const Body = () => {
  return (
    <div className="body">
      {/* Text Section */}
      <div className="description">
        <h1>Get Your Essentials Delivered to Campus!</h1>
        <p>
          Hassle-Free Shopping for University Students! Find everything you need – from food to gadgets – delivered to your dorm!
        </p>
        <Link to={'/products'} className="shop-btn">Shop Now</Link>
      </div>

      {/* Image Section */}
      <div className="img-container">
        <img src='/images/shop3.jpg' alt="shop-img" />
      </div>
    </div>
  );
};

export default Body;
