import React, { useState, useEffect } from "react";

const Events = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 10, mins: 25, secs: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, mins, secs } = prev;
        secs--;
        if (secs < 0) { secs = 59; mins--; }
        if (mins < 0) { mins = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) { days = 0; hours = 0; mins = 0; secs = 0; }
        return { days, hours, mins, secs };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ width: "100%", padding: "20px 30px", boxSizing: "border-box" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Popular Events</h2>

      <div style={{ display: "flex", gap: "20px", background: "#fff", borderRadius: "12px", padding: "20px", boxShadow: "0 2px 10px rgba(0,0,0,0.08)", flexWrap: "wrap" }}>
        {/* Left Image */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800" alt="Event" style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "10px" }} />
        </div>

        {/* Right Details */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <h3 style={{ fontSize: "22px", fontWeight: "bold" }}>New Trend Shoes For Gents - Big Sale!</h3>
          <p style={{ color: "#666", fontSize: "14px", marginTop: "10px", lineHeight: "1.6" }}>
            Limited time offer! Premium quality shoes for gents at best price. Hurry up, stock is limited. Grab your favourite shoes before event ends!
          </p>

          {/* Countdown */}
          <div style={{ display: "flex", gap: "10px", margin: "20px 0" }}>
            <div style={{ background: "#f5f5f0", padding: "10px 15px", borderRadius: "8px", textAlign: "center" }}>
              <b style={{ fontSize: "20px" }}>{timeLeft.days}</b><p style={{ fontSize: "12px", color: "#888" }}>Days</p>
            </div>
            <div style={{ background: "#f5f5f0", padding: "10px 15px", borderRadius: "8px", textAlign: "center" }}>
              <b style={{ fontSize: "20px" }}>{timeLeft.hours}</b><p style={{ fontSize: "12px", color: "#888" }}>Hours</p>
            </div>
            <div style={{ background: "#f5f5f0", padding: "10px 15px", borderRadius: "8px", textAlign: "center" }}>
              <b style={{ fontSize: "20px" }}>{timeLeft.mins}</b><p style={{ fontSize: "12px", color: "#888" }}>Mins</p>
            </div>
            <div style={{ background: "#f5f5f0", padding: "10px 15px", borderRadius: "8px", textAlign: "center" }}>
              <b style={{ fontSize: "20px" }}>{timeLeft.secs}</b><p style={{ fontSize: "12px", color: "#888" }}>Secs</p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <span style={{ fontSize: "24px", fontWeight: "bold" }}>89$</span>
            <span style={{ color: "#aaa", textDecoration: "line-through" }}>120$</span>
            <span style={{ color: "#888", fontSize: "13px" }}>49 sold</span>
          </div>

          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <button style={{ flex: 1, background: "black", color: "white", padding: "12px", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>Add to Cart</button>
            <button style={{ flex: 1, background: "#f6ba00", color: "white", padding: "12px", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;