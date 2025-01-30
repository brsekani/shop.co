import heroImage from "@/public/images/shopHero.jpeg";
import Image from "next/image";
import star from "@/public/svg/star.svg";

export default function Header() {
  return (
    <div className="bg-[#F2F0F1]">
      <div className="max-w-[1440px] w-full mx-auto md:px-[18px] px-0 md:h-[663px] h-fit flex flex-col md:flex-row justify-between gap-10 cursor-default">
        {/* Left section */}
        <div className="w-full lg:w-1/2 h-full flex items-center lg:items-start flex-col justify-center gap-12 px-4">
          {/* Add any content here if needed */}
          <div className="flex flex-col md:gap-8 gap-5 items-start">
            <h1 className="text-[32px] lg:text-[64px] leading-[40px] lg:leading-[64px] font-bold">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-[14px] lg:text-[16px] leading-[22px] text-[#00000099]">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>

            <button className="w-[160px] lg:w-[210px] h-[46px] lg:h-[52px] rounded-[62px] bg-[#000000] text-[#FFFFFF] leading-[21.6px] text-[14px] lg:text-[16px] font-medium mt-1 md:mt-0">
              Shop now
            </button>
          </div>

          <div className="flex flex-row md:gap-8 gap-[27px] h-[74px] items-center justify-center flex-wrap">
            <div className="flex flex-col gap-0">
              <h1 className="text-[24px] lg:text-[40px] leading-[32.4px] lg:leading-[54px]">
                200+
              </h1>
              <p className="leading-[22px] text-[14px] lg:text-[16px]">
                International Brands
              </p>
            </div>

            {/* Hide the HR when wrapping */}
            <hr className="border-l-[1px] border-[#0000001A] my-4 h-full hidden md:block" />

            <div className="flex flex-col gap-0">
              <h1 className="text-[24px] lg:text-[40px] leading-[32.4px] lg:leading-[54px]">
                200+
              </h1>
              <p className="leading-[22px] text-[14px] lg:text-[16px]">
                International Brands
              </p>
            </div>

            {/* Hide the HR when wrapping */}
            <hr className="border-l-[1px] border-[#0000001A] my-4 h-full hidden md:block" />

            <div className="flex flex-col gap-0">
              <h1 className="text-[24px] lg:text-[40px] leading-[32.4px] lg:leading-[54px]">
                200+
              </h1>
              <p className="leading-[22px] text-[14px] lg:text-[16px]">
                International Brands
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
  );
}
