import React from "react";
import email from "@/public/svg/email.svg";
import Image from "next/image";

const Newsletter = () => {
  return (
    <div>
      {/* Newsletter */}
      <div className="bg-black lg:max-w-[1240px] lg:mx-auto flex items-center justify-center md:mx-4 mx-4 rounded-[20px] pt-10 pb-8 px-6">
        <div className="md:grid md:grid-cols-[1fr,250px] lg:grid-cols-[1fr,400px] lg:gap-x-0 place-items-center gap-x-10">
          <h2 className="font-bold leading-none text-white text-[32px] mb-3">
            STAY UPTO DATE ABOUT OUR LATEST OFFER
          </h2>

          <form action="" className="mb-2">
            <div className="relative">
              <input
                type="email"
                className="bg-white w-full rounded-[62px] my-2 lg:my-4 pl-10 pr-6 py-3 placeholder:text-[14px] placeholder:text-[#00000066]"
                name="email"
                id="email"
                placeholder="Enter your email address"
              />
              <Image
                src={email}
                className="absolute lg:top-[42%] top-[38%] left-[5%] text-[#00000066]"
                alt="email svg"
              />
            </div>
            <button
              type="submit"
              className="bg-white text-black font-medium w-full rounded-[62px] py-3 text-[14px]"
            >
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </div>
      {/* end */}
    </div>
  );
};

export default Newsletter;
