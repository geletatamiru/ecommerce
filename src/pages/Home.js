import React from "react";
import Body from "../components/Body";
import "./Home.css";
import TrendingProducts from "../components/TrendingProducts";


const Home = () => {
  return (
    <div>
      <Body />
      <TrendingProducts />
      {/* About Preview */}
      <section className="about-preview">
        <h2>About Us</h2>
        <p>Helping university students get essentials easily and affordably.</p>
        <a href="/about" className="learn-more">Learn More →</a>
      </section>
    </div>
  );
};

export default Home;
