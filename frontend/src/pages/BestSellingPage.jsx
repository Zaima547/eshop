import React from "react";
import Header from "../components/Layout/Header";
import FeaturedProduct from "../components/Route/Hero/FeaturedProduct/FeaturedProduct";
import Footer from "../components/Route/Hero/Footer/Footer";

const BestSellingPage = () => {
  return (
    <div>
      <Header />
      <h1 style={{ textAlign: "center", marginTop: "20px", fontSize: "28px", fontWeight: "bold" }}>Best Selling Products</h1>
      <FeaturedProduct />
      <Footer />
    </div>
  );
};
export default BestSellingPage;