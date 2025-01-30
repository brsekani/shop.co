"use client";

import { useState } from "react";
import Image from "next/image";
import cart from "@/public/svg/cart.svg";
import profile from "@/public/svg/profile.svg";
import search from "@/public/svg/search.svg";
import search1 from "@/public/svg/search1.svg";
import hambugger from "@/public/svg/hambugger.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleOpenSearch = () => {
    if (menuOpen) setMenuOpen(false); // Close menu if it's open
    setSearchOpen((prev) => !prev); // Toggle search
  };

  const handleOpenMenu = () => {
    if (searchOpen) setSearchOpen(false); // Close search if it's open
    setMenuOpen((prev) => !prev); // Toggle menu
  };

  return (
    <div className="h-fit py-6 w-full flex items-center mx-auto max-w-[1440px] justify-between px-[18px] flex-col gap-4">
      <div className="w-full flex flex-row items-center justify-between">
        {/* Logo and Hamburger */}
        <div className="flex items-center flex-row gap-[18px]">
          <Image
            src={hambugger}
            alt="hambugger"
            className="cursor-pointer block sm:hidden"
            onClick={handleOpenMenu}
          />
          <h1 className="text-[32px] leading-[38.4px] font-bold cursor-pointer">
            SHOP.CO
          </h1>
        </div>

        <ul className="sm:flex items-center flex-row gap-6 text-nowrap hidden">
          <li className="cursor-pointer text-[16px] leading-[21.6px] text-[#000000]">
            Shop
          </li>
          <li className="cursor-pointer text-[16px] leading-[21.6px] text-[#000000]">
            On Sale
          </li>
          <li className="cursor-pointer text-[16px] leading-[21.6px] text-[#000000]">
            New Arrivals
          </li>
          <li className="cursor-pointer text-[16px] leading-[21.6px] text-[#000000]">
            Brands
          </li>
        </ul>

        {/* Desktop Search Bar */}
        <div className="w-full max-w-[577px] h-12 relative lg:block hidden">
          <input
            className="w-full h-full bg-[#F0F0F0] rounded-[62px] pl-12"
            type="text"
            placeholder="Search for products..."
          />
          <Image
            src={search}
            alt="search"
            className="absolute top-3 left-[18px]"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center flex-row gap-4">
          <Image
            src={search1}
            alt="search"
            className="cursor-pointer block lg:hidden"
            onClick={handleOpenSearch}
          />
          <Image src={cart} alt="cart" className="cursor-pointer" />
          <Image src={profile} alt="profile" className="cursor-pointer" />
        </div>
      </div>

      {/* Mobile Search Dropdown */}
      <div
        className={`w-full h-12 relative lg:hidden overflow-hidden  
        ${searchOpen ? "max-h-14 animate-dropdown" : "max-h-0"}`}
      >
        <input
          className="w-full h-full bg-[#F0F0F0] rounded-[62px] pl-12"
          type="text"
          placeholder="Search for products..."
        />
        <Image
          src={search}
          alt="search"
          className="absolute top-3 left-[18px]"
        />
      </div>

      {/* Dropdown Menu */}
      <ul
        className={`absolute top-[80px] left-0 bg-[#F2F0F1] shadow-md sm:static sm:hidden flex items-center flex-col sm:flex-row gap-2 text-nowrap w-full 
    ${menuOpen ? "block animate-dropdown" : "hidden"}`}
      >
        <li className="cursor-pointer text-[16px] leading-[21.6px] text-[#000000] py-2 sm:py-0">
          Shop
        </li>
        <li className="cursor-pointer text-[16px] leading-[21.6px] text-[#000000] py-2 sm:py-0">
          On Sale
        </li>
        <li className="cursor-pointer text-[16px] leading-[21.6px] text-[#000000] py-2 sm:py-0">
          New Arrivals
        </li>
        <li className="cursor-pointer text-[16px] leading-[21.6px] text-[#000000] py-2 sm:py-0">
          Brands
        </li>
      </ul>
    </div>
  );
}
