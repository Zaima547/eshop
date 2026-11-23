import React from "react";

const Footer = () => {
  return (
    <div style={{
         background: "#000",
     color: "white",
      padding: "40px 30px 20px",
       marginTop: "30px"
        }}>
      <div style={{ 
        display: "grid",
         gridTemplateColumns: "repeat(4, 1fr)",
          gap: "30px" 
          }}>
        <div>
          <h2 style={{ 
            fontSize: "24px",
             fontWeight: "bold"
              }}>ShopO</h2>
          <p style={{ 
            color: "#aaa",
             fontSize: "14px",
              marginTop: "10px",
               lineHeight: "1.6"
                }}>
            The best e-commerce website for all your needs. Quality products at best prices.
          </p>
        </div>
        <div>
          <h3 style={{ 
            fontSize: "18px",
             fontWeight: "bold", 
             marginBottom: "15px"
              }}>Shop</h3>
          <p style={{ 
            color: "#aaa",
             fontSize: "14px",
              marginBottom: "8px"
               }}>Best Deals</p>
          <p style={{
             color: "#aaa",
             fontSize: "14px", 
             marginBottom: "8px" 
             }}>Featured Products</p>
          <p style={{ 
            color: "#aaa",
             fontSize: "14px",
              marginBottom: "8px"
               }}>Events</p>
          <p style={{ 
            color: "#aaa",
             fontSize: "14px"
              }}>Sponsored</p>
        </div>
        <div>
          <h3 style={{
             fontSize: "18px",
             fontWeight: "bold",
              marginBottom: "15px" 
              }}>Company</h3>
          <p style={{ 
            color: "#aaa",
             fontSize: "14px",
              marginBottom: "8px" 
              }}>About Us</p>
          <p style={{
             color: "#aaa",
             fontSize: "14px",
              marginBottom: "8px"
               }}>Contact Us</p>
          <p style={{
             color: "#aaa",
             fontSize: "14px", 
             marginBottom: "8px" }}>FAQ</p>
          <p style={{ 
            color: "#aaa",
             fontSize: "14px"
              }}>Become Seller</p>
        </div>
        <div>
          <h3 style={{
             fontSize: "18px",
             fontWeight: "bold",
              marginBottom: "15px"
               }}>Subscribe</h3>
          <p style={{ 
            color: "#aaa",
             fontSize: "14px",
              marginBottom: "10px"
               }}>Get latest updates</p>
          <input type="text" placeholder="Enter your email" style={{ 
            width: "100%", 
            padding: "10px",
             borderRadius: "6px",
              border: "none",
               boxSizing: "border-box" }} />
          <button style={{ 
            width: "100%",
             marginTop: "10px",
              background: "#f6ba00",
               color: "white", 
               border: "none", 
               padding: "10px",
                borderRadius: "6px", 
                fontWeight: "bold",
                 cursor: "pointer" }}>Subscribe</button>
        </div>
      </div>
      <p style={{ 
        textAlign: "center", 
        color: "#777",
         fontSize: "13px", 
         marginTop: "30px",
          borderTop: "1px solid #333",
           paddingTop: "20px" }}>
        © 2026 ShopO. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;