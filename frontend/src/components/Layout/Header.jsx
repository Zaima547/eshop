import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";

const Header = () => {
  return (
    <div className="w-full bg-white">
      {/* UPAR WALA - White */}
      <div className="w-[90%] mx-auto flex items-center justify-between py-3">
        <Link to="/">
  <div className="flex items-center gap-1">
    {/* Gol Icon */}
    <div className="w-8.75 h-8.75 bg-[#ff7a00] rounded-full flex items-center justify-center">
      <span className="text-white text-[20px] font-bold">O</span>
    </div>
    {/* ShopO Likhaai */}
    <h1 className="text-[28px] font-bold text-[#333]">
      Shop<span className="text-[#ff7a00]">O</span>
    </h1>
  </div>
</Link>

        {/* Search */}
        <div className="flex w-[50%] items-center">
          <input
            type="text"
            placeholder="Search Product..."
            className="w-full h-10 border-2 border-[#3321c8] rounded-l-[5px] px-3 outline-none"
          />
          <div className="w-22.5 h-10 bg-[#3321c8] text-white flex items-center justify-center rounded-r-[5px] cursor-pointer">
            <AiOutlineSearch size={22} />
          </div>
        </div>

        <Link to="/shop-create">
          <div className="w-32.5 h-10 bg-[#333] text-white rounded-[5px] flex items-center justify-center">
            Become Seller →
          </div>
        </Link>
      </div>

      {/* NEECHE WALA - Blue Patti - Sir jaisa */}
      <div className="w-full bg-[#3321c8]">
        <div className="w-[90%] mx-auto flex items-center justify-between h-12.5">
          
          {/* All Categories - White Dabba */}
          <div className="w-67.5 h-8.75 bg-white rounded-[5px] flex items-center justify-between px-3 cursor-pointer">
            <div className="flex items-center gap-2">
              <BiMenuAltLeft size={22} />
              <h1 className="text-[16px] font-medium">All Categories</h1>
            </div>
            <IoIosArrowDown size={18} />
          </div>

          {/* Nav Links - White - AB CHHUPEGA NAHI */}
          <div className="flex items-center gap-8">
            <Link to="/" className="text-white text-[16px] font-medium">Home</Link>
            <Link to="/best-selling" className="text-white text-[16px] font-medium">Best Selling</Link>
            <Link to="/products" className="text-white text-[16px] font-medium">Products</Link>
            <Link to="/events" className="text-white text-[16px] font-medium">Events</Link>
            <Link to="/faq" className="text-white text-[16px] font-medium">FAQ</Link>
          </div>

          {/* Icons - White */}
          <div className="flex items-center gap-4 text-white">
            <div className="flex items-center cursor-pointer">
              <AiOutlineHeart size={24} color="#fff" />
            </div>
            <div className="flex items-center cursor-pointer">
              <AiOutlineShoppingCart size={24} color="#fff" />
            </div>
            <div className="cursor-pointer">
              <CgProfile size={24} color="#fff" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;