"use client";

import Image from "next/image";
import React, { useState } from "react";
import arrowRight from "@/public/svg/arrowRight.svg";
import arrowUp from "@/public/svg/arrowUp.svg";
import setting from "@/public/svg/setting.svg";
import next from "@/public/svg/next.svg";
import previous from "@/public/svg/previous.svg";
import rate from "@/public/svg/rate.svg";
import cartImgOne from "@/public/images/cartImg1.png";
import cartImgTwo from "@/public/images/cartImg2.png";
import cartImgThree from "@/public/images/cartImg3.png";
import Filters from "../_components/Filters";
import Products from "../_components/products";
import Border from "../_components/Border";

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSize, setActiveSize] = useState(4);

  const products = [
    {
      src: cartImgOne,
      title: "T-shirt with Tape Details",
      price: 120,
      oldPrice: 232,
      rating: 4.5,
    },
    {
      src: cartImgTwo,
      title: "Stylish Hoodie",
      price: 99,
      oldPrice: 150,
      rating: 4.2,
    },
    {
      src: cartImgThree,
      title: "Classic Denim Jacket",
      price: 140,
      oldPrice: 200,
      rating: 4.7,
    },
    {
      src: cartImgOne,
      title: "T-shirt with Tape Details",
      price: 120,
      oldPrice: 232,
      rating: 4.5,
    },
    {
      src: cartImgTwo,
      title: "Stylish Hoodie",
      price: 99,
      oldPrice: 150,
      rating: 4.2,
    },
    {
      src: cartImgThree,
      title: "Classic Denim Jacket",
      price: 140,
      oldPrice: 200,
      rating: 4.7,
    },
    {
      src: cartImgOne,
      title: "T-shirt with Tape Details",
      price: 140,
      oldPrice: 202,
      rating: 4.6,
    },
    {
      src: cartImgTwo,
      title: "Stylish Hoodie",
      price: 305,
      oldPrice: 500,
      rating: 4.1,
    },
    {
      src: cartImgThree,
      title: "Classic Denim Jacket",
      price: 600,
      oldPrice: 800,
      rating: 4.8,
    },
  ];

  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];

  const styles = ["Casual", "Formal", "Party", "Gym"];

  return (
    <div className="mt-[98px] lg:mt-[136px] pb-10">
      {isOpen && <Filters setIsOpen={setIsOpen} />}
      <div className="mx-4 lg:max-w-[1240px] lg:mx-auto">
        {/* nav links */}
        <div className="flex items-center h-[19px] w-[215px]">
          <h5 className="text-[14px] leading-[18.9px] w-[38px] h-[10px] font-normal text-[#00000099]">
            Home
          </h5>
          <Image
            src={arrowRight}
            alt="arrow right sg"
            className="w-[10.08px] h-[5.69px] ml-[4.59px] mt-[12.03px] text-[#00000099]"
          />
          <h5 className="text-[14px] leading-[18.9px] w-[32px] h-[10px] ml-[6px] font-normal text-[#000000]">
            Casual
          </h5>
        </div>

        {/* mobile view */}
        <Products setIsOpen={setIsOpen} />
        {/* end of mobile view */}

        {/* Desktop view */}
        <div className="hidden lg:block">
          <div className="flex items-start gap-4">
            {/* filter */}
            <div className="mt-4 w-[295px] border py-[20px] px-[24px] border-[#0000001A] rounded-[20px]">
              {" "}
              {/* header */}
              <div className="flex py-4 items-center justify-between border-b">
                <h1 className="font-bold text-[#000000] text-[20px] leading-[100%]">
                  Filters
                </h1>
                <div>
                  <Image
                    src={setting}
                    alt="cancel svg"
                    className="w-[15.76px] h-[15.76px] text-[#00000066]"
                  />
                </div>
              </div>
              {/* end of header */}
              <div className="flex flex-col py-6 grid-cols-1 gap-[20px] border-b">
                {/* single filter */}
                <div className="flex items-center justify-between h-[11px]">
                  <h5 className="text-[#00000099] text-[16px] leading-[100%] font-normal">
                    T-Shirts
                  </h5>
                  <Image src={arrowRight} alt="arrowRight svg" />
                </div>
                {/* end of single filter */}

                {/* single filter */}
                <div className="flex items-center justify-between h-[11px]">
                  <h5 className="text-[#00000099] text-[16px] leading-[100%] font-normal">
                    Shorts
                  </h5>
                  <Image src={arrowRight} alt="arrowRight svg" />
                </div>
                {/* end of single filter */}

                {/* single filter */}
                <div className="flex items-center justify-between h-[11px]">
                  <h5 className="text-[#00000099] text-[16px] leading-[100%] font-normal">
                    Shirts
                  </h5>
                  <Image src={arrowRight} alt="arrowRight svg" />
                </div>
                {/* end of single filter */}

                {/* single filter */}
                <div className="flex items-center justify-between h-[11px]">
                  <h5 className="text-[#00000099] text-[16px] leading-[100%] font-normal">
                    Hoodie
                  </h5>
                  <Image src={arrowRight} alt="arrowRight svg" />
                </div>
                {/* end of single filter */}

                {/* single filter */}
                <div className="flex items-center justify-between h-[11px]">
                  <h5 className="text-[#00000099] text-[16px] leading-[100%] font-normal">
                    Jeans
                  </h5>
                  <Image src={arrowRight} alt="arrowRight svg" />
                </div>
                {/* end of single filter */}
              </div>
              {/* price */}
              <div className="pt-5 pb-4 border-b">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-bold text-black text-[20px] leading-[100%]">
                    Price
                  </h2>
                  <Image src={arrowUp} alt="arrow svg" />
                </div>
                <input
                  type="range"
                  name="range"
                  id="range"
                  className="w-[247px]"
                />
              </div>
              {/* end of price section */}
              {/* Colors */}
              <div className="pt-5 pb-4 border-b">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-bold text-black text-[20px] leading-[100%]">
                    Colors
                  </h2>
                  <Image src={arrowUp} alt="arrow svg" />
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <div className="w-[37px] h-[37px] border-[2px] border-[#00000033] rounded-full bg-[#00C12B]"></div>
                  <div className="w-[37px] h-[37px] border-[2px] border-[#00000033] rounded-full bg-[#F50606]"></div>
                  <div className="w-[37px] h-[37px] border-[2px] border-[#00000033] rounded-full bg-[#F5DD06]"></div>
                  <div className="w-[37px] h-[37px] border-[2px] border-[#00000033] rounded-full bg-[#F57906]"></div>
                  <div className="w-[37px] h-[37px] border-[2px] border-[#00000033] rounded-full bg-[#06CAF5]"></div>
                  <div className="w-[37px] h-[37px] border-[2px] border-[#00000033] rounded-full bg-[#7D06F5]"></div>
                  <div className="w-[37px] h-[37px] border-[2px] border-[#00000033] rounded-full bg-[#F506A4]"></div>
                  <div className="w-[37px] h-[37px] border-[2px] border-[#00000033] rounded-full bg-[#FFFFFF]"></div>
                  <div className="w-[37px] h-[37px] border-[2px] border-[#00000033] rounded-full bg-[#000000]"></div>
                </div>
              </div>
              {/* end of color section */}
              {/* Size */}
              <div className="pt-5 pb-4 border-b">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-bold text-black text-[20px] leading-[100%]">
                    Size
                  </h2>
                  <Image src={arrowUp} alt="arrow svg" />
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {sizes.map((size, index) => (
                    <div
                      key={index}
                      className={`${
                        activeSize === index ? "bg-[#000000] " : "bg-[#F0F0F0]"
                      } py-[10px] w-[110px] px-[20px] rounded-[62px] lg:py-[12px] lg:px-[24px] grid place-items-center`}
                      onClick={() => setActiveSize(index)}
                    >
                      <span
                        className={`text-[14px] font-normal leading-[18.9px] ${
                          activeSize === index
                            ? "text-[#FFFFFF]"
                            : "text-[#00000099]"
                        }`}
                      >
                        {size}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* End of size */}
              {/* Dress style */}
              <div className="pt-5 pb-4 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="font-bold text-black text-[20px] leading-[100%]">
                    Dress Style
                  </h2>
                  <Image src={arrowUp} alt="arrow svg" />
                </div>

                <div className="flex flex-col py-6 grid-cols-1 gap-[20px]">
                  {styles.map((style) => (
                    <div
                      key={style}
                      className="flex items-center justify-between h-[11px]"
                    >
                      <h5 className="text-[#00000099] text-[16px] leading-[100%] font-normal">
                        {style}
                      </h5>
                      <Image src={arrowRight} alt="arrowRight svg" />
                    </div>
                  ))}
                </div>
              </div>
              {/* End of dress style */}
              <button className="w-[247px] -mt-8 bg-[#000000] font-medium text-[#FFFFFF] text-[14px] leading-[100%] py-[16px] px-[54px] rounded-[62px] mb-6">
                Apply Filter
              </button>
            </div>

            {/* products */}
            <div>
              {/* Desktop view */}
              <div className="flex items-center justify-between py-4">
                <div className="w-full flex items-center gap-x-10 justify-between">
                  <h2 className="font-bold text-[24px] leading-[32.4px] text-[#000000]">
                    Casual
                  </h2>
                  <div className="flex items-center">
                    <div className="pr-4">
                      <h4 className="text-[16px] h-[10px] leading-[18.9px] font-normal text-[#00000099]">
                        Showing 1-10 of 100 Products
                      </h4>
                    </div>
                    <div className="-mb-2">
                      <span className="text-[#00000099]">Sort by:</span>
                      <select name="" id="">
                        <option value="Most Popular">Most Popular</option>
                        <option value="Most Popular">Most old</option>
                        <option value="Most Popular">Most little</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* <div> */}
                <button className="lg:hidden">
                  <Image src={setting} alt="setting" />
                </button>
                {/* </div> */}
              </div>
              {/* end of header */}

              {/* Category products */}
              <div className="grid grid-cols-[1fr,1fr,1fr] gap-x-4 gap-y-8 mb-4">
                {products.map((product, index) => (
                  <div className="" key={index}>
                    <div className="bg-[#F0EEED] w-[295px] h-[298px] lg:h-[220px] grid place-items-center rounded-2xl mb-2">
                      <Image
                        src={product.src}
                        alt="cloth"
                        width={150}
                        height={120}
                        className="object-cover rounded-[13.42px]"
                      />
                    </div>
                    <h5 className="text-[20px] h-[22px] mb-2 pt-1 font-bold leading-[21.6px]">
                      {product.title}
                    </h5>
                    <div className="flex gap-[11px] py-1 items-center">
                      <div className="flex gap-[4.44px] items-center">
                        {[...Array(5)].map((_, i) => (
                          <Image
                            key={i}
                            src={rate}
                            alt="star img"
                            width={15.47}
                            height={15.47}
                            className="gap-[4.44px]"
                          />
                        ))}
                      </div>

                      <p className="text-[15px]">{product.rating}/5</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                      {" "}
                      <h6 className="text-black font-bold text-[24px]">
                        ${product.price}
                      </h6>
                      <p className="line-through text-[#00000066]">
                        ${product.oldPrice}
                      </p>{" "}
                      <div className="bg-[#FF33331A] text-[#FF3333] rounded-md w-10 h-5 grid place-items-center text-[12px] md:text-[12px]">
                        -20%{" "}
                      </div>{" "}
                    </div>
                  </div>
                ))}
              </div>

              <Border />

              <div className="mt-4 flex items-start lg:justify-between gap-x-2">
                <button className="w-[90px] flex items-center gap-x-2 py-[8px] px-[14px] rounded-[8px] border border-[#0000001A]">
                  <Image src={previous} alt="previous svg" />
                  <span className="font-medium text-[12px] leading-[20px] text-[#000000]">
                    Previous
                  </span>
                </button>
                <div className="w-[292px] flex items-center">
                  <div
                    className="w-[36px] h-[36px] bg-[#0000000F] rounded-[8px] grid place-items-center text-[12px] leading-[20px] font-medium
          "
                  >
                    1
                  </div>
                  <div className="grid w-[36px] h-[36px] place-items-center text-[12px] leading-[20px] font-medium text-[#00000080]">
                    2
                  </div>
                  <div className="grid w-[36px] h-[36px] place-items-center text-[12px] leading-[20px] font-medium text-[#00000080]">
                    ...
                  </div>
                  <div className="grid w-[36px] h-[36px] place-items-center text-[12px] leading-[20px] font-medium text-[#00000080]">
                    9
                  </div>
                  <div className="grid w-[36px] h-[36px] place-items-center text-[12px] leading-[20px] font-medium text-[#00000080]">
                    10
                  </div>
                </div>
                <button className="w-[90px] flex items-center gap-x-3 py-[8px] px-[14px] rounded-[8px] border border-[#0000001A]">
                  <span className="font-medium text-[12px] leading-[20px] text-[#000000]">
                    Next
                  </span>
                  <Image src={next} alt="next svg" />
                </button>
              </div>
            </div>
            {/* end */}
          </div>
        </div>
        {/* end of desktop view */}
      </div>
    </div>
  );
};

export default Category;
