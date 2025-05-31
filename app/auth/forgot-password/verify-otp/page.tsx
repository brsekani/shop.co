'use client'

import React from 'react';
import left from "@/public/svg/left.svg";
import envelope from "@/public/svg/Envelope.svg";
import Image from 'next/image';
import Link from 'next/link';
import { useFormik } from 'formik';
import { otpSchema } from '@/app/schemas/verifyOtpSchema';

const onSubmit = (values) => {
    const fullOtp = values.otp1 + values.otp2 + values.otp3 + values.otp4;

    if(fullOtp !== 4) {
        alert('otp must be 4 digits');
    }
}

const VerifyOtp : React.FC = () => {
    const {handleSubmit, handleChange, values, handleBlur} = useFormik({
        initialValues : {
            otp1 : "",
            otp2 : "",
            otp3 : "",
            otp4 : "",
        },

        validationSchema : otpSchema,
        onSubmit
    })
    return (
        <>
             <div className='bg-[#ffffff] p-6 lg:p-10 fixed z-20 top-0 left-0 w-full h-full'>
                                   {/* go back */}
               <div className="flex items-center gap-x-[8px]">
                <button className="text-[12px] font-normal text-[#000000]">
                    <Link href="/auth/forgot-password" className="flex items-center gap-x-2">
                <Image src={left} alt="arrow right" className="w-[10.67px]"/> <span className="text-[12px] font-normal text-[#000000] leading-[100%]"> Go back
                    </span> 
                    </Link>
                </button>
               </div>

               <div className='mt-12 lg:max-w-[803px] mx-auto'>
                <div className='grid place-items-center mb-8'>
                <Image src={envelope} alt="envelope svg" className="w-[124px] h-[124px] lg:w-[208px] lg:h-[208px]"/>
                </div>

                <div>
                    <h2 className='text-[16px] leading-[100%] font-bold text-[#000000] text-center pb-3 lg:text-[20px]'>VERIFY YOUR EMAIL</h2>
                    <h4 className="text-[12px] pb-[12px] font-normal leading-[100%] text-[#00000099] text-center">We have sent a 4-digit code to <br /> <strong>[aa***cc@mail.com]</strong> </h4>
                    <p className='text-[12px] font-normal leading-[100%] lg:max-w-[294px] mx-auto text-center text-[#00000099] space-x-[4px] pb-6'>Please enter it below to reset your password</p>

                    <form action="" onSubmit={handleSubmit}>
                        <div className='flex flex-row justify-center gap-x-[12px] mb-6'> 
                            {[1,2,3,4].map((i) => (
                                <input key={i} type='text' maxLength={1} onChange={handleChange} onBlur={handleBlur}  value={values[`otp${i}`]} className='border text-center font-bold w-[52px] h-[52px] text-[13x] border-[#E5E5E5] rounded-[4px] py-[14px] px-[12px]'/>
                            ))}
                        </div>
                    </form>
                </div>

                    <Link href="/auth/forgot-password/verify-otp/new-password">
                <button className='bg-[#000000] py-[16px] mb-[18px] px-[54px] text-[#ffffff] w-full rounded-[62px]'>
                        Verify OTP
                </button>
                    </Link>

                <p className='font-normal text-center'>Didn&apos;t send the code? <Link href="" className='underline text-[14px] font-bold leading-[100%] text-[#000000]'>Resend Code</Link></p>
               </div>
            </div>
            
        </>
    )
}


export default VerifyOtp;