import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactStars from "react-stars";

type ProductCardProps = {
  image: string;
  title: string;
  price: number;
  discount?: number;
  rating: number;
  id: number;
  onAddToCart?: () => void; // optional handler prop
};

export default function ProductCard({
  image,
  title,
  price,
  discount,
  rating,
  id,
  onAddToCart,
}: ProductCardProps) {
  const discountedPrice = discount ? price - price * (discount / 100) : price;

  return (
    <div className="p-2 ">
      <Link href={`/products-details/${id}`}>
        <div className="bg-[#F0EEED] grid place-items-center h-[200px] lg:h-[220px] rounded-2xl">
          <div className="relative w-full h-[180px] md:w-[210px] md:h-[200px]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-[13.42px]"
              sizes="(max-width: 768px) 100vw, 210px"
              priority
            />
          </div>
        </div>
        <h5 className="text-[15px] h-[22px] pt-1 w-[180px] font-bold leading-[21.6px]">
          {title}
        </h5>

        <div className="flex items-center gap-3 py-1">
          <ReactStars
            count={5}
            value={rating}
            size={16}
            color2="#ffd700"
            edit={false}
            half={true}
          />
          <p className="text-[15px]">{rating}/5</p>
        </div>

        <div className="flex items-baseline gap-2">
          <h6 className="text-black font-bold text-[20px] leading-[27px]">
            ₦{discountedPrice.toLocaleString()}
          </h6>
          {discount && (
            <>
              <span className="text-sm line-through text-gray-500">
                ₦{price.toLocaleString()}
              </span>
              <span className="bg-[#FF33331A] text-[#FF3333] rounded-md w-10 h-5 grid place-items-center text-[10px] md:text-[12px]">
                -{discount}%
              </span>
            </>
          )}
        </div>
      </Link>

      <button
        onClick={onAddToCart}
        className="mt-3 bg-black text-white text-sm px-4 py-2 rounded-full w-full hover:bg-gray-800 transition font-semibold"
      >
        Add to Cart
      </button>
    </div>
  );
}
