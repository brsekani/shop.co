import React, { useState } from "react";
import left from "@/public/svg/left.svg";
import right from "@/public/svg/right.svg";
import verified from "@/public/svg/verified.svg";
import rate from "@/public/svg/rate.svg";
import Image from "next/image";

const Customers = () => {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;

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

  const totalSlides = Math.ceil(reviews.length / itemsPerPage);

  const handleNext = () => {
    setIndex((index) => (index + 1) % totalSlides);
  };

  const handlePrevious = () => {
    setIndex((index) => (index === 0 ? totalSlides - 1 : index - 1));
  };

  return (
    <div className="mx-4 mb-12 md:mb-14">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex items-end justify-between mb-2">
          <h1 className="font-bold text-[32px]">OUR HAPPY CUSTOMERS</h1>

          <div className="flex items-center gap-1 justify-between mr-4 mb-4">
            <button onClick={handlePrevious}>
              <Image src={left} alt="left arrow" />
            </button>
            <button onClick={handleNext}>
              <Image src={right} alt="right arrow" />
            </button>
          </div>
        </div>

        {/* Reviews - Mobile View */}
        <div className="w-full flex gap-4 md:hidden">
          <div className="max-w-[1240px]">
            {/* single review */}
            <div className="border border-black border-opacity-20 rounded-[20px] p-4">
              {/* Star Ratings */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src={rate}
                    alt="star img"
                    width={15}
                    height={15}
                  />
                ))}
              </div>

              {/* Reviewer Info */}
              <div className="flex gap-2 items-center mb-2">
                <h4 className="font-bold">{reviews[index].name}</h4>
                <Image src={verified} alt="verified" width={15} height={15} />
              </div>

              {/* Review Text */}
              <p className="text-sm">{reviews[index].comment}</p>
            </div>
            {/* end */}
          </div>
        </div>
        {/* end */}

        {/* Desktop View */}
        <div className="hidden md:grid place-items-center">
          <div className="lg:max-w-[1240px] md:flex md:flex-row gap-6 overflow-hidden">
            {reviews
              .slice(index * itemsPerPage, index * itemsPerPage + itemsPerPage)
              .map((review) => (
                <div
                  key={review.id}
                  className="border border-black border-opacity-20 rounded-[20px] p-6 w-1/3"
                >
                  {/* Star Ratings */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Image
                        key={i}
                        src={rate}
                        alt="star img"
                        width={15}
                        height={15}
                      />
                    ))}
                  </div>

                  {/* Reviewer Info */}
                  <div className="flex gap-2 items-center mb-2">
                    <h4 className="font-bold">{review.name}</h4>
                    <Image
                      src={verified}
                      alt="verified"
                      width={15}
                      height={15}
                    />
                  </div>

                  {/* Review Text */}
                  <p className="text-sm">{review.comment}</p>
                </div>
              ))}
          </div>
        </div>
        {/* end of Desktop view */}
      </div>
    </div>
  );
};

export default Customers;
