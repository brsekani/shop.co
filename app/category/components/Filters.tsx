import Image from "next/image";
import React, { useState } from "react";
import cancel from "@/public/svg/cancel.svg";
import arrowRight from "@/public/svg/arrowRight.svg";
import arrowUp from "@/public/svg/arrowUp.svg";

type FilterProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Filters: React.FC<FilterProps> = ({ setIsOpen }) => {
  const [activeSize, setActiveSize] = useState(4);

  const hideFilter = () => {
    setIsOpen(false);
  };

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
    <div className="fixed flex items-center justify-center inset-0 bg-black bg-opacity-50 z-50">
      {/* container */}
      <div className="bg-white max-h-[100vh] overflow-y-auto w-[390px] top-[200px] px-4 rounded-t-[20px]">
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
              onClick={hideFilter}
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
          <input type="range" name="range" id="range" className="w-[353px]" />
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
                } py-[10px] w-[105px] px-[20px] rounded-[62px] lg:py-[12px] lg:px-[24px] grid place-items-center`}
                onClick={() => setActiveSize(index)}
              >
                <span
                  className={`text-[14px] font-normal leading-[18.9px] ${
                    activeSize === index ? "text-[#FFFFFF]" : "text-[#00000099]"
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

        <button className="w-[353px] -mt-8 bg-[#000000] font-medium text-[#FFFFFF] text-[14px] leading-[100%] py-[16px] px-[54px] rounded-[62px] mb-6">
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default Filters;
