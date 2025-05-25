'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react"
import left from "@/public/svg/left.svg";
import heroImage from "@/public/images/shopHero.jpeg";
import star from "@/public/svg/star.svg";
import eye from "@/public/svg/eye.svg";

const Login : React.FC = () => {

    return (
        <>
            <div className="bg-white h-full mt-48 fixed z-20 top-0 left-0 w-full">
                {/* Desktop view */}
                <div className="grid md:grid-cols-[1fr,1fr]">
                {/* mobile */}
                <div className="p-6 lg:px-16">
                    {/* go back */}
               <div className="flex items-center gap-x-[8px]">
                <button className="text-[12px] font-normal text-[#000000]">
                    <Link href="/"  className=" flex items-center gap-x-2">
                <Image src={left} alt="arrow right" className="w-[10.67px]"/> <span> Go back
                    </span> 
                    </Link>
                </button>
               </div>

               <div>
                <h3 className="font-bold text-[#000000] py-5 w-[342px] h-[10px] text-[14px] leading-[100%]">WELCOME BACK</h3>
                <p className="text-[#00000099] text-[12px] lg:py-1 leading-[100%] W-[269px] h-[16px] font-normal">Sign in to access your account and track your style</p>
                <div className="flex flex-col py-3 lg:py-6 gap-y-3 lg:flex-row lg:gap-x-5">
                    <button className="bg-[#0000000F] rounded-[30px] px-[28px] py-[20px] text-[12px] font-normal leading-[100%] tracking-wider">Continue with Google</button>
                    <button className="bg-[#0000000F] rounded-[30px] px-[28px] py-[20px] text-[12px] font-normal leading-[100%] tracking-wider">Continue with Facebook</button>
                </div>
               </div>

{/* border */}
               <div><hr /></div>

{/* form input & label */}
               <div className="my-6">
                <form action="" className="flex flex-col gap-y-3 lg:gap-y-6">
                    {/* email */}
                    <div className="flex flex-col"><label htmlFor="Email" className="pb-2 text-[14px] font-normal leading-[100%]">Email address</label>
                    <input type="text" name="" placeholder="Enter your email address" id="email" className="placeholder:text-sm rounded-[4px] border border-[#E5E5E5] py-[14px] px-[12px]"/></div>

                    {/* password */}
                    <div className="flex flex-col">
                        <div className="flex items-center justify-between">
                        <label htmlFor="password" className="pb-2 text-[14px] font-normal leading-[100%]">Password</label>
                        <Link href="/auth/forgot-password" className="underline text-[#000000] font-bold text-[12px] pb-1 leading-[100%]">Forgot Password</Link>
                        </div>
                        <div className="relative">
                    <input type="password" name="" placeholder="Enter your password" id="password" className="placeholder:text-[#00000099] placeholder:text-sm w-full relative rounded-[4px] border border-[#E5E5E5] py-[14px] px-[12px]"/>
                    <Image src={eye} alt="eye svg" className="absolute top-[35%] right-5"/>
                        </div>
                    </div>

                    {/* checkbox */}
                    <div className="flex items-center justify-start gap-x-2 lg:gap-x-4">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="Remember me" className="text-[12px] text-[#00000099] font-normal w-[88px] h-[16px]">Remember me</label>
                    </div>

                    {/* login button */}
                    <button className="bg-[#000000] text-[#ffffff] rounded-[62px] px-[54px] py-[16px]">Login</button>

                    {/* others */}
                    <div className="w-full mx-auto">
                    <p className="text-center font-normal lg:text-14px text-[#000000]">Don&apos; have an account? <Link href="/auth/signup" className="underline font-bold text-[#000000]">Create Account</Link></p>
                    </div>
                </form>
               </div>
            </div>

            <div className="hidden md:block bg-[#F2F0F1]"> 
                <h2 className="text-[32px] font-bold leading-[100%] text-[#000000] text-center pt-6">SHOP.CO</h2>
                <div className="flex items-start">
                <Image src={heroImage} alt="hero image"/>
                  <Image
              src={star} 
              alt="starIcon"
              className="absolute lg:w-[104px] md:top-28 md:right-5 lg:top-40 lg:right-10"
              />
              </div>
            </div>

            {/* end */}
            </div>
                </div>

        </>
    )
}


export default Login;