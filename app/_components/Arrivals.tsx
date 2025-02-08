import React from "react";
import Image from "next/image";
import Tshirt from "@/public/images/T-shirt.png";
import jeans from "@/public/images/jeans.png";
import roundneck from "@/public/images/round-neck.png";
import shirt from "@/public/images/Shirt.png";
import rate from "@/public/svg/rate.svg";

const Arrivals = () => {
  return (
    <div className="bg-white py-12 w-full">
      <div>
        <h1 className="font-bold text-[32px] text-center mb-8 text-black h-[38px] md:mb-10 lg:mb-12">
          NEW ARRIVALS
        </h1>

        {/* Arrivals */}
        <div className="w-4/5 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:max-w-[1240px] mx-auto gap-8">
            {/* single arrival */}
            <div className="lg:w-full">
              <Image
                src={Tshirt}
                style={{ width: "100%", height: "200px" }}
                // width={100}
                // height={100}
                alt="cloth"
                className="object-cover rounded-[13.42px]"
              />
              <h5 className="text-[15px] h-[22px] font-bold pt-2">
                T-shirt with Tape Details
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
              <h6 className="text-black font-bold text-[20px]">$120</h6>
            </div>
            {/* end of single arrival */}
            {/* single arrival */}
            <div className="lg:w-full">
              <Image
                src={jeans}
                style={{ width: "100%", height: "200px" }}
                // width={100}
                // height={100}
                alt="cloth"
                className="object-cover rounded-[13.42px]"
              />
              <h5 className="text-[15px] h-[22px] font-bold pt-2">
                T-shirt with Tape Details
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
              <div className="flex items-center gap-x-2">
                <h6 className="text-black font-bold text-[20px]">$240</h6>
                <p className="line-through text-[#00000066]">$260</p>
                <div className="bg-[#FF33331A] text-[#FF3333] rounded-md w-10 h-5 grid place-items-center text-[10px] md:text-[12px]">
                  -20%
                </div>
              </div>
            </div>
            {/* end of single arrival */}
            {/* single arrival */}
            <div className="w-full hidden md:block">
              <Image
                src={roundneck}
                style={{ width: "100%", height: "200px" }}
                // width={100}
                // height={100}
                alt="cloth"
                className="object-cover rounded-[13.42px]"
              />
              <h5 className="text-[15px] h-[22px] font-bold pt-2">
                T-shirt with Tape Details
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
              <h6 className="text-black font-bold text-[20px]">$120</h6>
            </div>
            {/* end of single arrival */}
            {/* single arrival */}
            <div className="w-full hidden lg:block">
              <Image
                src={shirt}
                style={{ width: "100%", height: "200px" }}
                // width={100}
                // height={100}
                alt="cloth"
                className="object-cover rounded-[13.42px]"
              />
              <h5 className="text-[15px] h-[22px] font-bold pt-2">
                T-shirt with Tape Details
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
              <h6 className="text-black font-bold text-[20px]">$120</h6>
            </div>
            {/* end of single arrival */}
          </div>
        </div>

        {/* button */}
        <div className="mt-6 py-2 w-full mx-auto grid place-items-center">
          <button className="bg-transparent mx-4 w-[90%] sm:w-[218px] rounded-[62px] border-opacity-20 font-medium py-2 border text-[14px] border-black">
            View All
          </button>
        </div>
      </div>

      <hr className="bg-[#0000001A] lg:max-w-[1240px] lg:mx-auto mx-4 mt-8 border border-black border-opacity-20" />
    </div>
  );
};

export default Arrivals;
