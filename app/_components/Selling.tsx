import React from "react";
import gin from "@/public/images/gin.png";
import Tshirt from "@/public/images/T-shirt.png";
import blackRound from "@/public/images/blackRound.png";
import fadedJean from "@/public/images/fadedJean.png";
import blackSl from "@/public/images/blackSl.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";

const products = [
  {
    image: blackRound,
    title: "T-shirt with Tape Details",
    price: 120,
    originalPrice: 232,
    discount: 20,
    rating: 4.5,
  },
  {
    image: fadedJean,
    title: "Faded Jean Jacket",
    price: 98,
    originalPrice: 150,
    discount: 35,
    rating: 4.3,
  },
  {
    image: Tshirt,
    title: "Classic White Tee",
    price: 70,
    originalPrice: 100,
    discount: 30,
    rating: 4.7,
  },
  {
    image: blackSl,
    title: "Slim Fit Trousers",
    price: 110,
    originalPrice: 140,
    discount: 21,
    rating: 4.6,
  },
  {
    image: gin,
    title: "Trendy Gin Shirt",
    price: 89,
    originalPrice: 120,
    discount: 25,
    rating: 4.4,
  },
  {
    image: gin,
    title: "Gin Shirt V2",
    price: 89,
    originalPrice: 120,
    discount: 25,
    rating: 4.4,
  },
];

const Selling = () => {
  return (
    <div className="pb-12 w-full">
      <h1 className="font-bold text-[32px] text-center mb-8 text-black h-[38px] md:mb-10 lg:mb-12 lg:text-[48px] lg:leading-[57.6px]">
        TOP SELLING
      </h1>

      <Carousel className="ml-4 lg:mx-auto lg:max-w-[960px] xl:max-w-[1240px]">
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <ProductCard {...product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Selling;
