import React, { useState } from "react";
import "./ContactPage.css";
const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Have questions? We're here to help!</p>
      </section>

      {/* Contact Form */}
      <section className="contact-form">
        <h2>📩 Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Contact Info */}
      <section className="contact-info">
        <h2>📞 Get in Touch</h2>
        <p>Email: <a href="mailto:support@campusstore.com">support@campusstore.com</a></p>
        <p>Phone: +251 912 345 678</p>
        <div className="social-links">
          <a href="#" className="social-icon">📘 Facebook</a>
          <a href="#" className="social-icon">📷 Instagram</a>
          <a href="#" className="social-icon">✈️ Telegram</a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
