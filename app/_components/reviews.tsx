import Image from "next/image";
import React from "react";
import rate from "@/public/svg/rate.svg";
import verified from "@/public/svg/verified.svg";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah M",
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae nobis similique aliquid inventore aspernatur at!",
      date: "Posted on August 14, 2023",
    },
    {
      id: 2,
      name: "Darah Wilson",
      comment:
        "Lorem ipsum sit, amet consectetur adipisicing elit. Beatae nobis similique aliquid inventore aspernatur at!",
      date: "Posted on August 15, 2023",
    },
    {
      id: 3,
      name: "Adewakun Damilare",
      comment:
        "Lorem ipsum sit, amet consectetur adipisicing elit. Beatae nobis similique aliquid inventore aspernatur at!",
      date: "Posted on August 16, 2023",
    },
    {
      id: 4,
      name: "John Praise",
      comment:
        "Lorem ipsum sit, amet consectetur adipisicing elit. Beatae nobis similique aliquid inventore aspernatur at!",
      date: "Posted on August 17, 2023",
    },
    {
      id: 5,
      name: "Cristiano Ronaldo",
      comment:
        "Lorem ipsum sit, amet consectetur adipisicing elit. Beatae nobis similique aliquid inventore aspernatur at!",
      date: "Posted on August 18, 2023",
    },
    {
      id: 6,
      name: "Lionel Messi",
      comment:
        "Lorem ipsum sit, amet consectetur adipisicing elit. Beatae nobis similique aliquid inventore aspernatur at!",
      date: "Posted on August 19, 2023",
    },
  ];

  return (
    <div>
      {/* review */}
      <div className="grid grid-cols-1 gap-y-4 lg:hidden">
        {/* single review */}
        <div
          className="border border-[#000000
] rounded-[20px] p-6 w-[358px] sm:w-[300px] md:w-[310px] lg:mr-0 lg:w-350px xl:w-[400px]"
        >
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
              {reviews[0].name}
            </h4>
            <Image src={verified} alt="verified" width={15} height={15} />
          </div>

          {/* Review Text */}
          <p className="text-sm font-normal text-[14px] md:text-[16px] leading-[20px] lg:leading-[22px] text-[#00000099]">
            {reviews[0].comment}
          </p>

          <h5 className="font-medium text-[14px] text-[#00000099] h-[22px] pt-4 pb-6 leading-[22px]">
            {reviews[0].date}
          </h5>
        </div>
        {/* end of single review */}

        {/* single review */}
        <div
          className="border border-[#000000
] rounded-[20px] p-6 w-[358px] sm:w-[300px] md:w-[310px] lg:mr-0 lg:w-350px xl:w-[400px]"
        >
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
              {reviews[1].name}
            </h4>
            <Image src={verified} alt="verified" width={15} height={15} />
          </div>

          {/* Review Text */}
          <p className="text-sm font-normal text-[14px] md:text-[16px] leading-[20px] lg:leading-[22px] text-[#00000099]">
            {reviews[1].comment}
          </p>

          <h5 className="font-medium text-[14px] text-[#00000099] h-[22px] pt-4 pb-6 leading-[22px]">
            {reviews[1].date}
          </h5>
        </div>
        {/* end of single review */}

        <button className="py-[14px] px-[36px] w-[200px] mx-auto rounded-[62px] border border-[#0000001A] bg-none text-[#000000] text-[14px] font-medium">
          Load More Reviews
        </button>
      </div>
      {/*  */}

      {/* Desktop view */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
          {reviews.map((review) => (
            <div
              className="border border-[#000000
] rounded-[20px] p-6 w-[610px]"
              key={review.id}
            >
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
                <Image src={verified} alt="verified" width={15} height={15} />
              </div>

              {/* Review Text */}
              <p className="text-sm font-normal text-[14px] md:text-[16px] leading-[20px] lg:leading-[22px] text-[#00000099]">
                {review.comment}
              </p>

              <h5 className="font-medium text-[14px] text-[#00000099] h-[22px] pt-4 pb-6 leading-[22px]">
                {review.date}
              </h5>
            </div>
          ))}
        </div>

        <div className="w-full grid place-items-center">
          <button className="w-[230px] lg:mx-auto py-[14px] mt-6 px-[36px] rounded-[62px] border border-[#0000001A] bg-none text-[#000000] text-[14px] font-medium">
            Load More Reviews
          </button>
        </div>
      </div>
      {/* end of desktop view */}
    </div>
  );
};

export default Reviews;
