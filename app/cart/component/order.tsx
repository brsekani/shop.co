import Image from "next/image";
import React from "react";
import tag from "@/public/svg/tag.svg";
import arrowRightDirection from "@/public/svg/arrowRightDirection.svg";

const Order = () => {
  return (
    <div className="border md:mt-0 md:w-full mt-5 p-[20px] lg:w-[505px] border-[#0000001A] w-[358px] rounded-[20px]">
      {/* order header */}
      <h1 className="leading-[27px] pb-3 text-[20px] lg:text-[24px] lg:leading-[32.4px] font-bold text-[#000000]">
        Order Summary
      </h1>

      {/* Sub Total */}
      <div className="flex items-center justify-between mb-5">
        <h5 className="lg:text-[20px] text-[16px] lg:leading-[27px] leading-[21.6px] font-normal text-[#00000099]">
          Subtotal
        </h5>
        <h3 className="text-[#000000] text-[16px] lg:text-[20px] lg:leading-[27px] leading-[21.6px] font-bold h-[22px]">
          $565
        </h3>
      </div>

      {/* Discount fee  */}
      <div className="flex items-center justify-between mb-5">
        <h5 className="text-[16px] lg:text-[20px] lg:leading-[27px] text-[#00000099] leading-[21.6px] font-normal">
          Discount (-20%)
        </h5>
        <h3 className="text-[#FF3333] text-[16px] lg:text-[20px] lg:leading-[27px] leading-[21.6px] font-bold h-[22px]">
          -$113
        </h3>
      </div>

      {/* delivery fee */}
      <div className="flex items-center justify-between pb-3 border-b">
        <h5 className="text-[16px] lg:text-[20px] lg:leading-[27px] text-[#00000099] leading-[21.6px] font-normal">
          Delivery Fee
        </h5>
        <h3 className="text-[#000000] text-[16px] leading-[21.6px] font-bold h-[22px]">
          $15
        </h3>
      </div>

      {/* Total */}
      <div className="text-[16px] flex items-center justify-between pt-5 pb-3 text-[#00000099] leading-[21.6px] font-normal">
        <h5>Total</h5>
        <h3 className="text-[#000000] text-[16px] lg:text-[20px] lg:leading-[27px] leading-[21.6px] font-bold h-[22px]">
          $467
        </h3>
      </div>

      {/* buttons */}
      <div className="flex items-center justify-between pb-5">
        <button className="bg-[#F0F0F0] w-[216px] h-[48px] flex items-center gap-3 rounded-[62px] py-[12px] px-[16px]">
          <Image src={tag} alt="tag" />
          <span className="text-[14px] leading-[18.9px] font-normal text-[#00000066]">
            Add promo code
          </span>
        </button>
        <button className="w-[88px] py-[12px] px-[16px] rounded-[62px] bg-[#000000]">
          <span className="text-[#ffffff] leading-[18.9px] text-[14px] font-medium">
            Apply
          </span>
        </button>
      </div>

      <button className="bg-[#000000] py-[16px] lg:w-full px-[54px] w-[318px] rounded-[62px] flex items-center justify-center gap-x-5">
        <span className="text-[#FFFFFF] text-[14px] lg:text-[16px] lg:leading-[21.6px] leading-[18.9px] font-medium">
          Go to Checkout
        </span>
        <Image
          src={arrowRightDirection}
          alt="arrow right"
          className="text-[#FFFFFF]"
        />
      </button>
    </div>
  );
};

export default Order;
