import React from "react";
import Header from "../components/Layout/Header";
import BestDeals from "../components/Route/Hero/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/Hero/FeaturedProduct/FeaturedProduct";
import Footer from "../components/Route/Hero/Footer/Footer";

const ProductsPage = () => {
  return (
    <div>
      <Header />
      <h1 style={{ textAlign: "center", marginTop: "20px", fontSize: "28px", fontWeight: "bold" }}>All Products</h1>
      <BestDeals />
      <FeaturedProduct />
      <Footer />
    </div>
  );
};
export default ProductsPage;