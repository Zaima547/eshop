import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../../styles/styles";
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ data }) => {
  const imgUrl = data.images?.[0]?.url || data.img;
  const shopName = data.shop?.name || data.store;
  const productId = data._id || data.id;
  const discountPrice = data.discount_price || data.price;
  const oldPrice =
    data.price && data.discount_price ? data.price : data.oldPrice;
  const sold = data.total_sell ? data.total_sell + " sold" : data.sold;

  return (
    <div
      className="w-full bg-white rounded-lg shadow-sm p-3 relative cursor-pointer"
      style={{
        width: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <Link to={`/product/${productId}`}>
        <img
          src={imgUrl}
          alt=""
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            display: "block",
            borderRadius: "10px",
            background: "#f5f5f0",
          }}
        />
      </Link>

      <Link to="/">
        <h5 className={`${styles.shop_name}`}>{shopName}</h5>
      </Link>

      <Link to={`/product/${productId}`}>
        <h4 className="pb-3 font-medium" style={{ minHeight: "42px" }}>
          {data.name.length > 40
            ? data.name.slice(0, 40) + "..."
            : data.name}
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
             <h5 className={`${styles.productDiscountPrice}`}>
             {discountPrice}$
       </h5>
         <h4 className={`${styles.price}`}>
        {oldPrice ? oldPrice + " $": null}
          </h4>
          </div>
          <span className="font-normal text-[17px] text-[#68d284]">
            {sold}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
