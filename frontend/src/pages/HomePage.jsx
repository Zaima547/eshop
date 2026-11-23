import React from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Hero/Categories/Categories";
import BestDeals from "../components/Route/Hero/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/Hero/FeaturedProduct/FeaturedProduct";
import Events from "../components/Route/Hero/Events/Events";
import Sponsored from "../components/Route/Hero/Sponsored/Sponsored";
import Footer from "../components/Route/Hero/Footer/Footer";



const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <FeaturedProduct />
      <Events />
      <Sponsored />
      <Footer />
      
    </div>
  );
};

export default HomePage;