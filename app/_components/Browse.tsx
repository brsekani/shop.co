import React from "react";
import casual from "@/public/images/casual.png";
import formal from "@/public/images/formal.jpg";
import party from "@/public/images/party.png";
import gym from "@/public/images/gym.png";
import Image from "next/image";

const Browse = () => {
  return (
    <div className="pt-12 pb-16">
      <div className="bg-[#F0F0F0] py-8 px-6 lg:px-10 mx-4 rounded-[13.42px] md:mx-auto lg:max-w-[1240px]">
        <h1 className="font-bold text-center text-[32px] pb-4 md:pb-8 lg:pb-10 leading-[36px] lg:text-[48px] lg:leading-[57.8px]">
          BROWSE BY DRESS STYLE
        </h1>

        <div className="w-full flex flex-col gap-3">
          <div className="grid md:grid-cols-[35%_65%] grid-cols-1 gap-3 flex-wrap">
            {/* Row 1 */}
            {/* Short */}
            <div className="md:h-[289px] h-[190px] rounded-[20px] bg-white relative">
              <h3 className="absolute top-[3%] left-[5%] text-[24px] lg:text-[36px] font-bold text-black z-5">
                Casual
              </h3>
              <Image
                src={casual}
                alt="casual photo"
                // width={200}
                // height={190}
                className="absolute top-0 right-0 h-full object-cover rounded-[20px]"
              />
            </div>

            {/* Long */}
            <div className="md:h-[289px] h-[190px] rounded-[20px] bg-white relative">
              <h3 className="absolute top-[3%] left-[5%] text-[24px] lg:text-[36px] font-bold text-black z-5">
                Formal
              </h3>
              <Image
                src={formal}
                alt="formal photo"
                // width={200}
                // height={190}
                className="absolute top-0 right-0 h-full object-cover rounded-[20px]"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-[65%_35%] grid-cols-1 gap-3 flex-wrap">
            {/* Row 1 */}
            {/* Short */}
            <div className="md:h-[289px] h-[190px] rounded-[20px] bg-white relative">
              <h3 className="absolute top-[3%] left-[5%] text-[24px] lg:text-[36px] font-bold text-black z-5">
                Party
              </h3>
              <Image
                src={party}
                alt="party photo"
                // width={200}
                // height={190}
                className="absolute top-0 right-0 h-full object-cover rounded-[20px]"
              />
            </div>

            {/* Long */}
            <div className="md:h-[289px] h-[190px] rounded-[20px] bg-white relative">
              <h3 className="absolute top-[3%] left-[5%] text-[24px] lg:text-[36px] font-bold text-black z-5">
                Gym
              </h3>
              <Image
                src={gym}
                alt="gym photo"
                className="absolute top-0 right-0 h-full object-cover rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
