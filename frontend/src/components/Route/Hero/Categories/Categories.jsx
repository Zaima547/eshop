import React from "react";
import { useNavigate } from "react-router-dom";

const categoriesData = [
  {
    id: 1,
    title: "Computers and Laptops",
    image_Url: "https://cdn-icons-png.flaticon.com/512/841/841210.png",
  },
  {
    id: 2,
    title: "Cosmetics and Body Care",
    image_Url: "https://cdn-icons-png.flaticon.com/512/3081/3081993.png",
  },
  {
    id: 3,
    title: "Accessories",
    image_Url: "https://cdn-icons-png.flaticon.com/512/1491/1491163.png",
  },
  {
    id: 4,
    title: "Clothes",
    image_Url: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
  },
  {
    id: 5,
    title: "Shoes",
    image_Url: "https://cdn-icons-png.flaticon.com/512/2582/2582591.png",
  },
  {
    id: 6,
    title: "Gifts",
    image_Url: "https://cdn-icons-png.flaticon.com/512/4213/4213958.png",
  },
  {
    id: 7,
    title: "Pet Care",
    image_Url: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  },
  {
    id: 8,
    title: "Mobile and Tablets",
    image_Url: "https://cdn-icons-png.flaticon.com/512/2489/2489076.png",
  },
  {
    id: 9,
    title: "Music and Gaming",
    image_Url: "https://cdn-icons-png.flaticon.com/512/1380/1380338.png",
  },
  {
    id: 10,
    title: "Others",
    image_Url: "https://cdn-icons-png.flaticon.com/512/4076/4076478.png",
  },
];

const Categories = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-[90%] mx-auto my-5">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-4">
          {categoriesData &&
            categoriesData.map((i) => {
              const handleSubmit = () => {
                navigate(`/products?category=${i.title}`);
              };
              return (
                <div
                  className="w-full h-25 flex flex-col items-center justify-center cursor-pointer overflow-hidden"
                  key={i.id}
                  onClick={handleSubmit}
                >
                  <img
                    src={i.image_Url}
                    className="w-12.5 h-12.5 object-contain"
                    alt=""
                  />
                  <h5 className="text-center text-[13px] leading-[1.3] mt-2">
                    {i.title}
                  </h5>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Categories;