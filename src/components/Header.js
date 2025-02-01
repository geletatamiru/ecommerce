import React, { useState,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  return (
    <header className="header">
      {/* Logo Click Redirects to Home */}
      <div className="logo" onClick={() => navigate("/")}>
        CampusStore
      </div>

      {/* Hamburger Menu Button (Only Visible on Mobile) */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Navigation Menu */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Search Bar and Cart (Hidden on Small Screens) */}
      <div className="header-icons">
        <Link to="/cart" className="cart-icon">{cart.reduce((acc, item) => acc + item.quantity, 0)}🛒</Link>
      </div>
    </header>
  );
};

export default Header;
