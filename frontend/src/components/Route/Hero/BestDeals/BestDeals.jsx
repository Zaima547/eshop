import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const BestDeals = () => {
  const [products] = useState([
    {
      id: 1,
      store: "Apple inc.",
      name: "Iphone 14 pro max 256 gb ssd and 8 gb ram",
      price: "1099",
      oldPrice: "1199",
      sold: "80 sold",
      img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
    },
    {
      id: 2,
      store: "Apple inc.",
      name: "Sony Headphone Bluetooth Wireless - Black",
      price: "249",
      oldPrice: "299",
      sold: "75 sold",
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 3,
      store: "Alisha Shoes Mart",
      name: "New Trend shoes for gents with all sizes",
      price: "89",
      oldPrice: "120",
      sold: "49 sold",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
    {
      id: 4,
      store: "Apple inc.",
      name: "MacBook pro M2 chipset 256gb ssd 8gb ram",
      price: "1049",
      oldPrice: "1099",
      sold: "35 sold",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    },
    {
      id: 5,
      store: "Shahryar Watch House",
      name: "New Fashionable Watch for man 2023",
      price: "79",
      oldPrice: "109",
      sold: "52 sold",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
  ]);

  return (
    <div
      style={{
        width: "100%",
        padding: "20px 30px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Best Deals
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "20px",
        }}
      >
        {products.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default BestDeals;