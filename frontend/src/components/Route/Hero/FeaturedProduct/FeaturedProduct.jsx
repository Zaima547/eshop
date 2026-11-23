import React from "react";
import { useNavigate } from "react-router-dom";

const FeaturedProduct = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 101,
      store: "Samsung Official",
      name: "Samsung Galaxy S24 Ultra 512GB 5G...",
      price: "1199$",
      oldPrice: "1299$",
      sold: "92 sold",
      img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500",
    },
    {
      id: 102,
      store: "JBL Store",
      name: "JBL Bluetooth Speaker Portable Waterproof...",
      price: "99$",
      oldPrice: "149$",
      sold: "130 sold",
      img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    },
    {
      id: 103,
      store: "Leather World",
      name: "Men Premium Leather Jacket Brown Color...",
      price: "129$",
      oldPrice: "199$",
      sold: "60 sold",
      img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
    },
    {
      id: 104,
      store: "Apple inc.",
      name: "Apple Watch Ultra 2 with GPS + Cellular...",
      price: "799$",
      oldPrice: "899$",
      sold: "48 sold",
      img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500",
    },
    {
      id: 105,
      store: "Drone Hub",
      name: "DJI Mini Drone 4K Camera with Remote...",
      price: "499$",
      oldPrice: "649$",
      sold: "33 sold",
      img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500",
    },
  ];

  return (
    <div style={{ width: "100%", padding: "20px 30px", boxSizing: "border-box" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
        Featured Products
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "20px", alignItems: "start" }}>
        {products.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}
            style={{ cursor: "pointer" }}
          >
            <div style={{ background: "#f5f5f0", borderRadius: "10px", overflow: "hidden", width: "100%", height: "180px" }}>
              <img
                src={item.img}
                alt={item.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            <p style={{ color: "#999", fontSize: "12px", marginTop: "10px" }}>{item.store}</p>
            <h3 style={{ fontSize: "14px", fontWeight: "500", marginTop: "4px", minHeight: "36px" }}>{item.name}</h3>
            <p style={{ color: "#f5b301", fontSize: "14px", marginTop: "4px" }}>★★★★★</p>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "4px" }}>
              <div>
                <span style={{ fontWeight: "bold" }}>{item.price}</span>
                <span style={{ color: "#aaa", textDecoration: "line-through", fontSize: "12px", marginLeft: "6px" }}>{item.oldPrice}</span>
              </div>
              <span style={{ color: "#aaa", fontSize: "12px" }}>{item.sold}</span>
            </div>

            <button
              onClick={(e) => e.stopPropagation()}
              style={{
                 width: "100%", 
                marginTop: "10px", 
                background: "black",
                 color: "white", 
                 padding: "8px",
                  borderRadius: "8px",
                   border: "none", 
                   cursor: "pointer" }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;