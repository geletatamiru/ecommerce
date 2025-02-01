import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductsProvider } from "./context/ProductsContext";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import ProductDetails from "./components/ProductDetails";
import CartPage from "./pages/CartPage";
// import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <CartProvider>
      <ProductsProvider>
      <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          {/* <Route path="*" element={<NotFoundPage />} />s */}
        </Routes>
      </main>
      <Footer />
      </Router>
      </ProductsProvider>
    </CartProvider>
  );
}

export default App;
