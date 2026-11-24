import React, { useState, useEffect } from "react";

const Events = () => {
  const [days, setDays] = useState(2);
  const [hours, setHours] = useState(10);
  const [mins, setMins] = useState(25);
  const [secs, setSecs] = useState(25);

  useEffect(() => {
    const timer = setInterval(() => {
      if (secs > 0) setSecs(secs - 1);
      else if (mins > 0) { setMins(mins - 1); setSecs(59); }
      else if (hours > 0) { setHours(hours - 1); setMins(59); setSecs(59); }
      else if (days > 0) { setDays(days - 1); setHours(23); setMins(59); setSecs(59); }
    }, 1000);
    return () => clearInterval(timer);
  }, [secs, mins, hours, days]);

  const eventProduct = {
    id: 999,
    store: "Nike Official",
    name: "New Trend Shoes For Gents - Big Sale!",
    price: "89$",
    oldPrice: "120$",
    sold: "49 sold",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
  };

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const isExist = cart.find((i) => (i._id || i.id) === eventProduct.id);
    if (!isExist) {
      cart.push({ ...eventProduct, qty: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
      window.dispatchEvent(new Event("cartUpdated"));
      alert("Added to cart!");
    } else {
      alert("Already in cart!");
    }
  };

  const buyNow = () => {
    addToCart();
    alert("Buy Now - Checkout pe ja rahe hain!");
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
           }}>Popular Events</h2>
      <div style={{ 
        display: "flex",
         gap: "20px",
          background: "white",
           padding: "20px", 
           borderRadius: "10px",
            boxShadow: "0 1px 5px rgba(0,0,0,0.1)"
             }}>
        <div style={{ 
          flex: 1,
           borderRadius: "10px"
           , overflow: "hidden",
            height: "300px" 
            }}>
          <img src={eventProduct.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{
             fontSize: "22px",
             fontWeight: "bold"
              }}>{eventProduct.name}</h3>
          <p style={{ 
            color: "#666",
             marginTop: "10px" 
             }}>Limited time offer! Premium quality shoes for gents at best price. Hurry up, stock is limited. Grab your favourite shoes before event ends!</p>
          <div style={{
             display: "flex",
             gap: "10px", 
             marginTop: "15px"
              }}>
            {[{ 
              v: days, 
            l: "Days" }, { 
              v: hours,
             l: "Hours" },
              { v: mins,
                 l: "Mins" },
                  { v: secs,
                     l: "Secs" 
                    }].map((t, i) => (
              <div key={i} style={{ 
                background: "#f5f5f5",
               padding: "10px 15px",
                borderRadius: "8px",
                 textAlign: "center"
                  }}>
                <div style={{ 
                  fontWeight: "bold",
                   fontSize: "18px" 
                   }}>{t.v}</div>
                <div style={{
                   fontSize: "12px", 
                  color: "#888"
                   }}>{t.l}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "15px" }}>
            <span style={{ 
              fontWeight: "bold",
               fontSize: "20px" 
               }}>{eventProduct.price}</span>
            <span style={{
               color: "#aaa",
               textDecoration: "line-through", 
               marginLeft: "8px" 
               }}>{eventProduct.oldPrice}</span>
            <span style={{
               color: "#888",
               marginLeft: "8px", 
               fontSize: "14px" 
               }}>{eventProduct.sold}</span>
          </div>
          <div style={{ display: "flex", 
            gap: "10px",
             marginTop: "15px"
              }}>
            <button onClick={addToCart} style={{
               flex: 1,
               background: "black",
                color: "white",
                 padding: "12px",
                  borderRadius: "8px", 
                  border: "none", 
                  cursor: "pointer", 
                  fontWeight: "bold" 
                  }}>Add to Cart</button>
            <button onClick={buyNow} style={{
               flex: 1, 
              background: "#f59e0b", 
              color: "white",
               padding: "12px", 
               borderRadius: "8px", 
               border: "none", 
               cursor: "pointer", 
               fontWeight: "bold"
                }}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;