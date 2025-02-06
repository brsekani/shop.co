import React from "react";
import longShirt from "@/public/images/longShirt.png";
import courage from "@/public/images/courage.png";
import short from "@/public/images/short.png";
import fadedJean from "@/public/images/fadedJean.png";
import rate from "@/public/svg/rate.svg";
import Image from "next/image";

const Selling = () => {
  return (
    <div className="grid place-items-center">
      {/* Header */}
      <div className="mb-8 md:mb-10 lg:mb-12">
        <h1 className="text-[32px] text-black capitalize font-bold">
          TOP SELLING
        </h1>
      </div>

      {/* Items */}
      <div className="w-4/5 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:max-w-[1240px] mx-auto gap-8">
          {/* single selling */}
          <div className="w-full">
            <Image
              src={longShirt}
              style={{ width: "100%", height: "200px" }}
              // width={100}
              // height={100}
              alt="cloth"
              className="object-cover rounded-[13.42px]"
            />
            <h5 className="text-[15px] h-[22px] font-bold pt-2">
              Vertical Striped Shirt
            </h5>
            <div className="flex gap-1 items-center py-2">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src={rate}
                  alt="star img"
                  width={15.47}
                  height={15.47}
                />
              ))}
              <p className="text-[15px]">5.0/5</p>
            </div>
            <div className="flex items-center gap-x-2">
              <h6 className="text-black font-bold text-[20px]">$120</h6>
              <p className="line-through text-[#00000066]">$232</p>
              <div className="bg-[#FF33331A] text-[#FF3333] rounded-md w-10 h-5 grid place-items-center text-[10px] md:text-[12px]">
                -20%
              </div>
            </div>
          </div>
          {/* end of single selling */}
          {/* single selling */}
          <div className="w-full">
            <Image
              src={courage}
              style={{ width: "100%", height: "200px" }}
              // width={100}
              // height={100}
              alt="cloth"
              className="object-cover rounded-[13.42px]"
            />
            <h5 className="text-[15px] h-[22px] font-bold pt-2">
              Courage Graphic T-shirt
            </h5>
            <div className="flex gap-1 items-center py-2">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src={rate}
                  alt="star img"
                  width={15.47}
                  height={15.47}
                />
              ))}
              <p className="text-[15px]">4.0/5</p>
            </div>
            <h6 className="text-black font-bold text-[20px]">$145</h6>
          </div>
          {/* end of single selling */}
          {/* single selling */}
          <div className="w-full hidden md:block">
            <Image
              src={short}
              style={{ width: "100%", height: "200px" }}
              // width={100}
              // height={100}
              alt="cloth"
              className="object-cover rounded-[13.42px]"
            />
            <h5 className="text-[15px] h-[22px] font-bold pt-2">
              Loose Fit Bermuda Shorts
            </h5>
            <div className="flex gap-1 items-center py-2">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src={rate}
                  alt="star img"
                  width={15.47}
                  height={15.47}
                />
              ))}
              <p className="text-[15px]">3.0/5</p>
            </div>
            <h6 className="text-black font-bold text-[20px]">$80</h6>
          </div>
          {/* end of single selling */}
          {/* single selling */}
          <div className="w-full hidden lg:block">
            <Image
              src={fadedJean}
              style={{ width: "100%", height: "200px" }}
              // width={100}
              // height={100}
              alt="cloth"
              className="object-cover rounded-[13.42px]"
            />
            <h5 className="text-[15px] h-[22px] font-bold pt-2">
              Faded Skinny Jeans
            </h5>
            <div className="flex gap-1 items-center py-2">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src={rate}
                  alt="star img"
                  width={15.47}
                  height={15.47}
                />
              ))}
              <p className="text-[15px]">4.5/5</p>
            </div>
            <h6 className="text-black font-bold text-[20px]">$210</h6>
          </div>
          {/* end of single selling */}
        </div>
      </div>
      {/* end of items */}

      {/* button */}
      <div className="mt-6 py-2 w-full mx-auto grid place-items-center">
        <button className="bg-transparent mx-4 w-[90%] sm:w-[218px] rounded-[62px] border-opacity-20 font-medium py-2 border text-[14px] border-black">
          View All
        </button>
      </div>
    </div>
  );
};

export default Selling;
