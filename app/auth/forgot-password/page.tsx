"use client";

import React from "react";
import left from "@/public/svg/left.svg";
import envelope from "@/public/svg/Envelope.svg";
import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import { forgotPasswordSchema } from "@/app/_components/Schemas";
import { ForgotPasswordValues } from "@/types/auth";
import { useRouter } from "next/navigation";

const ForgotPassword: React.FC = () => {
  const router = useRouter();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik<ForgotPasswordValues>({
      initialValues: {
        email: "",
      },

      validationSchema: forgotPasswordSchema,
      onSubmit(values) {
        console.log(values);
        router.push(
          `/auth/forgot-password/verify-otp?email=${encodeURIComponent(
            values.email
          )}`
        );
      },
    });

  return (
    <>
      <div className="flex justify-center h-screen p-[60px]">
        <div className=" w-full space-y-[72px] ">
          {/* go back */}
          <div className="flex items-center gap-x-[8px]">
            <Link href="/auth/login">
              <button className="text-[12px] flex items-center gap-x-2 font-normal text-[#000000]">
                <Image src={left} alt="arrow right" className="w-[10.67px]" />{" "}
                <span className="text-[12px] font-normal text-[#000000] leading-[100%]">
                  {" "}
                  Go back
                </span>
              </button>
            </Link>
          </div>

          <div className="mt-12 lg:max-w-[803px] w-full mx-auto">
            <div className="grid place-items-center mb-[72px]">
              <Image
                src={envelope}
                alt="envelope svg"
                className="w-[124px] h-[124px] lg:w-[208px] lg:h-[208px]"
              />
            </div>

            <div>
              <div className="space-y-3">
                <h2 className="text-[16px] leading-[100%] font-bold text-[#000000] text-center  lg:text-[20px] font-montserrat">
                  ENTER YOUR EMAIL ADDRESS
                </h2>
                <p className="text-[12px] font-normal leading-[100%] lg:max-w-[294px] mx-auto text-center text-[#00000099] space-x-[4px] pb-6">
                  Enter the email address linked to your account and we will
                  send a code to reset your password
                </p>
              </div>

              <form action="" onSubmit={handleSubmit}>
                <div className="flex flex-col mb-6">
                  <label
                    htmlFor="email"
                    className="font-noraml leading-[100%] text-[14px] text-[#000000] tracking-wide pb-1"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Enter your email address"
                    className="border text-[12px] leading-[100%] border-[#E5E5E5] placeholder:text-[#00000099] rounded-[4px] h-10 px-[12px]"
                  />
                  {
                    <p className="text-[12px] text-[#fc8181]  transition-all duration-200">
                      {touched.email && errors.email ? errors.email : "\u00A0"}
                    </p>
                  }
                </div>
                <button
                  type="submit"
                  className="bg-[#000000] text-[14px] text-[#ffffff] leading-[100%] font-medium rounded-[62px] px-[54px] h-10 w-full"
                >
                  Send OTP
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
