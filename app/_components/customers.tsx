import verified from "@/public/svg/verified.svg";
import rate from "@/public/svg/rate.svg";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Customers = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah M",
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae nobis similique aliquid inventore aspernatur at!",
    },
    {
      id: 2,
      name: "Darah Wilson",
      comment:
        "Lorem ipsum sit, amet consectetur adipisicing elit. Beatae nobis similique aliquid inventore aspernatur at!",
    },
    {
      id: 3,
      name: "Adewakun Damilare",
      comment:
        "Lorem ipsum sit, amet consectetur adipisicing elit. Beatae nobis similique aliquid inventore aspernatur at!",
    },
    {
      id: 4,
      name: "John Praise",
      comment:
        "Lorem ipsum sit, amet consectetur adipisicing elit. Beatae nobis similique aliquid inventore aspernatur at!",
    },
    {
      id: 5,
      name: "Cristiano Ronaldo",
      comment:
        "Lorem ipsum sit, amet consectetur adipisicing elit. Beatae nobis similique aliquid inventore aspernatur at!",
    },
    {
      id: 6,
      name: "Lionel Messi",
      comment:
        "Lorem ipsum sit, amet consectetur adipisicing elit. Beatae nobis similique aliquid inventore aspernatur at!",
    },
  ];

  return (
    <div className="mx-4 mb-12 md:mb-14">
      <div className="max-w-[1240px] mx-auto">
        {/* reviews header */}
        <div className="flex items-end justify-between mb-2">
          <h1 className="font-bold text-[32px] text-[#000000] lg:text-[48px] lg:leading-[57.8px]">
            OUR HAPPY CUSTOMERS
          </h1>
        </div>

        <div className="flex justify-center">
          <Carousel className="w-full lg:max-w-[1240px]">
            <CarouselContent>
              {reviews.map((review) => (
                <CarouselItem
                  key={review.id}
                  className="sm:basis-1/2 md:basis-1/3 md:mr-6 lg:mr-0"
                >
                  <div className="border border-[#0000001A] rounded-[20px] p-6 w-full lg:mr-0">
                    {/* Star Ratings */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Image
                          key={i}
                          src={rate}
                          alt="star img"
                          className="w-[15px] h-[15px] lg:w-[22.58px] lg:h-[22.58px]"
                        />
                      ))}
                    </div>

                    {/* Reviewer Info */}
                    <div className="flex gap-2 items-center mb-2 leading-[22px] lg:leading-[27px]">
                      <h4 className="font-bold text-[#000000] text-[16px] md:text-[20px]">
                        {review.name}
                      </h4>
                      <Image
                        src={verified}
                        alt="verified"
                        width={15}
                        height={15}
                      />
                    </div>

                    {/* Review Text */}
                    <p className="text-sm text-[14px] md:text-[16px] leading-[20px] lg:leading-[22px] text-[#00000099]">
                      {review.comment}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Previous Button */}
            <CarouselPrevious className="absolute -top-[15%] left-[83%] sm:left-[90%] lg:left-[95%] w-[15.76px] h-[18.75px] bg-transparent border-none" />

            {/* Next Button */}
            <CarouselNext className="absolute -top-[15%] right-0 transform -translate-y-1/2 bg-transparent border-none" />
          </Carousel>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Customers;
