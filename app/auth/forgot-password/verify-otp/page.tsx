"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import { useRouter, useSearchParams } from "next/navigation";
import { otpSchema } from "@/app/_components/Schemas";

import left from "@/public/svg/left.svg";
import envelope from "@/public/svg/Envelope.svg";
import { OtpValues } from "@/types/auth";

const VerifyOtp: React.FC = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email"); // <-- your email here
  const router = useRouter();

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

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

      console.log("OTP submitted:", fullOtp);
      router.push(
        `/auth/forgot-password/verify-otp/new-password?email=${encodeURIComponent(
          email!
        )}&code=${fullOtp}`
      );
    },
  });

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;

    if (/^\d{1,4}$/.test(value)) {
      const digits = value.split("");

      digits.forEach((digit, i) => {
        const refIndex = index + i;
        if (refIndex < 4) {
          formik.setFieldValue(`otp${refIndex + 1}`, digit);
          const nextRef = inputRefs.current[refIndex];
          nextRef?.focus();
        }
      });

      if (digits.length === 4) {
        formik.handleSubmit();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const name = `otp${index + 1}` as keyof OtpValues;

    if (e.key === "Backspace") {
      if (formik.values[name] === "") {
        if (index > 0) {
          inputRefs.current[index - 1]?.focus();
          formik.setFieldValue(`otp${index}`, "");
        }
      } else {
        formik.setFieldValue(name, "");
      }
    }
  };

  if (!email) {
    router.push("/auth/forgot-password"); // goes back one page
  }

  return (
    <div className="bg-white p-6 lg:p-10 fixed z-20 top-0 left-0 w-full h-full">
      <div>
        <Link
          href="/auth/forgot-password"
          className="flex items-center gap-x-2"
        >
          <button className="text-[12px] font-normal text-black flex items-center gap-x-[8px]">
            <Image src={left} alt="arrow left" className="w-[10.67px]" />
            <span>Go back</span>
          </button>
        </Link>
      </div>

      <div className="mt-12 lg:max-w-[803px] mx-auto">
        <div className="grid place-items-center mb-[72px]">
          <Image
            src={envelope}
            alt="envelope"
            className="w-[124px] h-[124px] lg:w-[208px] lg:h-[208px]"
          />
        </div>

        <div className="space-y-3">
          <h2 className="text-[16px] lg:text-[20px] font-bold text-center text-black font-montserrat">
            VERIFY YOUR EMAIL
          </h2>
          <h4 className="text-[12px]  font-normal text-center text-[#00000099]">
            We have sent a 4-digit code to <br />
            <strong>{email}</strong>
          </h4>
          <h5 className="text-[12px] font-normal text-center text-[#00000099] lg:max-w-[294px] mx-auto pb-6">
            Please enter it below to reset your password
          </h5>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="flex justify-center gap-x-3 mb-1">
            {[0, 1, 2, 3].map((i) => {
              const name = `otp${i + 1}` as keyof OtpValues;

              return (
                <input
                  key={i}
                  ref={(el) => (inputRefs.current[i] = el)}
                  type="text"
                  name={name}
                  maxLength={4}
                  value={formik.values[name]}
                  onChange={(e) => handleChange(e, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  onBlur={formik.handleBlur}
                  className={`border text-center font-bold w-[52px] h-[52px] text-[13px] rounded-[4px] py-[14px] px-[12px] ${
                    formik.errors[name] && formik.touched[name]
                      ? "border-red-500"
                      : "border-[#E5E5E5]"
                  }`}
                />
              );
            })}
          </div>

          {/* ✅ Show one shared error message if any field has error */}
          <p className="text-[12px] text-[#fc8181] text-center mt-1">
            {Object.values(formik.touched).some(Boolean) &&
            Object.values(formik.errors).some(Boolean)
              ? "All OTP fields are required"
              : "\u00A0"}
          </p>

          <button
            type="submit"
            className="bg-black h-10 mb-4 mt-4 px-10 text-white w-full rounded-full"
          >
            Verify OTP
          </button>
        </form>

        <p className="text-center text-sm">
          Didn&apos;t get the code?{" "}
          <Link href="#" className="underline font-bold text-black">
            Resend Code
          </Link>
        </p>
      </div>
    </div>
  );
};

export default VerifyOtp;
