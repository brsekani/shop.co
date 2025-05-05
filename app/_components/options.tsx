import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import blackRound from "@/public/images/blackRound.png";
import fadedJean from "@/public/images/fadedJean.png";
import React from "react";
import ProductCard from "./ProductCard";

const productData = [
  {
    id: 1,
    image: blackRound,
    title: "T-shirt with Tape Details",
    price: 232,
    discount: 20,
    rating: 4.5,
  },
  {
    id: 2,
    image: fadedJean,
    title: "T-shirt with Tape Details",
    price: 120,
    rating: 4.5,
  },
  {
    id: 3,
    image: fadedJean,
    title: "T-shirt with Tape Details",
    price: 120,
    rating: 4.5,
  },
  {
    id: 4,
    image: fadedJean,
    title: "T-shirt with Tape Details",
    price: 120,
    rating: 4.5,
  },
];

const Options = () => {
  return (
    <div>
      <div className="pt-12 pb-6">
        <h1 className="text-[32px] mx-auto mb-8 w-[274px] lg:w-full text-[#000000] font-bold text-center leading-[36px]">
          YOU MIGHT ALSO LIKE
        </h1>

        <Carousel>
          <CarouselContent className="flex gap-x-6">
            {productData.map((product, index) => (
              <CarouselItem
                key={index}
                className={`flex-shrink-0 basis-1/2 ${
                  index > 1 ? "hidden lg:block" : ""
                } lg:basis-1/4`}
              >
                <ProductCard {...product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Options;
