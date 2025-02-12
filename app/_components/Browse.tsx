import React from "react";
import casual from "@/public/images/casual.jpg";
import formal from "@/public/images/formal.png";
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

        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {/* first */}
            <div className="w-full relative h-[190px] rounded-[20px] bg-[#FFFFFF]">
             <h3 className="absolute top-[3%] left-[5%] leading-[32.4px] text-[24px] lg:text-[36px] font-bold text-black">Casual</h3>
              <Image
                src={casual}
                alt="casual photo"
                width={200}
                height={190}
                className="absolute top-0 right-0 h-full object-cover"
                />               
            </div>

            {/* second */}
            <div className="w-full relative h-[190px] rounded-[20px] bg-[#FFFFFF]">
             <h3 className="absolute top-[3%] left-[5%] leading-[32.4px] text-[24px] lg:text-[36px] font-bold text-black">Formal</h3>
              <Image
                src={casual}
                alt="casual photo"
                width={200}
                height={190}
                className="absolute top-0 right-0 h-full object-cover"
                />               
            </div>

            {/* Third */}
            <div className="w-full lg:mr-6 relative h-[190px] rounded-[20px] bg-[#FFFFFF]">
             <h3 className="absolute top-[3%] left-[5%] leading-[32.4px] text-[24px] lg:text-[36px] font-bold text-black">Party</h3>
              <Image
                src={casual}
                alt="casual photo"
                width={200}
                height={190}
                className="absolute top-0 right-0 h-full object-cover"
                />               
            </div>

            {/* Last */}
            <div className="w-full relative h-[190px] rounded-[20px] bg-[#FFFFFF]">
             <h3 className="absolute top-[3%] left-[5%] leading-[32.4px] text-[24px] lg:text-[36px] font-bold text-black">Gym</h3>
              <Image
                src={casual}
                alt="casual photo"
                width={200}
                height={190}
                className="absolute top-0 right-0 h-full object-cover"
                />               
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
