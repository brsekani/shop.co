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
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";

export const products = [
  {
    id: 1,
    image: blackRound,
    title: "Wireless Headphones",
    price: 15000,
    discount: 20,
    rating: 4.5,
  },
  {
    id: 2,
    image: blackRound,
    title: "Bluetooth Speaker",
    price: 10000,
    discount: 10,
    rating: 4.0,
  },
  {
    id: 3,
    image: blackRound,
    title: "Smart Watch",
    price: 25000,
    discount: 15,
    rating: 3.5,
  },
  {
    id: 4,
    image: blackRound,
    title: "Portable Charger",
    price: 8000,
    discount: 5,
    rating: 4.8,
  },
  {
    id: 5,
    image: blackRound,
    title: "Gaming Mouse",
    price: 12000,
    discount: 25,
    rating: 4.2,
  },
];

const Arrivals = () => {
  return (
    <div className="py-12">
      <h1 className="font-bold text-[32px] leading-[38.4px] text-center text-black mb-8 md:mb-10 lg:mb-12 lg:text-[48px] lg:leading-[57.6px]">
        NEW ARRIVALS
      </h1>

      <Carousel className="ml-4 lg:mx-auto lg:max-w-[960px] xl:max-w-[1240px]">
        <CarouselContent className="gap-x-6">
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <ProductCard {...product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-6 py-2 w-full mx-auto grid place-items-center">
        <button className="bg-transparent w-[90%] sm:w-[218px] rounded-[62px] border border-black border-opacity-20 font-medium py-2 text-[14px]">
          View All
        </button>
      </div>

      <hr className="mt-8 border-t border-gray-200" />
    </div>
  );
};

export default Arrivals;
