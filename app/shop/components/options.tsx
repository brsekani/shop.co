import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import blackRound from "@/public/images/blackRound.png";
import fadedJean from "@/public/images/fadedJean.png";
import rate from "@/public/svg/rate.svg";
import React from "react";

const Options = () => {
  return (
    <div>
      {/* Might like */}
      <div className="pt-12 pb-6">
        <h1 className="text-[32px] mx-auto mb-8 w-[274px] lg:w-full text-[#000000] font-bold text-center leading-[36px]">
          YOU MIGHT ALSO LIKE
        </h1>

        <Carousel>
          <CarouselContent className="flex gap-x-6">
            {/* single arrival */}
            <CarouselItem className="flex-shrink-0 basis-1/2 lg:basis-1/4">
              <div className="">
                <div className="bg-[#F0EEED] grid place-items-center h-[200px] lg:h-[220px] rounded-2xl">
                  <Image
                    src={blackRound}
                    alt="cloth"
                    width={150}
                    height={120}
                    className="object-cover rounded-[13.42px]"
                  />
                </div>
                <h5 className="text-[15px] h-[22px] pt-1 w-[180px] font-bold leading-[21.6px]">
                  T-shirt with Tape Details
                </h5>
                <div className="flex gap-[11px] py-1 items-center">
                  <div className="flex gap-[4.44px] items-center">
                    {[...Array(5)].map((_, i) => (
                      <Image
                        key={i}
                        src={rate}
                        alt="star img"
                        width={15.47}
                        height={15.47}
                        className="gap-[4.44px]"
                      />
                    ))}
                  </div>

                  <p className="text-[15px]">4.5/5</p>
                </div>
                <div className="flex items-center gap-x-2">
                  {" "}
                  <h6 className="text-black font-bold text-[20px]">$120</h6>
                  <p className="line-through text-[#00000066]">$232</p>{" "}
                  <div className="bg-[#FF33331A] text-[#FF3333] rounded-md w-10 h-5 grid place-items-center text-[10px] md:text-[12px]">
                    -20%{" "}
                  </div>{" "}
                </div>
              </div>
            </CarouselItem>
            {/* end of single arrival */}

            {/* single arrival */}
            <CarouselItem className="flex-shrink-0 basis-1/2 lg:basis-1/4">
              {" "}
              <div className="">
                <div className="bg-[#F0EEED] h-[200px] lg:h-[220px] grid place-items-center rounded-2xl">
                  <Image
                    src={fadedJean}
                    alt="cloth"
                    width={150}
                    height={120}
                    className="object-cover rounded-[13.42px]"
                  />
                </div>
                <h5 className="text-[15px] h-[22px] pt-1 w-[180px] font-bold leading-[21.6px]">
                  T-shirt with Tape Details
                </h5>
                <div className="flex gap-[11px] py-1 items-center">
                  <div className="flex gap-[4.44px] items-center">
                    {[...Array(5)].map((_, i) => (
                      <Image
                        key={i}
                        src={rate}
                        alt="star img"
                        width={15.47}
                        height={15.47}
                        className="gap-[4.44px]"
                      />
                    ))}
                  </div>

                  <p className="text-[15px]">4.5/5</p>
                </div>
                <h6 className="text-black font-bold text-[20px] leading-[27px] w-[46px] h-[27px]">
                  $120
                </h6>
              </div>
            </CarouselItem>
            {/* end of single arrival */}

            {/* single arrival */}
            <CarouselItem className="flex-shrink-0 basis-1/2 hidden lg:block lg:basis-1/4">
              {" "}
              <div className="">
                <div className="bg-[#F0EEED] h-[200px] lg:h-[220px] grid place-items-center rounded-2xl">
                  <Image
                    src={fadedJean}
                    alt="cloth"
                    width={150}
                    height={120}
                    className="object-cover rounded-[13.42px]"
                  />
                </div>
                <h5 className="text-[15px] h-[22px] pt-1 w-[180px] font-bold leading-[21.6px]">
                  T-shirt with Tape Details
                </h5>
                <div className="flex gap-[11px] py-1 items-center">
                  <div className="flex gap-[4.44px] items-center">
                    {[...Array(5)].map((_, i) => (
                      <Image
                        key={i}
                        src={rate}
                        alt="star img"
                        width={15.47}
                        height={15.47}
                        className="gap-[4.44px]"
                      />
                    ))}
                  </div>

                  <p className="text-[15px]">4.5/5</p>
                </div>
                <h6 className="text-black font-bold text-[20px] leading-[27px] w-[46px] h-[27px]">
                  $120
                </h6>
              </div>
            </CarouselItem>
            {/* end of single arrival */}

            {/* single arrival */}
            <CarouselItem className="flex-shrink-0 basis-1/2 hidden lg:block lg:basis-1/4">
              {" "}
              <div className="">
                <div className="bg-[#F0EEED] h-[200px] lg:h-[220px] grid place-items-center rounded-2xl">
                  <Image
                    src={fadedJean}
                    alt="cloth"
                    width={150}
                    height={120}
                    className="object-cover rounded-[13.42px]"
                  />
                </div>
                <h5 className="text-[15px] h-[22px] pt-1 w-[180px] font-bold leading-[21.6px]">
                  T-shirt with Tape Details
                </h5>
                <div className="flex gap-[11px] py-1 items-center">
                  <div className="flex gap-[4.44px] items-center">
                    {[...Array(5)].map((_, i) => (
                      <Image
                        key={i}
                        src={rate}
                        alt="star img"
                        width={15.47}
                        height={15.47}
                        className="gap-[4.44px]"
                      />
                    ))}
                  </div>

                  <p className="text-[15px]">4.5/5</p>
                </div>
                <h6 className="text-black font-bold text-[20px] leading-[27px] w-[46px] h-[27px]">
                  $120
                </h6>
              </div>
            </CarouselItem>
            {/* end of single arrival */}
          </CarouselContent>
        </Carousel>
      </div>
      {/* end */}
    </div>
  );
};

export default Options;
