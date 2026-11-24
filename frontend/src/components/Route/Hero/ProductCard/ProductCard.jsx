import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../../styles/styles";
import { AiFillStar, AiOutlineHeart, AiFillHeart, AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";

const ProductCard = ({ data }) => {
  const [click, setClick] = useState(false);

  const imgUrl = data.images?.[0]?.url || data.img;
  const shopName = data.shop?.name || data.store;
  const productId = data._id || data.id;
  const discountPrice = data.discount_price || data.price;
  const oldPrice = data.price && data.discount_price ? data.price : data.oldPrice;
  const sold = data.total_sell ? data.total_sell + " sold" : data.sold;

  const addToWishlistHandler = () => {
    setClick(!click);
    // wishlist save
    let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    if (!click) {
      wishlist.push(data);
    } else {
      wishlist = wishlist.filter((i) => (i._id || i.id) !== productId);
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  const addToCartHandler = () => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const isExist = cart.find((i) => (i._id || i.id) === productId);
    if (!isExist) {
      cart.push({ ...data, qty: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
      window.dispatchEvent(new Event("cartUpdated"));
      alert("Added to cart!");
    } else {
      alert("Already in cart!");
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-3 relative cursor-pointer group"
      style={{ width: "100%", boxSizing: "border-box", overflow: "hidden" }}>

      
      <div className="relative">
        <Link to={`/product/${productId}`}>
          <img src={imgUrl} alt=""
            style={{
               width: "100%",
             height: "180px",
              objectFit: "cover",
               display: "block", 
               borderRadius: "10px", 
               background: "#f5f5f0"
                }} />
        </Link>

        
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <div onClick={addToWishlistHandler}
            className="bg-white w-8.75 h-8.75 rounded-full flex items-center justify-center shadow cursor-pointer">
            {click ? <AiFillHeart size={22} color="red" /> : <AiOutlineHeart size={22} color="#333" />}
          </div>
        </div>
      </div>

      <Link to="/">
        <h5 className={`${styles.shop_name}`}>{shopName}</h5>
      </Link>

      <Link to={`/product/${productId}`}>
        <h4 className="pb-3 font-medium" style={{ minHeight: "42px" }}>
          {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
        </h4>
        <div className="flex">
          <AiFillStar size={20} color="#F6BA00" />
          <AiFillStar size={20} color="#F6BA00" />
          <AiFillStar size={20} color="#F6BA00" />
          <AiFillStar size={20} color="#F6BA00" />
          <AiFillStar size={20} color="#F6BA00" />
        </div>
        <div className="py-2 flex items-center justify-between">
          <div className="flex">
            <h5 className={`${styles.productDiscountPrice}`}>{discountPrice}$</h5>
            <h4 className={`${styles.price}`}>{oldPrice ? oldPrice + " $" : null}</h4>
          </div>
          <span className="font-normal text-[17px] text-[#68d284]">{sold}</span>
        </div>
      </Link>

    
      <button onClick={addToCartHandler}
        className="w-full mt-2 h-8.75 bg-black text-white rounded-md flex items-center justify-center gap-2 hover:bg-gray-800">
        <AiOutlineShoppingCart size={20} /> Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;