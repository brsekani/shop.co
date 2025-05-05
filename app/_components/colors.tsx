import React from "react";
import check from "@/public/svg/check.svg";
import Image from "next/image";

const Colors = () => {
  return (
    <div>
      {/* product colors */}
      <div className="py-5">
        <h5 className="text-[14px] lg:text-[16px] font-normal text-[#00000099] mb-3 lg:leading-[21.6px]">
          Select Colors
        </h5>

        <div className="flex items-center gap-x-2">
          <div className="grid place-items-center w-[39.14px] h-[39.14px] lg:w-[37px] lg:h-[37px] rounded-full bg-[#4F4631]">
            <Image src={check} alt="check" />
          </div>
          <div className="w-[39.14px] h-[39.14px] lg:w-[37px] lg:h-[37px] rounded-full bg-[#314F4A]"></div>
          <div className="w-[39.14px] h-[39.14px]  lg:w-[37px] lg:h-[37px] rounded-full bg-[#31344F]"></div>
        </div>
      </div>
    </div>
  );
};

export default Colors;
