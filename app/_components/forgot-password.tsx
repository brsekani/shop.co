import React, { useEffect } from 'react';
import left from "@/public/svg/left.svg";
import envelope from "@/public/svg/Envelope.svg";
import Image from 'next/image';

interface ForgotPasswordProps {
    forgotPassword : boolean;
    handleForgotPassword : () => void;
}

const ForgotPassword : React.FC<ForgotPasswordProps> = ({forgotPassword, handleForgotPassword}) => {

    useEffect(() => {
        if(forgotPassword) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        }
    }, [forgotPassword])
    return (
        <>
            {
                forgotPassword &&  (
                        <div className='bg-[#ffffff] p-6 lg:p-10 fixed z-20 top-0 left-0 w-full h-full'>
                                   {/* go back */}
               <div className="flex items-center gap-x-[8px]">
                <button onClick={handleForgotPassword} className="text-[12px] font-normal flex items-center gap-x-2 text-[#000000]">
                <Image src={left} alt="arrow right" className="w-[10.67px]"/> <span> Go back
                    </span> 
                </button>
               </div>

               <div className='mt-12 lg:max-w-[803px] mx-auto'>
                <div className='grid place-items-center mb-8'>
                <Image src={envelope} alt="envelope svg" className="w-[124px] h-[124px] lg:w-[208px] lg:h-[208px]"/>
                </div>

                <div>
                    <h2 className='text-[16px] leading-[100%] font-bold text-[#000000] text-center pb-3 lg:text-[20px]'>ENTER YOUR EMAIL ADDRESS</h2>
                    <p className='text-[12px] font-normal leading-[100%] lg:max-w-[294px] mx-auto text-center text-[#00000099] space-x-[4px] pb-6'>Enter the email address linked to your account and we will send a code to reset your password</p>

                    <form action="">
                        <div className='flex flex-col mb-6'> 
                            <label htmlFor="email" className='font-noraml leading-[100%] text-[14px] text-[#000000] tracking-wide pb-1'>Email address</label>
                            <input type="email" id='email' placeholder='Enter your email address' className='border text-[13x] border-[#E5E5E5] placeholder:text-[#00000099] rounded-[4px] py-[14px] px-[12px]'/>
                        </div>
                    </form>
                </div>

                <button className='bg-[#000000] py-[16px] px-[54px] text-[#ffffff] w-full rounded-[62px]'>Send OTP</button>
               </div>
            </div>
                )
            }
        </>
    )
}


export default ForgotPassword;