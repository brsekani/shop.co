import React from "react";
import Image from "next/image";
import gin from "@/public/images/gin.png";
import blackRound from "@/public/images/blackRound.png";
import Tshirt from "@/public/images/T-shirt.png";
import fadedJean from "@/public/images/fadedJean.png";
import blackSl from "@/public/images/blackSl.png";
import rate from "@/public/svg/rate.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Arrivals = () => {
  return (
    <div className="bg-white py-12 w-full">
      <div>
        <h1 className="font-bold leading-[38.4px] text-[32px] text-center mb-8 text-black h-[38px] md:mb-10 lg:mb-12 lg:text-[48px] lg:leading-[57.6px]">
          NEW ARRIVALS
        </h1>

        {/* Arrivals */}
        <div className="flex justify-center">
          <Carousel className="max-w-[200px] sm:max-w-[400px] md:max-w-[600px] mx-auto lg:max-w-[1240px]">
            <CarouselContent>
              {/* single arrival */}
              <CarouselItem className="sm:basis-1/2 md:basis-1/3 xl:basis-1/4 md:mr-6">
                <div>
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
                  <h6 className="text-black font-bold text-[20px] leading-[27px] w-[46px] h-[27px]">
                    $120
                  </h6>
                </div>
              </CarouselItem>
              {/* end of single arrival */}

              {/* single arrival */}
              <CarouselItem className="md:mr-6 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                {" "}
                <div>
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
              <CarouselItem className="md:mr-6 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                {" "}
                <div>
                  <div className="bg-[#F0EEED] h-[200px] lg:h-[220px] grid place-items-center rounded-2xl">
                    <Image
                      src={Tshirt}
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
              <CarouselItem className="md:mr-6 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                {" "}
                <div>
                  <div className="bg-[#F0EEED] h-[200px] lg:h-[220px] grid place-items-center rounded-2xl">
                    <Image
                      src={blackSl}
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
              <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 md:mr-6 lg:mr-8">
                {" "}
                <div>
                  <div className="bg-[#F0EEED] h-[200px] lg:h-[220px] grid place-items-center rounded-2xl">
                    <Image
                      src={gin}
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
              <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 md:mr-6 lg:mr-8">
                {" "}
                <div>
                  <div className="bg-[#F0EEED] h-[200px] lg:h-[220px] grid place-items-center rounded-2xl">
                    <Image
                      src={gin}
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

            <CarouselPrevious className="mb-5" />
            <CarouselNext className="mb-5" />
          </Carousel>
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
