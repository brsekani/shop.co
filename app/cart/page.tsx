"use client";

import { useState } from "react";
import arrowRight from "@/public/svg/arrowRight.svg";
import cartImgOne from "@/public/images/cartImg1.png";
import cartImgTwo from "@/public/images/cartImg2.png";
import cartImgThree from "@/public/images/cartImg3.png";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import Order from "../_components/Order";

export default function Page() {
  const [products, setProducts] = useState([
    {
      id: 1,
      src: cartImgOne,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: "$145",
    },
    {
      id: 2,
      src: cartImgTwo,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: "$180",
    },
    {
      id: 3,
      src: cartImgThree,
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: "$240",
    },
  ]);
  const [quantities, setQuantities] = useState(products.map(() => 1));

  const handleDelete = (id: number) => {
    const updatedProducts = products.filter((item) => item.id !== id);
    setProducts(updatedProducts);
  };

  const addNumber = (index: number) => {
    const updated = [...quantities];
    updated[index] += 1;
    setQuantities(updated);
  };

  const subtractNumber = (index: number) => {
    const updated = [...quantities];
    if (updated[index] > 1) {
      updated[index] -= 1;
      setQuantities(updated);
    }
  };

  return (
    <>
      <div className="mt-[98px] lg:mt-[136px] mx-auto pt-4 pb-10">
        <div className="mx-4 lg:max-w-[1240px] lg:mx-auto">
          {/* header */}
          <div className="flex items-center h-[19px] w-[215px]">
            <h5 className="text-[14px] leading-[18.9px] w-[38px] h-[10px] font-normal text-[#00000099]">
              Home
            </h5>
            <Image
              src={arrowRight}
              alt="arrow right sg"
              className="w-[10.08px] h-[5.69px] ml-[4.59px] mt-[12.03px] text-[#00000099]"
            />
            <h5 className="text-[14px] leading-[18.9px] w-[32px] h-[10px] ml-[6px] font-normal text-[#00000099]">
              Cart
            </h5>
          </div>

          {/* Cart header */}
          <h1 className="text-[32px] font-bold leading-[38.4px] text-black py-4">
            YOUR CART
          </h1>

          <div className="lg:mb-10 md:flex items-start gap-x-6">
            {/* cart products */}
            <div className="border p-4 md:w-full lg:w-[715px] border-[#0000001A] w-[358px] h-auto rounded-[20px] space-y-6">
              {products.length === 0 ? (
                <h1 className="text-center py-10 font-medium text-black text-[16px] lg:text-[24px]">
                  No products found
                </h1>
              ) : (
                products.map((product, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${
                      index + 1 === products.length ? "" : "border-b pb-6"
                    }`}
                  >
                    {/* Image Section */}
                    <div className="bg-[#F0EEED] grid place-items-center w-[99px] h-[99px] lg:w-[124px] lg:h-[124px] rounded-[8.66px]">
                      <Image src={product.src} alt="cart Image" />
                    </div>

                    {/* Cart Info */}
                    <div className="flex flex-col justify-between w-full">
                      <div className="flex justify-between items-start">
                        <h4 className="text-[16px] lg:text-[20px] font-bold leading-[21.6px] lg:leading-[27px] text-black">
                          {product.name}
                        </h4>
                        <Trash2
                          onClick={() => handleDelete(product.id)}
                          className="text-[#FF3333] w-[15px] h-[16px] lg:w-[18px] lg:h-[19px] cursor-pointer"
                        />
                      </div>

                      <div className="mt-1">
                        <p className="text-[12px] lg:text-[14px] text-black">
                          Size:{" "}
                          <span className="text-[#00000099]">
                            {product.size}
                          </span>
                        </p>
                        <p className="text-[12px] lg:text-[14px] text-black">
                          Color:{" "}
                          <span className="text-[#00000099]">
                            {product.color}
                          </span>
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <p className="text-[20px] lg:text-[24px] font-bold text-black">
                          {product.price}
                        </p>

                        <div className="flex items-center gap-6 px-5 py-3 lg:px-6 lg:py-3 bg-[#F0F0F0] rounded-full h-[31px]">
                          <button
                            onClick={() => subtractNumber(index)}
                            disabled={quantities[index] <= 1}
                            className="text-xl font-bold"
                          >
                            -
                          </button>
                          <span className="text-[14px] font-medium">
                            {quantities[index]}
                          </span>
                          <button
                            onClick={() => addNumber(index)}
                            className="text-xl font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            {/* end of cart products */}

            {/* order */}
            <Order />
          </div>
        </div>
      </div>
    </>
  );
}
