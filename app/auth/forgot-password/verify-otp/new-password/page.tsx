'use client'

import React from 'react';
import left from "@/public/svg/left.svg";
import padlock from "@/public/svg/Padlock.svg";
import Image from 'next/image';
import Link from 'next/link';
import eye from "@/public/svg/eye.svg";
import { FormikHelpers, useFormik } from 'formik';
import { newPasswordSchema } from '@/app/schemas/newPasswordSchema';

interface NewPasswordValues {
    password : string;
    confirmPassword : string;
}

const onSubmit = async (
  values: NewPasswordValues,
  actions: FormikHelpers<NewPasswordValues>
) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const NewPassWord : React.FC = () => {
     const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
                initialValues : {
                      password : "",
                      confirmPassword : "",
                },
    
            validationSchema : newPasswordSchema,
            onSubmit,
        });

    return (
        <>
         <div className='bg-[#ffffff] p-6 lg:p-10 fixed z-20 top-0 left-0 w-full h-full'>
                          {/* go back */}
             <div className="flex items-center gap-x-[8px]">
             <button className="text-[12px] font-normal text-[#000000]">
             <Link href="/auth/forgot-password/verify-otp" className="flex items-center gap-x-2">
                <Image src={left} alt="arrow right" className="w-[10.67px]"/> <span> Go back
                    </span> 
            </Link>
        </button>
               </div>

               <div className='mt-[48.5] lg:max-w-[803px] mx-auto'>
                <div className='grid place-items-center mb-[24px]'>
                <Image src={padlock} alt="padlock svg" className="w-[124px] h-[124px] lg:w-[166.18px] lg:h-[150.02px]"/>
                </div>

                <div>
                    <h2 className='text-[16px] leading-[100%] font-bold text-[#000000] text-center pb-3 lg:text-[20px]'>ENTER NEW PASSWORD</h2>
                    <h4 className="text-[12px] pb-[22px] font-normal leading-4 text-[#00000099] text-center">Set a new password for your account. Make sure it is <br /> something secure and easy to remember </h4>

                    <form action="" className='flex flex-col gap-y-[24px]' onSubmit={handleSubmit}>
                {/* password */}
                    <div className="flex flex-col">
                        <label htmlFor="password" className="pb-[4px] text-[14px] font-normal leading-[100%]">Password</label>
                        <div className="relative">
                    <input type="password" name="" 
                    value={values.password} 
                    onChange={handleChange} 
                    onBlur={handleBlur} 
                    placeholder="Enter your password" id="password" className="placeholder:text-[#00000099] placeholder:text-[12px] placeholder:leading-[100%] w-full relative rounded-[4px] border border-[#E5E5E5] py-[14px] px-[12px]"/>
                    <Image src={eye} alt="eye svg" className="absolute top-[30%] lg:w-[20px] lg:h-[20px] right-5"/>
                        {errors.password && touched.password && <p className="error">{errors.password}</p>}
                        </div>
                    </div>

                    {/* confirm password */}
                    <div className="flex flex-col mb-[24px]">
                        <label htmlFor="confirm password" className="pb-[4px] text-[14px] font-normal leading-[100%]">Confirm password</label>
                        <div className="relative">
                    <input type="password" name="confirmPassword" value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Retype your password" id="confirm password" className="placeholder:text-[#00000099] placeholder:text-[12px] placeholder:leading-[100%] w-full relative rounded-[4px] border border-[#E5E5E5] py-[14px] px-[12px]"/>
                    <Image src={eye} alt="eye svg" className="absolute top-[30%] lg:w-[20px] lg:h-[20px] right-5"/>
                        {errors.confirmPassword && touched.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                        </div>
                    </div>
                    </form>
                </div>

                    <Link href="/auth/forgot-password/verify-otp/new-password/successful">
                <button className='bg-[#000000] py-[16px] mb-[18px] px-[54px] text-[#ffffff] w-full rounded-[62px]'>
                    Confirm
                </button>
                    </Link>
               </div>
            </div>
        </>
    )
}

export default NewPassWord;