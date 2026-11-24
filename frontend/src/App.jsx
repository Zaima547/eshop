import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, SignUpPage, HomePage } from "./Routes.js";
import ProductDetails from "./components/Route/Hero/ProductDetails/ProductDetails";
import BestSellingPage from "./pages/BestSellingPage";
import ProductsPage from "./pages/ProductsPage";
import EventsPage from "./pages/EventsPage";
import FaqPage from "./pages/FaqPage";
import ShopCreatePage from "./pages/ShopCreatePage";
import WishlistPage from "./pages/WishlistPage";
import CartPage from "./pages/CartPage";




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/best-selling" element={<BestSellingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/faq" element={<FaqPage />} />
         <Route path="/shop-create" element={<ShopCreatePage />} />
         <Route path="/wishlist" element={<WishlistPage />} />
           <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;