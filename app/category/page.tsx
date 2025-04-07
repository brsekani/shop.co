"use client";

import Image from "next/image";
import React, { useState } from "react";
import arrowRight from "@/public/svg/arrowRight.svg";
import setting from "@/public/svg/setting.svg";
import next from "@/public/svg/next.svg";
import previous from "@/public/svg/previous.svg";
import cartImgOne from "@/public/images/cartImg1.png";
import cartImgTwo from "@/public/images/cartImg2.png";
import cartImgThree from "@/public/images/cartImg3.png";
import rate from "@/public/svg/rate.svg";
import Border from "../_components/Border";
import Filters from "./components/Filters";

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilterButton = () => {
    setIsOpen(true);
  };

  return (
    <div className="mt-[98px] lg:mt-[136px] pb-10">
      {isOpen && <Filters />}
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

        {/* Header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-x-2">
            <h2 className="font-bold text-[24px] leading-[32.4px] text-[#000000]">
              Casual
            </h2>
            <p className="text-[14px] h-[10px] leading-[18.9px] font-normal text-[#00000099]">
              Showing 1-10 of 100 Products
            </p>
          </div>
          {/* <div> */}
          <button onClick={toggleFilterButton}>
            <Image src={setting} alt="setting" />
          </button>
          {/* </div> */}
        </div>
        {/* end of header */}

        {/* Category products */}
        <div className="grid grid-cols-[1fr,1fr] gap-4 mb-4">
          {/* single product */}
          <div className="">
            <div className="bg-[#F0EEED] w-[172px] h-[200px] lg:h-[220px] grid place-items-center rounded-2xl">
              <Image
                src={cartImgOne}
                alt="cloth"
                width={150}
                height={120}
                className="object-cover rounded-[13.42px]"
              />
            </div>
            <h5 className="text-[15px] h-[22px] pt-1 w-[180px] font-bold leading-[21.6px]">
              T-shirt with Tape Details
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

              <p className="text-[15px]">4.5/5</p>
            </div>
            <div className="flex items-center gap-x-2">
              {" "}
              <h6 className="text-black font-bold text-[20px]">$120</h6>
              <p className="line-through text-[#00000066]">$232</p>{" "}
              <div className="bg-[#FF33331A] text-[#FF3333] rounded-md w-10 h-5 grid place-items-center text-[10px] md:text-[12px]">
                -20%{" "}
              </div>{" "}
            </div>
          </div>
          {/* end of single product */}

          {/* single product */}
          <div className="">
            <div className="bg-[#F0EEED] w-[172px] h-[200px] lg:h-[220px] grid place-items-center rounded-2xl">
              <Image
                src={cartImgTwo}
                alt="cloth"
                width={150}
                height={120}
                className="object-cover rounded-[13.42px]"
              />
            </div>
            <h5 className="text-[15px] h-[22px] pt-1 w-[180px] font-bold leading-[21.6px]">
              T-shirt with Tape Details
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

              <p className="text-[15px]">4.5/5</p>
            </div>
            <div className="flex items-center gap-x-2">
              {" "}
              <h6 className="text-black font-bold text-[20px]">$120</h6>
              <p className="line-through text-[#00000066]">$232</p>{" "}
              <div className="bg-[#FF33331A] text-[#FF3333] rounded-md w-10 h-5 grid place-items-center text-[10px] md:text-[12px]">
                -20%{" "}
              </div>{" "}
            </div>
          </div>
          {/* end of single product */}

          {/* single product */}
          <div className="">
            <div className="bg-[#F0EEED] w-[172px] h-[200px] lg:h-[220px] grid place-items-center rounded-2xl">
              <Image
                src={cartImgThree}
                alt="cloth"
                width={150}
                height={120}
                className="object-cover rounded-[13.42px]"
              />
            </div>
            <h5 className="text-[15px] h-[22px] pt-1 w-[180px] font-bold leading-[21.6px]">
              T-shirt with Tape Details
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

              <p className="text-[15px]">4.5/5</p>
            </div>
            <div className="flex items-center gap-x-2">
              {" "}
              <h6 className="text-black font-bold text-[20px]">$120</h6>
              <p className="line-through text-[#00000066]">$232</p>{" "}
              <div className="bg-[#FF33331A] text-[#FF3333] rounded-md w-10 h-5 grid place-items-center text-[10px] md:text-[12px]">
                -20%{" "}
              </div>{" "}
            </div>
          </div>
          {/* end of single product */}

          {/* single product */}
          <div className="">
            <div className="bg-[#F0EEED] w-[172px] h-[200px] lg:h-[220px] grid place-items-center rounded-2xl">
              <Image
                src={cartImgThree}
                alt="cloth"
                width={150}
                height={120}
                className="object-cover rounded-[13.42px]"
              />
            </div>
            <h5 className="text-[15px] h-[22px] pt-1 w-[180px] font-bold leading-[21.6px]">
              T-shirt with Tape Details
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

              <p className="text-[15px]">4.5/5</p>
            </div>
            <div className="flex items-center gap-x-2">
              {" "}
              <h6 className="text-black font-bold text-[20px]">$120</h6>
              <p className="line-through text-[#00000066]">$232</p>{" "}
              <div className="bg-[#FF33331A] text-[#FF3333] rounded-md w-10 h-5 grid place-items-center text-[10px] md:text-[12px]">
                -20%{" "}
              </div>{" "}
            </div>
          </div>
          {/* end of single product */}
          {/* single product */}
          <div className="">
            <div className="bg-[#F0EEED] w-[172px] h-[200px] lg:h-[220px] grid place-items-center rounded-2xl">
              <Image
                src={cartImgThree}
                alt="cloth"
                width={150}
                height={120}
                className="object-cover rounded-[13.42px]"
              />
            </div>
            <h5 className="text-[15px] h-[22px] pt-1 w-[180px] font-bold leading-[21.6px]">
              T-shirt with Tape Details
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

              <p className="text-[15px]">4.5/5</p>
            </div>
            <div className="flex items-center gap-x-2">
              {" "}
              <h6 className="text-black font-bold text-[20px]">$120</h6>
              <p className="line-through text-[#00000066]">$232</p>{" "}
              <div className="bg-[#FF33331A] text-[#FF3333] rounded-md w-10 h-5 grid place-items-center text-[10px] md:text-[12px]">
                -20%{" "}
              </div>{" "}
            </div>
          </div>
          {/* end of single product */}

          {/* single product */}
          <div className="">
            <div className="bg-[#F0EEED] w-[172px] h-[200px] lg:h-[220px] grid place-items-center rounded-2xl">
              <Image
                src={cartImgThree}
                alt="cloth"
                width={150}
                height={120}
                className="object-cover rounded-[13.42px]"
              />
            </div>
            <h5 className="text-[15px] h-[22px] pt-1 w-[180px] font-bold leading-[21.6px]">
              T-shirt with Tape Details
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

              <p className="text-[15px]">4.5/5</p>
            </div>
            <div className="flex items-center gap-x-2">
              {" "}
              <h6 className="text-black font-bold text-[20px]">$120</h6>
              <p className="line-through text-[#00000066]">$232</p>{" "}
              <div className="bg-[#FF33331A] text-[#FF3333] rounded-md w-10 h-5 grid place-items-center text-[10px] md:text-[12px]">
                -20%{" "}
              </div>{" "}
            </div>
          </div>
          {/* end of single product */}
          {/* single product */}
          <div className="">
            <div className="bg-[#F0EEED] w-[172px] h-[200px] lg:h-[220px] grid place-items-center rounded-2xl">
              <Image
                src={cartImgThree}
                alt="cloth"
                width={150}
                height={120}
                className="object-cover rounded-[13.42px]"
              />
            </div>
            <h5 className="text-[15px] h-[22px] pt-1 w-[180px] font-bold leading-[21.6px]">
              T-shirt with Tape Details
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

              <p className="text-[15px]">4.5/5</p>
            </div>
            <div className="flex items-center gap-x-2">
              {" "}
              <h6 className="text-black font-bold text-[20px]">$120</h6>
              <p className="line-through text-[#00000066]">$232</p>{" "}
              <div className="bg-[#FF33331A] text-[#FF3333] rounded-md w-10 h-5 grid place-items-center text-[10px] md:text-[12px]">
                -20%{" "}
              </div>{" "}
            </div>
          </div>
          {/* end of single product */}

          {/* single product */}
          <div className="">
            <div className="bg-[#F0EEED] w-[172px] h-[200px] lg:h-[220px] grid place-items-center rounded-2xl">
              <Image
                src={cartImgThree}
                alt="cloth"
                width={150}
                height={120}
                className="object-cover rounded-[13.42px]"
              />
            </div>
            <h5 className="text-[15px] h-[22px] pt-1 w-[180px] font-bold leading-[21.6px]">
              T-shirt with Tape Details
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

              <p className="text-[15px]">4.5/5</p>
            </div>
            <div className="flex items-center gap-x-2">
              {" "}
              <h6 className="text-black font-bold text-[20px]">$120</h6>
              <p className="line-through text-[#00000066]">$232</p>{" "}
              <div className="bg-[#FF33331A] text-[#FF3333] rounded-md w-10 h-5 grid place-items-center text-[10px] md:text-[12px]">
                -20%{" "}
              </div>{" "}
            </div>
          </div>
          {/* end of single product */}
        </div>

        <Border />

        <div className="mt-4 flex items-start gap-x-2">
          <button className="w-[90px] flex items-center gap-x-2 py-[8px] px-[14px] rounded-[8px] border border-[#0000001A]">
            <Image src={previous} alt="previous svg" />
            <span className="font-medium text-[12px] leading-[20px] text-[#000000]">
              Previous
            </span>
          </button>
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
          <button className="w-[90px] flex items-center gap-x-3 py-[8px] px-[14px] rounded-[8px] border border-[#0000001A]">
            <span className="font-medium text-[12px] leading-[20px] text-[#000000]">
              Next
            </span>
            <Image src={next} alt="next svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
