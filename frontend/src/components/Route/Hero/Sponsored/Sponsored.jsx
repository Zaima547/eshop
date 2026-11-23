import React from "react";

const Sponsored = () => {
  return (
    <div style={{ width: "100%", padding: "20px 30px", boxSizing: "border-box" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
        Sponsored
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {/* Card 1 */}
        <div style={{ position: "relative",
             height: "220px",
              borderRadius: "10px",
               overflow: "hidden",
                cursor: "pointer" }}>
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600" alt="Watch" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute",
             top: "0", 
             left: "0", width: "100%",
              height: "100%",
               background: "rgba(0,0,0,0.35)",
                padding: "20px",
                 boxSizing: "border-box" }}>
            <h3 style={{ color: "white",
                 fontSize: "20px", 
                 fontWeight: "bold" }}>New Fashionable Watch</h3>
            <p style={{ color: "white",
                 fontSize: "14px",
                  marginTop: "5px" }}>Up to 30% Off</p>
            <button style={{ marginTop: "15px",
                 background: "white", 
                 color: "black", 
                 border: "none",
                  padding: "8px 16px",
                   borderRadius: "6px",
                    fontWeight: "bold", 
                    cursor: "pointer" }}>Shop Now</button>
          </div>
        </div>

        {/* Card 2 */}
        <div style={{ position: "relative",
             height: "220px",
              borderRadius: "10px",
               overflow: "hidden", 
               cursor: "pointer" }}>
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600" alt="Shoes" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ 
             position: "absolute",
             top: "0",
              left: "0", 
              width: "100%",
               height: "100%",
                background: "rgba(0,0,0,0.35)", 
                padding: "20px", boxSizing: "border-box" }}>
            <h3 style={{ 
                color: "white",
                 fontSize: "20px",
                  fontWeight: "bold" }}>New Trend Shoes</h3>
            <p style={{ 
                color: "white",
                 fontSize: "14px", 
                 marginTop: "5px" }}>Up to 40% Off</p>
            <button style={{
                 marginTop: "15px", 
                background: "white",
                 color: "black", 
                 border: "none",
                  padding: "8px 16px",
                   borderRadius: "6px", 
                   fontWeight: "bold",
                    cursor: "pointer" }}>Shop Now</button>
          </div>
        </div>

        {/* Card 3 */}
        <div style={{ 
            position: "relative",
             height: "220px",
              borderRadius: "10px", 
              overflow: "hidden",
               cursor: "pointer" }}>
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" alt="Headphone" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ 
            position: "absolute",
             top: "0", 
             left: "0",
              width: "100%",
               height: "100%",
                background: "rgba(0,0,0,0.35)",
                 padding: "20px",
                  boxSizing: "border-box" }}>
            <h3 style={{
                 color: "white",
                 fontSize: "20px",
                  fontWeight: "bold" }}>Best Headphones</h3>
            <p style={{
                 color: "white", 
                fontSize: "14px",
                 marginTop: "5px" }}>Up to 25% Off</p>
            <button style={{ 
                marginTop: "15px",
                 background: "white", 
                 color: "black",
                  border: "none",
                   padding: "8px 16px",
                    borderRadius: "6px",
                     fontWeight: "bold", 
                     cursor: "pointer" }}>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsored;