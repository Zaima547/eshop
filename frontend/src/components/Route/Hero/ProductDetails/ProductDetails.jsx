import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { AiFillStar, AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// Best Deals wale products - id 1 to 5
const allProducts = [
  {
    id: 1,
    store: "Apple inc.",
    name: "Iphone 14 pro max 256 gb ssd and 8 gb ram",
    price: "1099",
    oldPrice: "1199",
    sold: "80 sold",
    stock: 15,
    img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800",
    description: "iPhone 14 Pro Max with A16 Bionic chip, Super Retina XDR display, 48MP camera and long lasting battery.",
  },
  {
    id: 2,
    store: "Apple inc.",
    name: "Sony Headphone Bluetooth Wireless - Black",
    price: "249",
    oldPrice: "299",
    sold: "75 sold",
    stock: 20,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    description: "Sony Wireless Headphone with Noise Cancellation, 30 hours battery, deep bass and super comfortable.",
  },
  {
    id: 3,
    store: "Alisha Shoes Mart",
    name: "New Trend shoes for gents with all sizes",
    price: "89",
    oldPrice: "120",
    sold: "49 sold",
    stock: 30,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    description: "Trendy shoes for gents, lightweight, comfortable and stylish. Available in all sizes.",
  },
  {
    id: 4,
    store: "Apple inc.",
    name: "MacBook pro M2 chipset 256gb ssd 8gb ram",
    price: "1049",
    oldPrice: "1099",
    sold: "35 sold",
    stock: 10,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
    description: "MacBook Pro with M2 Chip, 13-inch Retina display, 256GB SSD, 8GB RAM. Super fast for work and editing.",
  },
  {
    id: 5,
    store: "Shahryar Watch House",
    name: "New Fashionable Watch for man 2023",
    price: "79",
    oldPrice: "109",
    sold: "52 sold",
    stock: 25,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
    description: "Fashionable watch for men, premium look, water resistant and long lasting battery.",
  },
];

// Featured wale products - id 101 to 105
const featuredProducts = [
  {
    id: 101,
    store: "Samsung Official",
    name: "Samsung Galaxy S24 Ultra 512GB 5G",
    price: "1199",
    oldPrice: "1299",
    sold: "92 sold",
    stock: 15,
    img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500",
    description: "Samsung Galaxy S24 Ultra with 512GB storage, 5G support, 200MP camera and S Pen.",
  },
  {
    id: 102,
    store: "JBL Store",
    name: "JBL Bluetooth Speaker Portable Waterproof",
    price: "99",
    oldPrice: "149",
    sold: "130 sold",
    stock: 20,
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    description: "JBL Bluetooth Speaker Portable Waterproof with deep bass and 20 hours battery.",
  },
  {
    id: 103,
    store: "Leather World",
    name: "Men Premium Leather Jacket Brown Color",
    price: "129",
    oldPrice: "199",
    sold: "60 sold",
    stock: 30,
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
    description: "Men Premium Leather Jacket Brown Color, stylish, warm and comfortable.",
  },
  {
    id: 104,
    store: "Apple inc.",
    name: "Apple Watch Ultra 2 with GPS + Cellular",
    price: "799",
    oldPrice: "899",
    sold: "48 sold",
    stock: 10,
    img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500",
    description: "Apple Watch Ultra 2 with GPS + Cellular, bright display and long battery life.",
  },
  {
    id: 105,
    store: "Drone Hub",
    name: "DJI Mini Drone 4K Camera with Remote",
    price: "499",
    oldPrice: "649",
    sold: "33 sold",
    stock: 25,
    img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500",
    description: "DJI Mini Drone 4K Camera with Remote, stable flying and high quality video.",
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const [count, setCount] = useState(1);

  // id ko number me badlo, phir sahi list me se dhoondo
  const productId = Number(id);
  const product =
    [...allProducts, ...featuredProducts].find((p) => p.id === productId) ||
    allProducts[0];

  return (
    <div style={{ width: "100%", padding: "30px", boxSizing: "border-box", background: "#fff" }}>
      <Link to="/" style={{ color: "#555", fontSize: "14px" }}>← Back to Home</Link>

      <div style={{ display: "flex", gap: "40px", marginTop: "20px", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "300px" }}>
          <img
            src={product.img}
            alt={product.name}
            style={{ width: "100%", height: "450px", objectFit: "cover", borderRadius: "15px", background: "#f5f5f0" }}
          />
        </div>

        <div style={{ flex: 1, minWidth: "300px" }}>
          <h5 style={{ color: "#3a7bd5", fontSize: "16px" }}>{product.store}</h5>
          <h2 style={{ fontSize: "28px", fontWeight: "bold", margin: "10px 0" }}>{product.name}</h2>

          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <AiFillStar size={22} color="#F6BA00" />
            <AiFillStar size={22} color="#F6BA00" />
            <AiFillStar size={22} color="#F6BA00" />
            <AiFillStar size={22} color="#F6BA00" />
            <AiFillStar size={22} color="#F6BA00" />
            <span style={{ marginLeft: "5px", color: "#555" }}>(4.9) • {product.sold}</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "15px", margin: "20px 0" }}>
            <h2 style={{ fontSize: "32px", fontWeight: "bold" }}>{product.price}$</h2>
            <h4 style={{ fontSize: "20px", color: "red", textDecoration: "line-through" }}>{product.oldPrice}$</h4>
            <span style={{ background: "#e7f9ee", color: "#2ecc71", padding: "4px 10px", borderRadius: "5px", fontSize: "14px" }}>
              In Stock: {product.stock}
            </span>
          </div>

          <p style={{ color: "#555", lineHeight: "1.6", fontSize: "15px" }}>{product.description}</p>

          <div style={{ display: "flex", alignItems: "center", gap: "20px", margin: "25px 0" }}>
            <span style={{ fontWeight: "bold" }}>Quantity:</span>
            <div style={{ display: "flex", alignItems: "center", border: "1px solid #ddd", borderRadius: "8px", overflow: "hidden" }}>
              <button onClick={() => setCount(count > 1 ? count - 1 : 1)} style={{ padding: "8px 12px", border: "none", background: "#f5f5f5", cursor: "pointer" }}>
                <AiOutlineMinus />
              </button>
              <span style={{ padding: "8px 20px", fontWeight: "bold" }}>{count}</span>
              <button onClick={() => setCount(count + 1)} style={{ padding: "8px 12px", border: "none", background: "#f5f5f5", cursor: "pointer" }}>
                <AiOutlinePlus />
              </button>
            </div>
            <AiOutlineHeart size={28} style={{ cursor: "pointer", color: "red" }} />
          </div>

          <div style={{ display: "flex", gap: "15px" }}>
            <button style={{ flex: 1, padding: "14px", background: "#333", color: "#fff", border: "none", borderRadius: "8px", fontSize: "16px", fontWeight: "bold", cursor: "pointer" }}>
              Add to Cart
            </button>
            <button style={{ flex: 1, padding: "14px", background: "#f6ba00", color: "#fff", border: "none", borderRadius: "8px", fontSize: "16px", fontWeight: "bold", cursor: "pointer" }}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;