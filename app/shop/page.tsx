"use client";

import Image from "next/image";
import React, { useState } from "react";
import arrowRight from "@/public/svg/arrowRight.svg";
import rate from "@/public/svg/rate.svg";
import add from "@/public/svg/add.svg";
import subtract from "@/public/svg/subtract.svg";
import Size from "./components/size";
import Colors from "./components/colors";
import Tabs from "./components/tabs";
import Outfits from "./components/outfits";
// import Reviews from "./components/reviews";
import Options from "./components/options";
// import shopT from "@/public/images/shopT_prev_ui.png";
import shopTF from "@/public/images/shopTF_prev_ui.png";
import shopTB from "@/public/images/shopTB_prev_ui.png";
import shopTFull from "@/public/images/shopTFull_prev_ui.png";

const Shop = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [number, setNumber] = useState(1);

  const imgsData = [
    {
      src: shopTF,
      alt: "front",
      bg: "#F3F1EF",
    },
    {
      src: shopTB,
      alt: "back",
      bg: "#F0EEED",
    },
    {
      src: shopTFull,
      alt: "full",
      bg: "#F4F1F4",
      className: "object-contain",
    },
  ];

  return (
    <>
      <div className="mt-[98px] lg:mt-[136px] pt-6 pb-10">
        {/* container  */}
        <div className="mx-4 lg:mx-auto lg:max-w-[1240px]">
          {/* header */}
          <div className="flex items-center h-[19px] w-[215px]">
            <h5 className="text-[14px] leading-[18.9px] w-[38px] h-[10px] font-normal text-[#00000099]">
              Home
            </h5>
            <Image
              src={arrowRight}
              alt="arrow right sg"
              className="w-[10.08px] h-[5.69px] ml-[4.59px] mt-[12.03px] text-[#00000099]"
            />
            <h5 className="text-[14px] leading-[18.9px] w-[32px] h-[10px] ml-[6px] font-normal text-[#00000099]">
              Shop
            </h5>
            <Image
              src={arrowRight}
              alt="arrow right sg"
              className="w-[10.08px] h-[5.69px] ml-[4.59px] mt-[12.03px] text-[#00000099]"
            />
            <h5 className="text-[14px] leading-[18.9px] w-[28px] h-[10px] ml-[6px] font-normal text-[#00000099]">
              Men
            </h5>
            <Image
              src={arrowRight}
              alt="arrow right sg"
              className="w-[10.08px] h-[5.69px] ml-[4.59px] mt-[12.03px] text-[#00000099]"
            />
            <h5 className="text-[14px] leading-[18.9px] w-[65px] h-[10px] ml-[6px] font-normal text-[#000000]">
              T-shirts
            </h5>
          </div>
          {/* end  */}

          <div className="lg:grid lg:grid-cols-2 place-items-center lg:gap-4">
            {/* outfits */}
            <div className="hidden mt-6 lg:flex lg:flex-row items-start lg:gap-2">
              <div className="lg:flex lg:flex-col items-center justify-between gap-2 mb-7">
                {imgsData.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`rounded-[20px] grid place-items-center w-[152px] h-[168px] ${
                      activeImage === index
                        ? "border border-black"
                        : "border border-transparent"
                    }`}
                    style={{ backgroundColor: image.bg }}
                  >
                    {" "}
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className={image.className || ""}
                    />
                  </div>
                ))}
              </div>

              <div className="bg-[#F0EEED] grid place-items-center w-[444px] h-[520px] mb-3 rounded-[20px]">
                <Image
                  src={imgsData[activeImage].src}
                  alt={imgsData[activeImage].alt}
                />
              </div>
            </div>

            <Outfits />

            <div>
              <h3 className="font-bold text-[24px] leading-[28px] lg:text-[40px] lg:leading-[48px] h-[56px] lg:h-[48px] w-[267px] lg:w-[600px]">
                ONE LIFE GRAPHIC T-SHIRT
              </h3>
              <div className="flex gap-[11px] py-1 items-center">
                <div className="flex gap-[4.44px] items-center">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src={rate}
                      alt="star img"
                      width={15.47}
                      height={15.47}
                      className="gap-[4.44px] w-[15.47] h-[15.47] lg:w-[24.71] lg:h-[24.71]"
                    />
                  ))}
                </div>
                <p className="text-[14px] leading-[18.9px] lg:text-[16px] lg:leading-[21.6px] font-normal">
                  4.5/5
                </p>
              </div>

              {/* product price */}
              <div className="flex items-center gap-[10px] lg:gap-[12px] lg:mt-1">
                {" "}
                <h6 className="text-black font-bold text-[24px] lg:text-[32px] lg:leading-[43.2px] leading-[32.4px] h-[32px] w-[61px] lg:w-[81px] lg:h-[43px]">
                  $260
                </h6>
                <p className="line-through text-[#0000004D] lg:text-[32px] lg:leading-[43.2px] font-bold leading-[32.4px] text-[24px] w-[62px] h-[32px] lg:h-[43px] lg:w-[83px]">
                  $300
                </p>{" "}
                <div className="bg-[#FF33331A] text-[#FF3333] py-[6px] px-[12px] lg:px-[14px] rounded-[62px] leading-[18.9px] font-medium grid place-items-center text-[14px] md:text-[12px] lg:text-[16px]">
                  <span> -40% </span>
                </div>{" "}
              </div>

              {/* product info */}
              <p className="text-[14px] leading-[20px] font-normal py-5 lg:text-[16px] lg:leading-[22px] text-[#00000099] lg:w-[590px] w-[358px] lg:-mt-1">
                This graphic t-shirt which is perfect for any occasion. Crafted
                from a soft and breathable fabric, it offers superior comfort
                and style.
              </p>

              {/* border */}
              <div className="border border-[#0000001A]"></div>

              {/* colors */}
              <Colors />

              {/* border */}
              <div className="border border-[#0000001A]"></div>

              {/* size */}
              <Size />

              {/* border */}
              <div className="border border-[#0000001A]"></div>

              {/* Product cart */}
              <div className="pt-5 pb-8 grid grid-cols-[auto,1fr] gap-x-1">
                <div className="bg-[#F0F0F0] w-[110px] lg:w-[170px] h-[44px] py-[12px] px-[16px] rounded-[62px] lg:py-[16px] lg:px-[20px] flex items-center justify-between lg:h-[52px]">
                  <button
                    className="h-[1.88px] w-[15.63px] lg:w-[18.75px] lg:h-[2.25px]"
                    disabled={number <= 1}
                    onClick={() => setNumber(number - 1)}
                  >
                    <Image src={subtract} alt="add" />
                  </button>
                  <h5>{number}</h5>
                  <button
                    className="w-[15.63px] h-[15.63px] lg:w-[18.75] lg:h-[18.75px]"
                    onClick={() => setNumber(number + 1)}
                  >
                    <Image src={add} alt="add" />
                  </button>
                </div>
                <button className="bg-black rounded-[62px] h-[44px] w-[236px] text-[#FFFFFF] text-[14px] leading-[18.9px] py-[16px] px-[54px] lg:w-[400px] lg:text-[16px] lg:leading-[21.6px] lg:py-[16px] lg:px-[54px] lg:h-[52px]">
                  Add to Cart
                </button>
              </div>
              {/* end */}
            </div>
          </div>

          {/* tabs */}

          <div className="w-full mt-10">
            <Tabs />

            <Options />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
