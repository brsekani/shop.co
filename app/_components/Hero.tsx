"use client";

import heroImage from "@/public/images/shopHero.jpeg";
import Image from "next/image";
import star from "@/public/svg/star.svg";
import gucci from "@/public/svg/gucci.svg";
import calvinKlein from "@/public/svg/calvinKlein.svg";
import zira from "@/public/svg/zira.svg";
import prada from "@/public/svg/prada.svg";
import versace from "@/public/svg/versace.svg";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-[#F2F0F1] mt-[98px]">
      <div className="w-full md:h-[663px] cursor-default">
        <div className="lg:max-w-[1240px]  mx-auto md:h-[663px] h-fit flex flex-col md:flex-row justify-between gap-10">
          {/* Left section */}
          <div className="w-full pt-8 lg:pt-0 lg:w-1/2 h-full flex items-center lg:items-start flex-col justify-center gap-12 px-4 md:px-4 lg:px-0">
            {/* Add any content here if needed */}
            <div className="flex flex-col md:gap-8 gap-5 items-start">
              <h1 className="text-[32px] lg:text-[64px] leading-[40px] lg:leading-[64px] font-bold">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="text-[14px] lg:text-[16px] leading-[22px] text-[#00000099]">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>

              <Link href={"/category"}>
                <button className="w-[160px] lg:w-[210px] h-[46px] lg:h-[52px] rounded-[62px] bg-[#000000] text-[#FFFFFF] leading-[21.6px] text-[14px] lg:text-[16px] font-medium mt-1 md:mt-0">
                  Shop now
                </button>
              </Link>
            </div>

            <div className="flex flex-row md:gap-8 gap-[27px] h-[74px] items-center justify-center flex-wrap">
              <div className="flex flex-col gap-0">
                <h1 className="text-[24px] lg:text-[40px] leading-[32.4px] lg:leading-[54px] font-bold">
                  200+
                </h1>
                <p className="leading-[22px] text-[#00000099] text-[14px] lg:text-[16px] font-normal">
                  International Brands
                </p>
              </div>

              {/* Hide the HR when wrapping */}
              <hr className="border-l-[2px] border-[#0000001A] my-4 h-full hidden md:block" />

              <div className="flex flex-col gap-0">
                <h1 className="text-[24px] lg:text-[40px] leading-[32.4px] lg:leading-[54px] font-bold">
                  2,000+
                </h1>
                <p className="leading-[22px] text-[#00000099] text-[14px] lg:text-[16px] font-normal">
                  High-Quality Products
                </p>
              </div>

              {/* Hide the HR when wrapping */}
              <hr className="border-l-[2px] border-[#0000001A] my-4 h-full hidden md:block" />

              <div className="flex flex-col gap-0">
                <h1 className="text-[24px] lg:text-[40px] leading-[32.4px] lg:leading-[54px] font-bold">
                  30,000+
                </h1>
                <p className="leading-[22px] font-normal text-[#00000099] text-[14px] lg:text-[16px]">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>

          {/* Right section with the image */}
          <div className="w-full lg:w-1/2 h-full lg:overflow-hidden relative">
            <Image
              src={heroImage}
              alt="Hero-Image"
              // layout="fill"
              // objectFit="cover"

              className="inset-0 top-0 "
            />
            <Image
              src={star}
              alt="starIcon"
              className="absolute top-20 md:right-10 right-1 md:w-[104px] md:h-[104px] w-[76px] h-[76px]"
            />
            <Image
              src={star}
              alt="starIcon"
              className="absolute md:bottom-56 top-32 left-10 md:w-14 md:h-14 w-[44px] h-[44px]"
            />
          </div>
        </div>
      </div>

      {/* clothing highlight */}
      <div className="bg-black h-[146px] lg:hidden grid place-items-center">
        <div>
          <div className="flex items-center justify-evenly gap-4 pb-5">
            <Image src={versace} alt="versace svg" className="h-[23.25px]" />
            <Image src={zira} alt="zira svg" className="h-[26.63px]" />
            <Image src={gucci} alt="gucci svg" className="h-[22.64px]" />
          </div>
          <div className="flex items-center justify-evenly gap-4">
            <Image src={prada} alt="prada svg" className="h-[20.47px]" />
            <Image
              src={calvinKlein}
              alt="calvinKlein svg"
              className="h-[21.75px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
