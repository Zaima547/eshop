import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Route/Hero/Footer/Footer";

const FaqPage = () => {
  return (
    <div>
      <Header />
      <h1 style={{ textAlign: "center", marginTop: "20px", fontSize: "28px", fontWeight: "bold" }}>FAQ - Frequently Asked Questions</h1>
      <div style={{ width: "80%", margin: "20px auto", display: "flex", flexDirection: "column", gap: "15px" }}>
        <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px" }}>
          <h3>How do I track my order?</h3>
          <p>You can track your order from your account dashboard under "My Orders" section.</p>
        </div>
        <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px" }}>
          <h3>What is the return policy?</h3>
          <p>You can return any product within 7 days of delivery for a full refund.</p>
        </div>
        <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px" }}>
          <h3>How do I become a seller?</h3>
          <p>Click on "Become Seller" button and create your shop to start selling.</p>
        </div>
        <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px" }}>
          <h3>What payment methods do you accept?</h3>
          <p>We accept Cash on Delivery, Credit Card, Debit Card and Bank Transfer.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default FaqPage;