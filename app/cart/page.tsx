"use client";

import React from "react";
import arrowRight from "@/public/svg/arrowRight.svg";
import cartImgOne from "@/public/images/cartImg1.png";
import cartImgTwo from "@/public/images/cartImg2.png";
import cartImgThree from "@/public/images/cartImg3.png";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import Order from "./component/order";

const Cart = () => {
  return (
    <div className="mt-[98px] lg:mt-[136px] mx-auto pt-4 pb-10">
      <div className="mx-4 lg:max-w-[1240px] lg:mx-auto">
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
            Cart
          </h5>
        </div>

        {/* Cart header */}
        <h1 className="text-[32px] font-bold leading-[38.4px] text-black py-4">
          YOUR CART
        </h1>

        <div className="lg:mb-10 md:flex items-start gap-x-6">
          {/* cart products */}
          <div className="border p-4 md:w-full lg:w-[715px] border-[#0000001A] w-[358px] h-auto rounded-[20px]">
            {/* single cart product */}
            <div className="border-b mb-5 pb-3 flex gap-2">
              {/* single cart product */}
              <div className="bg-[#F0EEED] grid place-items-center border-b lg:w-[124px] lg:h-[124px] w-[99px] h-[99px] rounded-[8.66px]">
                <Image src={cartImgOne} alt="cart Image One" />
              </div>

              {/* cart info */}
              <div className="w-[217px] lg:w-[527px]">
                <div className="flex justify-between items-center">
                  <h4 className="leading-[21.6px] text-[16px] font-bold lg:text-[20px] lg:leading-[27px] text-[#000000]">
                    Gradient Graphic T-shirt
                  </h4>
                  <div>
                    <Trash2 className="text-[#FF3333] lg:w-[18px] lg:h-[19.5px] w-[15px] h-[16.25px]" />
                  </div>
                </div>

                <div className="">
                  <h5 className="leading-[16.2px] lg:text-[14px] font-normal text-[12px] lg:leading-[18.9px] text-[#000000]">
                    Size:{" "}
                    <span className="text-[12px] lg:leading-[18.9px] lg:text-[14px] leading-[16.2px] text-[#00000099]">
                      Large
                    </span>
                  </h5>
                </div>

                <div className="">
                  <h5 className="leading-[16.2px] lg:leading-[18.9px] lg:text-[14px] font-normal text-[12px] text-[#000000]">
                    Color:{" "}
                    <span className="text-[12px] lg:leading-[18.9px] lg:text-[14px] leading-[16.2px] text-[#00000099]">
                      white
                    </span>
                  </h5>
                </div>

                <div className="flex items-center justify-between h-[31px] gap-[20px] mt-4">
                  <p className="text-[20px] lg:text-[24px] lg:leading-[32.4px] text-[#000000] leading-[27px] font-bold">
                    $145
                  </p>
                  <div className="flex items-center lg:py-[12px] lg:px-[24px] gap-6 py-[14px] h-[31px] px-[20px] bg-[#F0F0F0] rounded-[62px]">
                    <p className="w-[12.5px] lg:w-[15.63px]">-</p>
                    <h3 className="text-[14px] font-medium leading-[18.9px] h-[19px] w-[6px]">
                      1
                    </h3>
                    <p className="w-[12.5px] lg:w-[15.63px]">+</p>
                  </div>
                </div>
              </div>
            </div>
            {/* end of single cart product */}

            {/* single cart product */}
            <div className="border-b mb-5 pb-3 flex gap-2">
              {/* single cart product */}
              <div className="bg-[#F0EEED] grid place-items-center border-b lg:w-[124px] lg:h-[124px] w-[99px] h-[99px] rounded-[8.66px]">
                <Image src={cartImgTwo} alt="cart Image One" />
              </div>

              {/* cart info */}
              <div className="w-[217px] lg:w-[527px]">
                <div className="flex justify-between items-center">
                  <h4 className="leading-[21.6px] text-[16px] lg:text-[20px] lg:leading-[27px] font-bold text-[#000000]">
                    Checkered Shirt
                  </h4>
                  <div>
                    <Trash2 className="text-[#FF3333] w-[15px] h-[16.25px] lg:w-[18px] lg:h-[19.5px]" />
                  </div>
                </div>

                <div className="">
                  <h5 className="leading-[16.2px] font-normal lg:text-[14px] text-[12px] lg:leading-[18.9px] text-[#000000]">
                    Size:{" "}
                    <span className="text-[12px] lg:leading-[18.9px] leading-[16.2px] lg:text-[14px] text-[#00000099]">
                      Large
                    </span>
                  </h5>
                </div>

                <div className="">
                  <h5 className="leading-[16.2px] font-normal lg:text-[14px] text-[12px] lg:leading-[18.9px] text-[#000000]">
                    Color:{" "}
                    <span className="text-[12px] lg:text-[14px] lg:leading-[18.9px] leading-[16.2px] text-[#00000099]">
                      Red
                    </span>
                  </h5>
                </div>

                <div className="flex items-center justify-between h-[31px] gap-[20px] mt-4">
                  <p className="text-[20px] text-[#000000] lg:text-[24px] lg:leading-[32.4px] leading-[27px] font-bold">
                    $180
                  </p>
                  <div className="flex items-center gap-6 lg:py-[12px] lg:px-[24px] py-[14px] h-[31px] px-[20px] bg-[#F0F0F0] rounded-[62px]">
                    <p className="w-[12.5px] lg:w-[15.63px]">-</p>
                    <h3 className="text-[14px] font-medium leading-[18.9px] h-[19px] w-[6px]">
                      1
                    </h3>
                    <p className="w-[12.5px] lg:w-[15.63px]">+</p>
                  </div>
                </div>
              </div>
            </div>
            {/* end of single cart product */}

            {/* single cart product */}
            <div className="pb-3 flex gap-2">
              {/* single cart product */}
              <div className="bg-[#F0EEED] grid place-items-center rounded-[8.66px] border-b lg:w-[124px] lg:h-[124px] w-[99px] h-[99px]">
                <Image src={cartImgThree} alt="cart Image One" />
              </div>

              {/* cart info */}
              <div className="w-[217px] lg:w-[527px]">
                <div className="flex justify-between items-center">
                  <h4 className="leading-[21.6px] text-[16px] lg:text-[20px] lg:leading-[27px] font-bold text-[#000000]">
                    Skinny Fit Jeans
                  </h4>
                  <div>
                    <Trash2 className="text-[#FF3333] w-[15px] h-[16.25px] lg:w-[18px] lg:h-[19.5px]" />
                  </div>
                </div>

                <div className="">
                  <h5 className="leading-[16.2px] lg:leading-[18.9px] lg:text-[14px] font-normal text-[12px] text-[#000000]">
                    Size:{" "}
                    <span className="text-[12px] lg:leading-[18.9px] lg:text-[14px] leading-[16.2px] text-[#00000099]">
                      Large
                    </span>
                  </h5>
                </div>

                <div className="">
                  <h5 className="leading-[16.2px] lg:leading-[18.9px] lg:text-[14px] font-normal text-[12px] text-[#00000099]">
                    Color:{" "}
                    <span className="text-[12px] lg:leading-[18.9px] lg:text-[14px] leading-[16.2px]">
                      Blue
                    </span>
                  </h5>
                </div>

                <div className="flex items-center justify-between h-[31px] gap-[20px] mt-4">
                  <p className="text-[20px] text-[#000000] lg:text-[24px] lg:leading-[32.4px] leading-[27px] font-bold">
                    $240
                  </p>
                  <div className="flex items-center gap-6 lg:py-[12px] lg:px-[24px] py-[14px] h-[31px] px-[20px] bg-[#F0F0F0] rounded-[62px]">
                    <p className="w-[12.5px] lg:w-[15.63px]">-</p>
                    <h3 className="text-[14px] font-medium leading-[18.9px] h-[19px] w-[6px]">
                      1
                    </h3>
                    <p className="w-[12.5px] lg:w-[15.63px]">+</p>
                  </div>
                </div>
              </div>
            </div>
            {/* end of single cart product */}
          </div>
          {/* end of cart products */}

          {/* order */}
          <Order />
        </div>
      </div>
    </div>
  );
};

export default Cart;
