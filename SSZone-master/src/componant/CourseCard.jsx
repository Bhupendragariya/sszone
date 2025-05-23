import React from "react";
import { useState } from "react";
import { FaRegClock, FaRegHeart, FaRegStar } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import { useCart } from "../context/CartContext";

const CourseCard = ({
  image,
  duration,
  title,
  description,
  lessons,
  rating,
  price,
}) => {
  const [liked, setLiked] = useState(false);
  const { addToCart } = useCart();
  return (
    // <div className="max-w-sm rounded-xl overflow-hidden shadow-md  p-4 bg-white ">
    //   {/* Image and Badge */}
    //   <div className="relative">
    //     <img
    //       src={image}
    //       alt={title}
    //       className="rounded-lg w-full h-52 object-cover"
    //     />
    //     <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 text-xs rounded-full font-medium">
    //       {duration}
    //     </div>
    //     <button
    //       onClick={() => setLiked(!liked)}
    //       className="absolute top-3 right-3 bg-white p-1 rounded-full shadow cursor-pointer"
    //     >
    //       {liked ? "❤️" : "🤍"}
    //     </button>
    //   </div>

    //   {/* Course Info */}
    //   <div className="mt-4">
    //     <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    //     <p className="text-sm text-gray-600 mt-1">{description}</p>

    //     {/* Lessons and Rating */}
    //     <div className="flex justify-between items-center mt-4 text-sm text-gray-700">
    //       <span className="flex items-center gap-1">
    //         <BookOpen size={16} /> {lessons} Lessons
    //       </span>
    //       <span className="flex items-center gap-1">
    //         <Star size={16} className="text-red-500" /> {rating}
    //       </span>
    //     </div>

    //     {/* Price and Button */}
    //     <div className="flex justify-between items-center mt-4">
    //       <span className="text-red-600 font-semibold text-lg">₹ {price}</span>
    //       <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-md transition  cursor-pointer duration-300 ease-in-out  hover:scale-105">
    //         Enroll Now
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="max-w-[400px] max-h-[499px] border-1 rounded-[12px] p-4 border-[#E3E3E3] hover:border-[#296AD2] flex flex-col gap-4">
      {/* image section */}
      <div className="relative w-full">
        <img src={image} alt="" className="rounded-[12px]" />
        {/* left corner icon */}
        <div className="absolute top-2 left-4 bg-[#296AD2] py-2 px-[21px] rounded-[40px] flex gap-2 items-center">
          <FaRegClock className="text-white" />
          <p className=" text-[14px] font-normal leading-[100%] tracking-normal text-center text-[#ffffff] ">
            {duration}
          </p>
        </div>
        {/* right corner icon */}
        {/* <div className="absolute top-2 right-4 bg-[#ffffff] rounded-full p-2"> */}
          {/* <FaRegHeart className=""  /> */}
          <button
         onClick={() => setLiked(!liked) }
         className="absolute top-3 right-3 bg-white p-1 rounded-full shadow cursor-pointer"
       >
         {liked ? "❤️" : "🤍"}
       </button>
        {/* </div> */}
      </div>
      {/* content section */}
      <div className="font-[Manrope] pb-6">
        <h3 className="pb-3 font-semibold text-[20px] leading-[100%] tracking-normal text-[#292929]">
          {title}
        </h3>
        <p className="pb-3 font-normal text-[16px] leading-[100%] tracking-normal text-[#6F6F6F]">
          {description}
        </p>
        <div className="flex flex-row justify-between">
          <div className="flex items-center gap-1">
            <TiDocumentText />
            <p className="font-semibold text-[16px] leading-[100%] tracking-normal text-[#292929]">
              {lessons} Lessons
            </p>
          </div>
          <div className="flex items-center gap-1">
            <FaRegStar className="text-[#F04438E5]" />
            <p className="font-semibold text-[16px] leading-[100%] tracking-normal">
              {rating}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between font-[Manrope] items-center">
        <div className="flex items-center">
          <MdCurrencyRupee className="text-[#F04438] text-[20px]" />
          <p className="font-semibold text-[20px] leading-[100%] tracking-normal text-[#F04438] items-center">
            {price}
          </p>
        </div>
        <button
          onClick={() => addToCart(course)}
          className="py-3 cursor-pointer px-6 border-1 hover:bg-[#296AD2] hover:text-[#ffffff] border-[#296AD2] text-[#296AD2] font-medium text-[16px] tracking-normal items-center rounded-[4px]"
        >
          Enroll Now
        </button>
        
      </div>
    </div>
  );
};

export default CourseCard;
