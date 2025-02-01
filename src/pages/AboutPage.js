import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>About Us</h1>
        <p>Helping university students get essentials easily and affordably.</p>
      </section>

      {/* Our Mission */}
      <section className="mission">
        <h2>🎯 Our Mission</h2>
        <p>
          We aim to make shopping more accessible for students by providing 
          affordable products with easy mobile banking payments.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <h2>✨ Why Choose Us?</h2>
        <div className="features">
          <div className="feature">
            <h3>🚀 Fast Delivery</h3>
            <p>Get your orders delivered right to your dorm.</p>
          </div>
          <div className="feature">
            <h3>💰 Affordable Prices</h3>
            <p>We ensure student-friendly pricing on all products.</p>
          </div>
          <div className="feature">
            <h3>📱 Easy Payments</h3>
            <p>Pay securely using Telebirr, CBE Mobile, or Amole.</p>
          </div>
          <div className="feature">
            <h3>🎓 Student-Focused</h3>
            <p>Designed for university students’ convenience.</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact">
        <h2>📞 Contact Us</h2>
        <p>Email: support@campusstore.com</p>
        <p>Phone: +251 912 345 678</p>
        <p>Follow us on <a href="#">Instagram</a> | <a href="#">Telegram</a> | <a href="#">Facebook</a></p>
      </section>
    </div>
  );
};

export default AboutPage;
