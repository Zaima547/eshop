import React, { useState } from "react";
import { AiFillStar, AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";


const FeaturedProduct = () => {
  const [wishlist, setWishlist] = useState([]);

  const products = [
    { id: 101,
       store: "Samsung Official",
       name: "Samsung Galaxy S24 Ultra 512GB 5G...",
        price: "1199$",
         oldPrice: "1299$",
          sold: "92 sold",
           img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500" },
    { id: 102,
       store: "JBL Store",
       name: "JBL Bluetooth Speaker Portable Waterproof...",
        price: "99$",
         oldPrice: "149$", 
         sold: "130 sold",
          img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500" },
    { id: 103,
       store: "Leather World", 
      name: "Men Premium Leather Jacket Brown Color...",
       price: "129$",
        oldPrice: "199$",
         sold: "60 sold",
          img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500" },
    { id: 104,
       store: "Apple inc.",
       name: "Apple Watch Ultra 2 with GPS + Cellular...",
        price: "799$",
         oldPrice: "899$", 
         sold: "48 sold", 
         img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500" },
    { id: 105,
       store: "Drone Hub",
        name: "DJI Mini Drone 4K Camera with Remote...",
         price: "499$", 
         oldPrice: "649$",
          sold: "33 sold", 
          img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500" },
  ];

  const toggleHeart = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((i) => i !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const isExist = cart.find((i) => (i._id || i.id) === item.id);
    if (!isExist) {
      cart.push({ ...item, qty: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
      window.dispatchEvent(new Event("cartUpdated"));
      alert("Added to cart!");
    } else {
      alert("Already in cart!");
    }
  };

  return (
    <div style={{
       width: "100%", 
    padding: "20px 30px", 
    boxSizing: "border-box"
     }}>
      <h2 style={{ 
        fontSize: "24px",
         fontWeight: "bold",
          marginBottom: "20px"
           }}>Featured Products</h2>
      <div style={{ 
        display: "grid",
         gridTemplateColumns: "repeat(5, 1fr)", 
         gap: "20px", 
         alignItems: "start"
          }}>
        {products.map((item) => (
          <div key={item.id} style={{ 
            width: "100%",
           background: "white",
            borderRadius: "10px",
             padding: "12px", 
             boxSizing: "border-box",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
               position: "relative"
                }}>
            <div style={{ position: "relative" }}>
              <div style={{ background: "#f5f5f0",
                 borderRadius: "10px", 
                 overflow: "hidden",
                  width: "100%",
                   height: "180px"
                    }}>
                <img src={item.img} alt={item.name} style={{
                   width: "100%",
                   height: "100%", 
                   objectFit: "cover", 
                   display: "block"
                    }} />
              </div>
              <div onClick={() => toggleHeart(item.id)} style={{ 
                position: "absolute",
                 top: "8px", 
                 right: "8px", 
                 background: "white",
                  width: "35px",
                   height: "35px",
                    borderRadius: "50%",
                     display: "flex", 
                     alignItems: "center",
                      justifyContent: "center",
                       cursor: "pointer",
                        boxShadow: "0 1px 5px rgba(0,0,0,0.2)"
                         }}>
                {wishlist.includes(item.id) ? <AiFillHeart size={22} color="red" /> : <AiOutlineHeart size={22} color="#333" />}
              </div>
            </div>
            <p style={{
               color: "#999",
               fontSize: "12px",
                marginTop: "10px" 
                }}>{item.store}</p>
            <h3 style={{ 
              fontSize: "14px",
               fontWeight: "500",
                marginTop: "4px", 
                minHeight: "36px"
                 }}>{item.name}</h3>
            <div style={{ display: "flex", marginTop: "4px" }}>
              <AiFillStar size={18} color="#F6BA00" /><AiFillStar size={18} color="#F6BA00" /><AiFillStar size={18} color="#F6BA00" /><AiFillStar size={18} color="#F6BA00" /><AiFillStar size={18} color="#F6BA00" />
            </div>
            <div style={{
               display: "flex",
               justifyContent: "space-between", 
               alignItems: "center",
                marginTop: "4px" }}>
              <div><span style={{ fontWeight: "bold" }}>{item.price}</span><span style={{
                 color: "#aaa",
                 textDecoration: "line-through",
                  fontSize: "12px", 
                  marginLeft: "6px" 
                  }}>{item.oldPrice}</span></div>
              <span style={{ 
                color: "#aaa",
                 fontSize: "12px" 
                 }}>{item.sold}</span>
            </div>
            <button onClick={() => addToCart(item)} style={{ 
              width: "100%", 
              marginTop: "10px",
               background: "black",
                color: "white", 
                padding: "8px",
                 borderRadius: "8px", 
                 border: "none", 
                 cursor: "pointer", 
                 display: "flex",
                  alignItems: "center", 
                  justifyContent: "center", 
                  gap: "6px" 
                  }}>
              <AiOutlineShoppingCart size={18} /> Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;