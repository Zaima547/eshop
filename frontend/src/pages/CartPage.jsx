import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(data);
    console.log("CART DATA:", data); 
  }, []);

  const removeItem = (indexToRemove) => {
    const updated = cart.filter((_, index) => index !== indexToRemove);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  
  const getImage = (item) => {
    const p = item.product || item; 
    if (p.images && Array.isArray(p.images) && p.images.length > 0) {
      if (typeof p.images[0] === "string") return p.images[0];
      if (p.images[0]?.url) return p.images[0].url;
      if (p.images[0]?.image) return p.images[0].image;
    }
    if (typeof p.images === "string") return p.images;
    if (p.imageUrl) return p.imageUrl;
    if (p.image) return typeof p.image === "string" ? p.image : p.image?.url;
    if (p.img) return p.img;
    if (p.photo) return p.photo;
    if (p.thumbnail) return p.thumbnail;
    if (p.picture) return p.picture;
    return "https://via.placeholder.com/100";
  };

  const total = cart.reduce((sum, item) => {
    const p = item.product || item;
    return sum + Number(p.discountPrice || p.price || 0);
  }, 0);

  return (
    <div style={{ width: "90%",
     maxWidth: "900px",
      margin: "30px auto"
       }}>
      <h2 style={{ 
        fontSize: "24px",
         fontWeight: "bold",
          marginBottom: "20px"
           }}>
        My Cart ({cart.length})
      </h2>

      {cart.length === 0 ? (
        <div style={{ 
            textAlign: "center",
         padding: "50px",
          display: "flex",
           flexDirection: "column", 
           alignItems: "center",
            gap: "15px",
             background: "white",
              borderRadius: "10px",
               boxShadow: "0 2px 10px #eee"
                }}>
          <p style={{ 
            margin: "0",
             fontSize: "18px" 
             }}>Your cart is empty!</p>
          <Link to="/" style={{
             background: "#3321c8",
             color: "white",
              padding: "12px 25px", 
              borderRadius: "8px", 
              textDecoration: "none",
               fontWeight: "bold"
                }}>
            Start Shopping
          </Link>
        </div>
      ) : (
        <>
          {cart.map((item, index) => {
            const p = item.product || item;
            return (
              <div key={index} style={{ 
                display: "flex",
               gap: "15px",
                alignItems: "center",
                 background: "white",
                  border: "1px solid #eee",
                   padding: "15px",
                    marginBottom: "15px",
                     borderRadius: "12px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.05)" 
                      }}>
                
                <img
                  src={getImage(item)}
                  alt={p.name}
                  style={{ 
                    width: "90px",
                     height: "90px",
                      objectFit: "cover",
                       borderRadius: "10px",
                        background: "#f5f5f5"
                     }}
                />

                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    margin: "0 0 5px 0",
                     fontSize: "17px"
                      }}>{p.name || p.title}</h3>
                  <p style={{ 
                    margin: "0",
                     color: "#666",
                      fontSize: "14px" 
                      }}>{p.category || ""}</p>
                  <p style={{
                     margin: "8px 0 0 0",
                     color: "red", 
                     fontWeight: "bold",
                      fontSize: "18px"
                       }}>
                    Rs {p.discountPrice || p.price}
                  </p>
                </div>

                <button
                  onClick={() => removeItem(index)}
                  style={{ 
                    background: "black",
                     color: "white",
                      padding: "10px 18px",
                       borderRadius: "8px",
                        cursor: "pointer",
                         border: "none",
                          fontWeight: "bold"
                         }}
                >
                  Remove
                </button>
              </div>
            );
          })}

          <div style={{ display: "flex",
             justifyContent: "space-between",
              alignItems: "center", background: "#f8f8ff",
               padding: "20px", borderRadius: "12px", 
               marginTop: "20px" 
               }}>
            <h3 style={{ margin: 0 }}>Total: Rs {total}</h3>
            <button style={{ background: "#3321c8",
                 color: "white", 
                 padding: "12px 30px",
                  borderRadius: "8px", 
                  border: "none", 
                  fontWeight: "bold",
                   cursor: "pointer",
                    fontSize: "16px"
                     }}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;