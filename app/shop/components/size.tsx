import React from "react";

const Size = () => {
  return (
    <div>
      {/* product size */}
      <div className="py-5">
        <p className="text-[14px] font-normal text-[#00000099] lg:text-[16px] mb-3 lg:leading-[21.6px]">
          Choose Size
        </p>

        <div className="flex items-center gap-x-1">
          <div className="bg-[#F0F0F0] py-[10px] px-[20px] lg:py-[12px] lg:px-[24px] rounded-[62px] grid place-items-center">
            <span className="text-[14px] font-normal leading-[18.9px] text-[#00000099]">
              Small
            </span>
          </div>
          <div className="bg-[#F0F0F0] py-[10px] px-[20px] rounded-[62px] lg:py-[12px] lg:px-[24px] grid place-items-center">
            <span className="text-[14px] font-normal leading-[18.9px] text-[#00000099]">
              Medium
            </span>
          </div>
          <div className="bg-[#000000] py-[10px] px-[20px] rounded-[62px] lg:py-[12px] lg:px-[24px] grid place-items-center">
            <span className="text-[14px] font-normal leading-[18.9px] text-[#FFFFFF]">
              Large
            </span>
          </div>
          <div className="bg-[#F0F0F0] py-[10px] px-[20px] rounded-[62px] lg:py-[12px] lg:px-[24px] grid place-items-center">
            <span className="text-[14px] font-normal leading-[18.9px] text-[#00000099]">
              X-Large
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Size;
