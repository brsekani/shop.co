import React from "react";
import Image from "next/image";
import Tshirt from "@/public/images/T-shirt.png";
import jeans from "@/public/images/jeans.png";
import roundneck from "@/public/images/round-neck.png";
import shirt from "@/public/images/Shirt.png";
import rate from "@/public/svg/rate.svg";

const Arrivals = () => {
  return (
    <div className="bg-white py-16 w-full">
      <div>
        <h1 className="font-bold text-[32px] text-center mb-6 text-black h-[38px] md:mb-8 lg:mb-10">
          NEW ARRIVALS
        </h1>

        {/* Arrivals */}
        <div className="w-full h-fit grid place-items-center">
          <div className="w-full overflow-x-scroll lg:max-w-[1240px] mx-auto grid grid-cols-[1fr,1fr] sm:grid-cols-[1fr,1fr,1fr] lg:grid-cols-[1fr,1fr,1fr,1fr] gap-4 sm:justify-items-center ml-[16px]">
            {/* single arrival */}
            <div className="flex flex-col h-full items-start">
              <Image
                src={Tshirt}
                alt="cloth image"
                // width={198}
                // height={200}
                className="object-cover rounded-[13.42px]"
              />
              <h5 className="text-[15px] h-[22px] font-bold pt-2">
                T-shirt with Tape Details
              </h5>
              <div className="flex gap-1 items-center py-1">
                <Image src={rate} alt="star img" width={15.47} height={15.47} />
                <Image src={rate} alt="star img" width={15.47} height={15.47} />
                <Image src={rate} alt="star img" width={15.47} height={15.47} />
                <Image src={rate} alt="star img" width={15.47} height={15.47} />
                <Image src={rate} alt="star img" width={15.47} height={15.47} />
                <p className="text-[15px]">4.5/5</p>
              </div>
              <h6 className="text-black font-bold text-[20px]">$120</h6>
            </div>
            {/* end  */}

            {/* single arrival */}
            <div className="flex flex-col h-full items-start">
              <Image
                src={jeans}
                alt="cloth image"
                // width={198}
                className="object-cover w-[198px] h-[190px] sm:h-[200px] rounded-[13.42px]"
              />
              <h5 className="text-[15px] h-[22px] font-bold pt-2">
                Skinny Fit Jeans
              </h5>
              <div className="flex gap-2 items-center py-1">
                <div className="flex flex-column items-center">
                  <Image
                    src={rate}
                    alt="star img"
                    width={15.47}
                    height={15.47}
                  />
                  <Image
                    src={rate}
                    alt="star img"
                    width={15.47}
                    height={15.47}
                  />
                  <Image
                    src={rate}
                    alt="star img"
                    width={15.47}
                    height={15.47}
                  />
                  <Image
                    src={rate}
                    alt="star img"
                    width={15.47}
                    height={15.47}
                  />
                  <Image
                    src={rate}
                    alt="star img"
                    width={15.47}
                    height={15.47}
                  />
                </div>
                <p className="text-[15px]">4.5/5</p>
              </div>
              <h6 className="text-black font-bold text-[20px]">$120</h6>
            </div>
            {/* end  */}

            {/* single arrival */}
            <div className="lg:block hidden h-full">
              <Image
                src={Tshirt}
                alt="cloth image"
                // width={198}
                // height={200}
                className="object-cover rounded-[13.42px]"
              />
              <h5 className="text-[15px] h-[22px] font-bold pt-2">
                T-shirt with Tape Details
              </h5>
              <div className="flex gap-1 items-center py-1">
                <Image src={rate} alt="star img" width={15.47} height={15.47} />
                <Image src={rate} alt="star img" width={15.47} height={15.47} />
                <Image src={rate} alt="star img" width={15.47} height={15.47} />
                <Image src={rate} alt="star img" width={15.47} height={15.47} />
                <Image src={rate} alt="star img" width={15.47} height={15.47} />
                <p className="text-[15px]">4.5/5</p>
              </div>
              <h6 className="text-black font-bold text-[20px]">$120</h6>
            </div>
            {/* end  */}

            {/* single arrival */}
            <div className="lg:block hidden h-full">
              <Image
                src={Tshirt}
                alt="cloth image"
                // width={198}
                // height={200}
                className="object-cover rounded-[13.42px]"
              />
              <h5 className="text-[15px] h-[22px] font-bold pt-2">
                T-shirt with Tape Details
              </h5>
              <div className="flex gap-1 items-center py-1">
                <Image src={rate} alt="star img" width={15.47} height={15.47} />
                <Image src={rate} alt="star img" width={15.47} height={15.47} />
                <Image src={rate} alt="star img" width={15.47} height={15.47} />
                <Image src={rate} alt="star img" width={15.47} height={15.47} />
                <Image src={rate} alt="star img" width={15.47} height={15.47} />
                <p className="text-[15px]">4.5/5</p>
              </div>
              <h6 className="text-black font-bold text-[20px]">$120</h6>
            </div>
            {/* end  */}
          </div>
        </div>

        {/* button */}
        <div className="mt-6 py-2">
          <button className="bg-transparent w-full border text-[14px] border-black border-opacity-50 rounded-2xl">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Arrivals;
