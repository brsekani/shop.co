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
import { signupSchema } from "@/app/_components/Schemas";

interface signupValues {
    fullname : string;
    email : string;
    password : string;
    confirmPassword : string;
}

const onSubmit = async (
  values: signupValues,
  actions: FormikHelpers<signupValues>
) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const SignUp : React.FC = () => {
    const [show, setShow] = useState({
        password : false, 
        confirmPassword : false
    })

    const {values, errors, touched, handleBlur, isSubmitting, handleChange, handleSubmit} = useFormik({
            initialValues : {
                fullname : "",
                email : "",
                password : "",
                confirmPassword : " ",
            },

        validationSchema : signupSchema,
        onSubmit,
    });

    const handleShow = (field: "password" | "confirmPassword") => (
  e: React.MouseEvent<HTMLButtonElement>
) => {
  e.preventDefault();
  setShow(prev => ({
    ...prev,
    [field]: !prev[field],
  }));
};
        
    return (
        <>
            <div className="bg-white h-full fixed z-20 top-0 left-0 w-full">
                {/* Desktop view */}
                <div className="grid md:grid-cols-[1fr,1fr]">
                {/* mobile */}
                <div className="lg:px-[60px] px-[24px]">
                    {/* go back */}
               <div className="flex items-center gap-x-[8px] pb-[44px] pt-[60px]">
                <button className="text-[12px] font-normal text-[#000000]">
                    <Link href="/auth/login"  className=" flex items-center gap-x-2">
                    <Image src={left} alt="arrow right" className="w-[10.67px]"/> <span className="text-[12px] font-normal text-[#000000] leading-[100%]"> Go back
                    </span> 
                    </Link>
                </button>
               </div>

               <div>
                <h3 className="font-bold pb-[12px] text-[#000000]w-[342px] h-[10px] text-[14px] leading-[100%]">CREATE YOUR ACCOUNT</h3>
                <p className="text-[#00000099] pt-[12px] text-[12px] leading-[100%] W-[269px] h-[16px] font-normal">Start shopping your style. It&apos;s fast and free!</p>
                <div className="flex flex-col my-[22px] gap-y-3 lg:flex-row lg:gap-x-5">
                    <button className="bg-[#0000000F] rounded-[30px] px-[28px] py-[20px] text-[12px] font-normal leading-[100%] tracking-wider">Continue with Google</button>
                    <button className="bg-[#0000000F] rounded-[30px] px-[28px] py-[20px] text-[12px] font-normal leading-[100%] tracking-wider">Continue with --</button>
                </div>
               </div>

                {/* border */}
               <div><hr /></div>

                {/* form input & label */}
               <div className="py-[12px]">
                <form onSubmit={handleSubmit} action="" className="flex flex-col gap-y-[18px]">
                    {/* fullname */}
                    <div className="flex flex-col">
                    <label htmlFor="fullname" className="pb-[4px] text-[14px] text-[#000000] font-normal leading-[100%]">Fullname</label>
                    <input 
                    value={values.fullname} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    type="text" name="fullname" placeholder="Enter your fullname" id="fullname" className={`placeholder:text-[12px] placeholder:
                    leading-[100%] rounded-[4px] border border-[#E5E5E5] py-[10px] px-[12px] ${errors.fullname && touched.fullname ? 'input-error' : " "}`}/>
                    {errors.fullname && touched.fullname && <p className="error">{errors.fullname}</p>}
                    </div>

                    {/* email */}
                    <div className="flex flex-col">
                    <label htmlFor="Email" className="pb-[4px] text-[14px] text-[#000000] font-normal leading-[100%]">Email address</label>
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
                        </div>
                        <div className="relative">
                    <input type={show.password ? "text" : "password"} name=""  value={values.password} 
                    onChange={handleChange} 
                    onBlur={handleBlur} placeholder="Enter your password" id="password" className={`placeholder:text-[#00000099] placeholder:text-[12px] placeholder:leading-[100%] w-full relative rounded-[4px] border border-[#E5E5E5] py-[10px] px-[12px]  ${errors.password && touched.password ? 'input-error' : " "}`}/>
                    <button onClick={handleShow('password')} type="button" className="absolute top-[20%] cursor-pointer right-5">
                        {show.password ? 
                        <Image src={eye} alt="eye svg" className="w-[20px] h-[20px]"/> : 
                        <Image src={eyeSlash} alt="eyeSlash svg" className="w-[20px] h-[20px]"/> 
                        }
                    </button>
                        {errors.password && touched.password && <p className="error">{errors && errors.password}</p>}
                        </div>
                    </div>

                    {/* confirm password */}
                        <div className="flex flex-col">
                        <div className="flex items-center justify-between">
                        <label htmlFor="confirm-password" className="pb-[4px] text-[14px] font-normal leading-[100%]">Password</label>
                        </div>
                        <div className="relative">
                    <input type={show.confirmPassword ? "text" : "password"} name="confirmPassword"  value={values.confirmPassword} 
                    onChange={handleChange} 
                    onBlur={handleBlur} placeholder="Retype your password" id="confirmPassword" className={`placeholder:text-[#00000099] placeholder:text-[12px] placeholder:leading-[100%] w-full relative rounded-[4px] border border-[#E5E5E5] py-[10px] px-[12px]  ${errors.password && touched.password ? 'input-error' : " "}`}/>
                    <button onClick={handleShow('confirmPassword')} type="button" className="absolute top-[20%] cursor-pointer right-5">
                        {show.confirmPassword ? 
                        <Image src={eye} alt="eye svg" className="w-[20px] h-[20px]"/> : 
                        <Image src={eyeSlash} alt="eyeSlash svg" className="w-[20px] h-[20px]"/> 
                        }
                    </button>
                        {errors.confirmPassword && touched.confirmPassword && <p className="error">{errors && errors.confirmPassword}</p>}
                        </div>
                    </div>
                
                    {/* continue button */}
                    <button type="submit" disabled={isSubmitting} className="bg-[#000000] text-[14px] text-[#ffffff] leading-[100%] font-medium rounded-[62px] px-[54px] py-[16px]">Continue</button>

                    {/* others */}
                    <div className="w-full mx-auto">
                    <p className="text-center font-normal lg:text-14px text-[#000000] leading-[100%]">Already have an account? <Link href="/auth/login" className="underline font-bold text-[#000000]">Login</Link></p>
                    </div>
                </form>
               </div>
            </div>

            <div className="hidden md:block bg-[#F2F0F1]"> 
                <div className="flex items-start relative h-[663px] w-[712px]">
                    <div className=""> 
                         <Image width={712} height={663} src={heroImage} alt="hero image" className="object-cover"/>
                    </div>
                  <Image
              src={star} 
              alt="starIcon"
              className="absolute lg:w-[104px] md:top-28 md:right-5 lg:top-40 lg:right-10"
              />
              </div>
                <h2 className="text-[32px] font-bold leading-[100%] h-[22px] text-[#000000] text-center absolute top-[60px] right-[276px]">SHOP.CO</h2>
            </div>
            {/* end */}
            </div>
                </div>
        </>
    )
}

export default SignUp;

