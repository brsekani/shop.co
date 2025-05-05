import Image from "next/image";
import React from "react";
import twitter from "@/public/svg/twitter.svg";
import facebook from "@/public/svg/facebook.svg";
import instagram from "@/public/svg/instagram.svg";
import github from "@/public/svg/github.svg";
import visa from "@/public/svg/visa.svg";
import mastercard from "@/public/svg/Mastercard.svg";
import paypal from "@/public/svg/Paypal.svg";
import applePay from "@/public/svg/ Pay.svg";
import gPay from "@/public/svg/G Pay.svg";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <div className="relative w-full">
      {/* newsletter component */}
      <Newsletter />

      {/* footer component */}
      <div className="bg-[#F0F0F0] absolute top-[50%] -z-10 w-full pt-44 md:pt-32 px-4">
        <div className="lg:max-w-[1240px] lg:mx-auto ">
          <div className="lg:grid grid-cols-[300px,1fr] gap-x-32">
            {/* first section */}
            <div>
              <h1 className="text-[32px] text-black font-bold">SHOP.CO</h1>
              <p className="text-[14px] pb-4 text-[#00000099] lg:pb-6">
                We have clothes that suits your style and which you are proud to
                wear. From women to men.
              </p>

              {/* footer icons */}
              <div className="flex gap-2 items-center pb-4">
                <div className="bg-white grid place-items-center w-8 h-8 border border-black border-opacity-20 rounded-full">
                  <Image
                    src={twitter}
                    className="text-[16px]"
                    alt="twitter svg"
                  />
                </div>
                <div className="bg-black text-white grid place-items-center w-8 h-8 border-opacity-20 rounded-full">
                  <Image src={facebook} alt="facebook svg" />
                </div>
                <div className="bg-white grid place-items-center w-8 h-8 border border-black border-opacity-20 rounded-full">
                  <Image src={instagram} alt="instagram svg" />
                </div>
                <div className="bg-white grid place-items-center w-8 h-8 border border-black border-opacity-20 rounded-full">
                  <Image src={github} alt="github svg" />
                </div>
              </div>
            </div>

            {/* footer info */}
            <div className="grid grid-cols-2 lg:flex justify-between align-top gap-4 mb-6">
              {/* Company */}
              <div>
                <h4 className="font-medium tracking-widest text-black pb-3">
                  COMPANY
                </h4>
                <div className="flex flex-col items-start gap-3">
                  <p className="text-[14px] font-normal text-[#00000099]">
                    About
                  </p>
                  <p className="text-[14px] font-normal text-[#00000099]">
                    Features
                  </p>
                  <p className="text-[14px] font-normal text-[#00000099]">
                    Works
                  </p>
                  <p className="text-[14px] font-normal text-[#00000099]">
                    Career
                  </p>
                </div>
              </div>
              {/* Help */}
              <div>
                <h4 className="font-medium tracking-wide text-black pb-3">
                  HELP
                </h4>
                <div className="flex flex-col items-start gap-3">
                  <p className="text-[14px] font-normal text-[#00000099]">
                    Customer Support
                  </p>
                  <p className="text-[14px] font-normal text-[#00000099]">
                    Delivery Details
                  </p>
                  <p className="text-[14px] font-normal text-[#00000099]">
                    Terms & Conditions
                  </p>
                  <p className="text-[14px] font-normal text-[#00000099]">
                    Privacy Policy
                  </p>
                </div>
              </div>
              {/* FAQ */}
              <div>
                <h4 className="font-medium tracking-wide text-black pb-3">
                  FAQ
                </h4>
                <div className="flex flex-col items-start gap-3">
                  <p className="text-[14px] font-normal text-[#00000099]">
                    Account
                  </p>
                  <p className="text-[14px] font-normal text-[#00000099]">
                    Manage Deliveries
                  </p>
                  <p className="text-[14px] font-normal text-[#00000099]">
                    Orders
                  </p>
                  <p className="text-[14px] font-normal text-[#00000099]">
                    Payment
                  </p>
                </div>
              </div>
              {/* Company */}
              <div>
                <h4 className="font-medium tracking-wide text-black pb-3">
                  RESOURCES
                </h4>
                <div className="flex flex-col items-start gap-3">
                  <p className="text-[14px] font-normal text-[#00000099]">
                    Free eBook
                  </p>
                  <p className="text-[14px] font-normal text-[#00000099]">
                    Development
                  </p>
                  <p className="text-[14px] font-normal text-[#00000099]">
                    How to Blog
                  </p>
                  <p className="text-[14px] font-normal text-[#00000099]">
                    Youtube Playlist
                  </p>
                </div>
              </div>
              {/* end */}
            </div>
          </div>

          <hr className="bg-gray-300 border border-gray-300" />

          <div className="w-full base:grid base:place-items-center lg:pt-1 mb-12">
            <div className="lg:flex justify-between">
              <p className="text-[14px] text-center py-3 text-[#00000099]">
                Shop.co &copy; 2000-2023. All Rights Reserved
              </p>
              <div className="flex justify-center items-center gap-2">
                <div className="bg-white grid place-items-center w-10 rounded-md h-5">
                  <Image src={visa} alt="visa svg" />
                </div>
                <div className="bg-white grid place-items-center w-10 rounded-md h-5">
                  <Image src={mastercard} alt="mastercard svg" />
                </div>
                <div className="bg-white grid place-items-center w-10 rounded-md h-5">
                  <Image src={paypal} alt="paypal svg" />
                </div>
                <div className="bg-white grid place-items-center w-10 rounded-md h-5">
                  <Image src={applePay} alt="applePay svg" />
                </div>
                <div className="bg-white grid place-items-center w-10 rounded-md h-5">
                  <Image src={gPay} alt="gPay svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
