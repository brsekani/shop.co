import { useState } from "react";

const Size = () => {
  const [activeSize, setActiveSize] = useState(2);
  const sizes = ["Small", "Medium", "Large", "X-large"];

  return (
    <>
      {/* product size */}
      <div className="py-5">
        <p className="text-[14px] font-normal text-[#00000099] lg:text-[16px] mb-3 lg:leading-[21.6px]">
          Choose Size
        </p>

        <div className="flex items-center gap-x-1">
          {sizes.map((size, index) => (
            <div
              key={index}
              className={`${
                activeSize === index ? "bg-[#000000] " : "bg-[#F0F0F0]"
              } py-[10px] px-[20px] rounded-[62px] lg:py-[12px] lg:px-[24px] grid place-items-center`}
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
    </>
  );
};

export default Size;
