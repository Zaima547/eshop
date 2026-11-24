import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";

const Header = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      
      <div style={{
         width: "100%",
         background: "white", 
         padding: "15px 0"
          }}>
        <div style={{
           width: "90%",
           margin: "auto", 
           display: "flex", 
           alignItems: "center",
            justifyContent: "space-between"
             }}>
          <Link to="/">
            <h1 style={{ 
              fontSize: "26px",
               fontWeight: "800", 
               color: "black"
                }}>
              <span style={{ color: "red" }}>O</span> ShopO
            </h1>
          </Link>

          <div style={{ 
            display: "flex",
             width: "50%", 
             border: "1px solid #ccc",
              borderRadius: "5px", 
              overflow: "hidden"
               }}>
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ 
                width: "100%",
                 padding: "10px",
                  outline: "none", 
                  border: "none"
                 }}
            />
            <button style={{
               background: "#3321c8",
               color: "white", 
               padding: "0 20px", 
               border: "none",
                cursor: "pointer" 
                }}>
              <AiOutlineSearch size={22} />
            </button>
          </div>

          <Link to="/shop-create">
            <button style={{ 
              background: "black",
               color: "white",
                padding: "10px 15px",
                 borderRadius: "5px",
                  cursor: "pointer",
                   border: "none"
                    }}>
              Become Seller →
            </button>
          </Link>
        </div>
      </div>

      
      <div style={{
         width: "100%",
         background: "#3321c8",
          padding: "12px 0"
           }}>
        <div style={{
           width: "90%",
           margin: "auto", 
           display: "flex",
            alignItems: "center",
             justifyContent: "space-between"
              }}>
          <div style={{
             display: "flex",
             alignItems: "center",
              gap: "10px",
               background: "white",
                padding: "8px 15px", 
                borderRadius: "5px",
                 cursor: "pointer"
                  }}>
            <BiMenuAltLeft size={22} />
            <span style={{ fontWeight: "600" }}>All Categories</span>
            <IoIosArrowDown />
          </div>

          <div style={{ display: "flex",
             gap: "25px", 
             color: "white",
              fontWeight: "600"
               }}>
            <Link to="/" style={{ color: "white" }}>Home</Link>
            <Link to="/best-selling" style={{ color: "white" }}>Best Selling</Link>
            <Link to="/products" style={{ color: "white" }}>Products</Link>
            <Link to="/events" style={{ color: "white" }}>Events</Link>
            <Link to="/faq" style={{ color: "white" }}>FAQ</Link>
          </div>

          
          <div style={{ 
            display: "flex",
             gap: "20px",
              alignItems: "center"
               }}>
            <div onClick={() => navigate("/wishlist")} style={{ cursor: "pointer" }}>
              <AiOutlineHeart size={28} color="white" />
            </div>
            <div onClick={() => navigate("/cart")} style={{ cursor: "pointer" }}>
              <AiOutlineShoppingCart size={28} color="white" />
            </div>
            <div onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>
              <CgProfile size={28} color="white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;