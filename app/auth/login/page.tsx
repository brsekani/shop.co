'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react"
import left from "@/public/svg/left.svg";
import heroImage from "@/public/images/shopHero.jpeg";
import star from "@/public/svg/star.svg";
import eye from "@/public/svg/eye.svg";
import eyeSlash from "@/public/svg/eyeSlash.svg";
import { useFormik } from 'formik';
import { FormikHelpers } from "formik";
import { loginSchema } from "@/app/_components/Schemas";

interface LoginValues {
    email : string;
    password : string;
}

const onSubmit = async (
  values: LoginValues,
  actions: FormikHelpers<LoginValues>
) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const Login : React.FC = () => {
    const [show, setShow] = useState(false);

    const {values, errors, touched, handleBlur, isSubmitting, handleChange, handleSubmit} = useFormik({
            initialValues : {
                email : "",
                password : "",
            },

        validationSchema : loginSchema,
        onSubmit,
    });

    const handleShow = (e:  React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setShow(prev => !prev);
    }
    
    return (
        <>
            <div className="bg-white h-auto w-full fixed z-20 top-0 left-0">
                {/* Desktop view */}
                <div className="grid md:grid-cols-[1fr,1fr]">
                {/* mobile */}
                <div className="lg:px-[60px] px-[24px]">
                    {/* go back */}
               <div className="pb-[47.5px] pt-[60px]">
                    <Link href="/" >
                    <button className="text-[12px] font-normal text-[#000000] flex items-center gap-x-[8px]">
                    <Image src={left} alt="arrow right" className="w-[10.67px]"/> <span className="text-[12px] font-normal text-[#000000] leading-[100%]"> Go back
                    </span> 
                </button>
                    </Link>
               </div>

               <div>
                <h3 className="font-bold mb-[12px] text-[#000000] w-[342px] h-[10px] text-[14px] leading-[100%]">WELCOME BACK</h3>
                <p className="text-[#00000099] text-[12px] leading-[100%] W-[269px] h-[16px] font-normal">Sign in to access your account and track your style</p>
                <div className="flex flex-col my-[22px] gap-y-3 lg:flex-row lg:gap-x-5">
                    <button className="bg-[#0000000F] rounded-[30px] px-[28px] py-[20px] text-[12px] font-normal leading-[100%] tracking-wider">Continue with Google</button>
                    <button className="bg-[#0000000F] rounded-[30px] px-[28px] py-[20px] text-[12px] font-normal leading-[100%] tracking-wider">Continue with --</button>
                </div>
               </div>

                {/* border */}
               <div><hr /></div>

                {/* form input & label */}
               <div className="py-[22px]">
                <form onSubmit={handleSubmit} action="" className="flex flex-col gap-y-[18px]">
                    {/* email */}
                    <div className="flex flex-col">
                    <label htmlFor="Email" className="pb-[4px] text-[14px] font-normal leading-[100%]">Email address</label>
                    <input 
                    value={values.email} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    type="text" name="" placeholder="Enter your email address" id="email" className={`placeholder:text-[12px] placeholder:
                    leading-[100%] rounded-[4px] border border-[#E5E5E5] py-[10px] px-[12px] ${errors.email && touched.email ? 'input-error' : " "}`}/>
                    {errors.email && touched.email && <p className="error">{errors.email}</p>}
                    </div>

                    {/* password */}
                    <div className="flex flex-col">
                        <div className="flex items-center justify-between">
                        <label htmlFor="password" className="pb-[4px] text-[14px] font-normal leading-[100%]">Password</label>
                        <Link  href="/auth/forgot-password">
                        <button className="underline text-[#000000] font-bold text-[12px] pb-1 leading-[100%]">
                        Forgot Password
                        </button>
                        </Link>
                        </div>
                        <div className="relative">
                    <input type={show ? "text" : "password"} name=""  value={values.password} 
                    onChange={handleChange} 
                    onBlur={handleBlur} placeholder="Enter your password" id="password" className={`placeholder:text-[#00000099] placeholder:text-[12px] placeholder:leading-[100%] w-full relative rounded-[4px] border border-[#E5E5E5] py-[10px] px-[12px]  ${errors.password && touched.password ? 'input-error' : " "}`}/>
                    <button onClick={handleShow} type="button" className="absolute top-[20%] cursor-pointer right-5">
                        {show ? 
                        <Image src={eye} alt="eye svg" className="w-[20px] h-[20px]"/> : 
                        <Image src={eyeSlash} alt="eyeSlash svg" className="w-[20px] h-[20px]"/> 
                        }
                    </button>
                        {errors.password && touched.password && <p className="error">{errors && errors.password}</p>}
                        </div>
                    </div>

                    {/* checkbox */}
                    <div className="flex items-center justify-start gap-x-2">
                    <input type="checkbox" name="checkbox" id="checkbox" className="focus:bg-black"/>
                    <label htmlFor="Remember me" className="text-[12px] text-[#00000099] font-normal w-[88px] h-[16px]">Remember me</label>
                    </div>

                    {/* login button */}
                    <button type="submit" disabled={isSubmitting} className="bg-[#000000] text-[14px] text-[#ffffff] leading-[100%] font-medium rounded-[62px] px-[54px] py-[16px]">Login</button>

                    {/* others */}
                    <div className="w-full mx-auto">
                    <p className="text-center font-normal lg:text-14px text-[#000000] leading-[100%]">Don&apos;t have an account? <Link href="/auth/signup" className="underline font-bold text-[#000000]">Create Account</Link></p>
                    </div>
                </form>
               </div>
            </div>

            <div className="hidden md:block bg-[#F2F0F1]"> 
                <h2 className="text-[32px] font-bold leading-[100%] w-full text-[#000000] text-center mt-[60px]">SHOP.CO</h2>
                <div className="relative flex items-start">
                    <div>
                        <Image src={heroImage} alt="hero image"/>
                    </div>
                    <Image
                    src={star} 
                    alt="starIcon"
                    className="w-[104px] h-[116.53px] absolute top-[104.34px] left-[555px]"
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