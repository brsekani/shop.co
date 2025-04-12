"use client";

import { useState } from "react";
import arrowRight from "@/public/svg/arrowRight.svg";
import cartImgOne from "@/public/images/cartImg1.png";
import cartImgTwo from "@/public/images/cartImg2.png";
import cartImgThree from "@/public/images/cartImg3.png";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import Order from "./component/order";

const Cart = () => {
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
            <div className="border p-4 md:w-full lg:w-[715px] border-[#0000001A] w-[358px] h-auto rounded-[20px]">
              {products.length === 0 ? (
                <h1 className="text-center py-10 font-medium text-black text-[16px] lg:text-[24px]">
                  No products found
                </h1>
              ) : (
                products.map((product, index) => (
                  <div key={index} className="border-b mb-5 pb-3 flex gap-2">
                    <div className="bg-[#F0EEED] grid place-items-center border-b lg:w-[124px] lg:h-[124px] w-[99px] h-[99px] rounded-[8.66px]">
                      <Image src={product.src} alt="cart Image One" />
                    </div>

                    {/* cart info */}
                    <div className="w-[217px] lg:w-[527px]">
                      <div className="flex justify-between items-center">
                        <h4 className="leading-[21.6px] text-[16px] font-bold lg:text-[20px] lg:leading-[27px] text-[#000000]">
                          {product.name}
                        </h4>
                        <div>
                          <Trash2
                            onClick={() => handleDelete(product.id)}
                            className="text-[#FF3333] lg:w-[18px] lg:h-[19.5px] w-[15px] h-[16.25px]"
                          />
                        </div>
                      </div>

                      <div className="">
                        <h5 className="leading-[16.2px] lg:text-[14px] font-normal text-[12px] lg:leading-[18.9px] text-[#000000]">
                          Size:{" "}
                          <span className="text-[12px] lg:leading-[18.9px] lg:text-[14px] leading-[16.2px] text-[#00000099]">
                            {product.size}
                          </span>
                        </h5>
                      </div>

                      <div className="">
                        <h5 className="leading-[16.2px] lg:leading-[18.9px] lg:text-[14px] font-normal text-[12px] text-[#000000]">
                          Color:{" "}
                          <span className="text-[12px] lg:leading-[18.9px] lg:text-[14px] leading-[16.2px] text-[#00000099]">
                            {product.color}
                          </span>
                        </h5>
                      </div>

                      <div className="flex items-center justify-between h-[31px] gap-[20px] mt-4">
                        <p className="text-[20px] lg:text-[24px] lg:leading-[32.4px] text-[#000000] leading-[27px] font-bold">
                          {product.price}
                        </p>
                        <div className="flex items-center lg:py-[12px] lg:px-[24px] gap-6 py-[14px] h-[31px] px-[20px] bg-[#F0F0F0] rounded-[62px]">
                          <button
                            className="w-[12.5px] lg:w-[15.63px]"
                            onClick={() => subtractNumber(index)}
                            disabled={quantities[index] <= 1}
                          >
                            -
                          </button>
                          <h3 className="text-[14px] font-medium leading-[18.9px] h-[19px] w-[6px]">
                            {quantities[index]}
                          </h3>
                          <button
                            className="w-[12.5px] lg:w-[15.63px]"
                            onClick={() => addNumber(index)}
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
};

export default Cart;
