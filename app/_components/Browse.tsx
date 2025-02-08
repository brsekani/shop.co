import React from "react";
import casual from "@/public/images/casual.png";
import formal from "@/public/images/formal.png";
import party from "@/public/images/party.png";
import gym from "@/public/images/gym.png";
import Image from "next/image";

const Browse = () => {
  return (
    <div className="pt-12 pb-16">
      <div className="bg-[#F0F0F0] py-8 px-6 mx-4 rounded-[13.42px] md:mx-auto lg:max-w-[1240px]">
        <h1 className="font-bold text-center text-[32px] pb-4 md:pb-8 lg:pb-10">
          BROWSE BY DRESS STYLE
        </h1>

        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr] gap-y-3">
            <div className="h-[200px]">
              <Image
                src={casual}
                alt="casual photo"
                className="rounded-[13.42px] object-contain"
              />
            </div>
            <div className="h-[200px]">
              <Image
                src={formal}
                alt="formal photo"
                className="rounded-[13.42px] object-contain"
              />
            </div>
            <div className="h-[200px] w-full">
              <Image
                src={party}
                alt="party photo"
                className="rounded-[13.42px] object-contain"
              />
            </div>
            <div className="h-[200px]">
              <Image
                src={gym}
                alt="gym photo"
                className="rounded-[13.42px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
