import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(data);
  }, []);

  const removeItem = (indexToRemove) => {
    const updated = wishlist.filter((item, index) => index !== indexToRemove);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  
  const getImage = (item) => {
    const name = (item.name || "").toLowerCase();

    if (name.includes("iphone")) return "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&q=80";
    if (name.includes("shoe") || name.includes("sneaker") || name.includes("nike")) return "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80";
    if (name.includes("headphone") || name.includes("headset") || name.includes("earphone") || name.includes("airpod")) return "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80";
    if (name.includes("watch")) return "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80";
    if (name.includes("macbook") || name.includes("laptop")) return "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80";
    if (name.includes("camera")) return "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80";
    if (name.includes("sunglass") || name.includes("glass")) return "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80";

    if (item.image_Url && item.image_Url[0] && item.image_Url[0].url) return item.image_Url[0].url;
    if (typeof item.image_Url === "string") return item.image_Url;
    return "https://via.placeholder.com/300";
  };

  return (
    <div>
      <div style={{ 
        width: "90%",
         margin: "30px auto"
          }}>
        <h2 style={{ 
            fontSize: "24px",
             fontWeight: "bold",
              marginBottom: "20px"
               }}>
          My Wishlist ({wishlist.length})
        </h2>

        {wishlist.length === 0 ? (
          <div style={{ 
            textAlign: "center",
           padding: "50px",
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center",
             gap: "15px" 
             }}>
            <p style={{
                 margin: "0",
                 fontSize: "18px"
                  }}>Your wishlist is empty!</p>
            <Link to="/" style={{ 
                background: "#3321c8", 
                 color: "white",
                 padding: "10px 20px",
                  borderRadius: "5px", 
                  textDecoration: "none" 
                  }}>
              Start Shopping
            </Link>
          </div>
        ) : (
          <div style={{ 
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px"
             }}>
            {wishlist.map((item, index) => (
              <div key={index} style={{ border: "1px solid #eee", 
              borderRadius: "10px",
               padding: "15px",
                textAlign: "center",
                 background: "white", 
                 display: "flex",
                 flexDirection: "column", 
                 alignItems: "center",
                 gap: "8px" 
                   }}>
                <img src={getImage(item)} alt={item.name} style={{
                     width: "100%",
                     height: "180px",
                      objectFit: "cover",
                       borderRadius: "8px"
                        }} />
                <h3 style={{
                     margin: "0", 
                    fontWeight: "600"
                     }}>{item.name}</h3>
                <p style={{ 
                    color: "red",
                     fontWeight: "bold", 
                     margin: "0"
                      }}>Rs {item.discountPrice || item.price}</p>
                <button onClick={() => removeItem(index)} style={{
                     background: "black",
                     color: "white",
                      padding: "8px 15px",
                       borderRadius: "5px",
                        marginTop: "5px", 
                        cursor: "pointer",
                         border: "none"
                          }}>Remove</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;