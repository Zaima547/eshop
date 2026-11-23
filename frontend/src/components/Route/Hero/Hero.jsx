import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat bg-cover bg-center flex items-center`}
      style={{
        backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY7kFhWF5F1q2gwyBWU8MT6M8ptNTh1ff6yEB4Dkn9VngqHNWNm9Im6UiD&s=crop)",
      }}
    >
      <div className={`${styles.section} w-[90%]`}>
        <h1 className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-semibold capitalize`}>
          Best Collection For <br /> your Home Decoration
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-normal text-[#000000ba] max-w-170">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          assumenda? Quisquam itaque exercitationem labore vel, dolore quidem
          asperiores, laudantium temporibus soluta optio consequatur aliquam
          deserunt officia. Dolorum saepe nulla provident.
        </p>
        <Link to="/products" className="inline-block">
          <div className="mt-5 w-37.5 h-12.5 bg-[#2d2a2a] rounded-sm flex items-center justify-center cursor-pointer">
            <span className="text-white font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;