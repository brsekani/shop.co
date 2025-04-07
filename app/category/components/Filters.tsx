import Image from "next/image";
import React from "react";
import cancel from "@/public/svg/cancel.svg";
import arrowRight from "@/public/svg/arrowRight.svg";
import arrowUp from "@/public/svg/arrowUp.svg";

const Filters = () => {
  return (
    <div className="bg-[#ffffff] fixed w-[390px] h-[90%] top-[93px] px-4 z-20 rounded-t-[20px]">
      {/* container */}
      <div>
        {/* header */}
        <div className="flex py-4 items-center justify-between border-b">
          <h1 className="font-bold text-[#000000] text-[20px] leading-[100%]">
            Filters
          </h1>
          <div>
            <Image
              src={cancel}
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
        <div className="pt-5 pb-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-black text-[20px] leading-[100%]">
              Price
            </h2>
            <Image src={arrowUp} alt="arrow svg" />
          </div>

          <div className="bg-[#F0F0F0] w-[353px] h-[6px] rounded-[20px]">
            <div
              className="
            w-[263px] h-[6px] mx-auto bg-[#000000]"
            ></div>
            <div className="bg-[#000000] w-[20px] h-[20px] rounded-full absolute top-0"></div>
          </div>
        </div>
        {/* end of price section */}
      </div>
    </div>
  );
};

export default Filters;
