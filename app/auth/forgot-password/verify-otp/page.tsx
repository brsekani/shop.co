'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import left from '@/public/svg/left.svg';
import envelope from '@/public/svg/Envelope.svg';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { otpSchema } from '@/app/_components/Schemas';

interface OtpValues {
  otp1: string;
  otp2: string;
  otp3: string;
  otp4: string;
}

const VerifyOtp: React.FC = () => {
  const router = useRouter(); 

  const formik = useFormik<OtpValues>({
    initialValues: {
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
    },
    validationSchema: otpSchema,
    onSubmit: (values) => {
      const fullOtp = values.otp1 + values.otp2 + values.otp3 + values.otp4;
      if (fullOtp.length !== 4 || !/^\d{4}$/.test(fullOtp)) {
        alert('OTP must be 4 digits');
        return;
      }
      console.log("OTP submitted:", fullOtp);
    },
  });

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    if (!/^\d?$/.test(value)) return;

    const name = `otp${index + 1}` as keyof OtpValues;
    await formik.setFieldValue(name, value);

    // Move to next input
    if (value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current?.focus();
    }

    // ✅ Check if all 4 digits are entered
    const values = {
      ...formik.values,
      [name]: value
    };
    const allDigitsFilled = Object.values(values).every((val) => val.length === 1);

    if (allDigitsFilled) {
      // You can validate or submit here if needed
      formik.handleSubmit();
      // ✅ Navigate
      router.push('/auth/forgot-password/verify-otp/new-password');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const name = `otp${index + 1}` as keyof OtpValues;
    if (e.key === "Backspace") {
      if (formik.values[name] === "") {
        if (index > 0) {
          const prevInput = inputRefs[index - 1].current;
          formik.setFieldValue(`otp${index}` as keyof OtpValues, "");
          prevInput?.focus();
        }
      } else {
        formik.setFieldValue(name, "");
      }
    }
  };

  return (
    <div className="bg-[#ffffff] p-6 lg:p-10 fixed z-20 top-0 left-0 w-full h-full">
      {/* Go Back */}
      <div>
          <Link href="/auth/forgot-password" className="flex items-center gap-x-2">
        <button className="text-[12px] font-normal text-[#000000] flex items-center gap-x-[8px]">
            <Image src={left} alt="arrow left" className="w-[10.67px]" />
            <span className="text-[12px] font-normal text-[#000000] leading-[100%]">Go back</span>
        </button>
          </Link>
      </div>
      <div className="mt-12 lg:max-w-[803px] mx-auto">
        <div className="grid place-items-center mb-8">
          <Image src={envelope} alt="envelope svg" className="w-[124px] h-[124px] lg:w-[208px] lg:h-[208px]" />
        </div>
        <div>
          <h2 className="text-[16px] lg:text-[20px] font-bold text-center text-[#000000] pb-3">
            VERIFY YOUR EMAIL
          </h2>
          <h4 className="text-[12px] pb-[12px] font-normal text-center text-[#00000099]">
            We have sent a 4-digit code to <br /><strong>[aa***cc@mail.com]</strong>
          </h4>
          <h5 className="text-[12px] font-normal text-center text-[#00000099] lg:max-w-[294px] mx-auto pb-6">
            Please enter it below to reset your password
          </h5>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-row justify-center gap-x-[12px] mb-6">
              {[0, 1, 2, 3].map((i) => {
                const name = `otp${i + 1}` as keyof OtpValues;
                return (
                  <input
                    key={i}
                    ref={inputRefs[i]}
                    type="text"
                    maxLength={1}
                    name={name}
                    value={formik.values[name]}
                    onChange={(e) => handleInputChange(e, i)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                    onBlur={formik.handleBlur}
                    className="border text-center font-bold w-[52px] h-[52px] text-[13px] border-[#E5E5E5] rounded-[4px] py-[14px] px-[12px]"
                  />
                );
              })}
            </div>
            <button
              type="submit"
              className="bg-[#000000] py-[16px] mb-[18px] px-[54px] text-[#ffffff] w-full rounded-[62px]"
            >
              Verify OTP
            </button>
          </form>
          <p className="font-normal text-center">
            Didn&apos;t send the code?{" "}
            <Link href="#" className="underline text-[14px] font-bold text-[#000000]">
              Resend Code
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
