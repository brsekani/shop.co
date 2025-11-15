"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import left from "@/public/svg/left.svg";
import heroImage from "@/public/images/shopHero.jpeg";
import star from "@/public/svg/star.svg";
import eye from "@/public/svg/eye.svg";
import eyeSlash from "@/public/svg/eyeSlash.svg";
import { useFormik } from "formik";
// import { basicSchema } from "@/app/schemas";

import { loginSchema } from "@/app/_components/Schemas";

interface LoginValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useFormik<LoginValues>({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: loginSchema,
    onSubmit(values) {
      console.log(values);
      // router.push("/dashboard");
    },
  });

  return (
    <>
      <div className="bg-white h-auto w-full fixed z-20 top-0 left-0">
        {/* Desktop view */}
        <div className="grid md:grid-cols-[1fr,1fr]">
          {/* mobile */}
          <div className="lg:px-[60px] px-[24px]">
            {/* go back */}
            <div className="flex items-center gap-x-[8px] pb-[44px] pt-[60px]">
              <button className="text-[12px] font-normal text-[#000000] leading-[100%]">
                <Link href="/" className=" flex items-center gap-x-2">
                  <Image src={left} alt="arrow right" className="w-[10.67px]" />{" "}
                  <span className="text-[12px] font-normal text-[#000000] leading-[100%]">
                    {" "}
                    Go Back
                  </span>
                </Link>
              </button>
            </div>

            <div>
              <h3 className="font-bold mb-[12px] text-[#000000] w-[342px] h-[10px] text-[14px] leading-[100%] font-montserrat">
                WELCOME BACK
              </h3>
              <p className="text-[#00000099] text-[12px] leading-[100%] max-w-[269px] w-full font-normal">
                Sign in to access your account and track your style
              </p>
              <div className="flex flex-col my-[22px] gap-y-3 lg:flex-row lg:gap-x-5">
                <button className="bg-[#0000000F] rounded-[30px] px-[28px] h-[43px] text-[12px] font-normal leading-[100%]  font-montserrat">
                  Continue with Google
                </button>
                <button className="bg-[#0000000F] rounded-[30px] px-[28px] h-[43px] text-[12px] font-normal leading-[100%]  font-montserrat">
                  Continue with --
                </button>
              </div>
            </div>

            {/* border */}
            <div>
              <hr />
            </div>

            {/* form input & label */}
            <div className="py-[22px]">
              <form
                onSubmit={handleSubmit}
                action=""
                className="flex flex-col gap-[24px]"
              >
                {/* email */}
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="pb-[4px] text-[14px] font-normal leading-[100%]"
                  >
                    Email address
                  </label>
                  <input
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    name="email"
                    placeholder="Enter your email address"
                    id="email"
                    className={`placeholder:text-[12px] text-[12px] placeholder:
                    leading-[100%] rounded-[4px] border border-[#E5E5E5] h-10 px-[12px] ${
                      errors.email && touched.email ? "input-error" : " "
                    }`}
                  />
                  <p className="text-[12px] text-[#fc8181]  transition-all duration-200">
                    {touched.email && errors.email ? errors.email : "\u00A0"}
                  </p>
                </div>

                {/* password */}
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="pb-[4px] text-[14px] font-normal leading-[100%]"
                    >
                      Password
                    </label>
                    <Link
                      href="/auth/forgot-password"
                      className="underline text-[#000000] font-bold text-[12px] pb-1 leading-[100%]"
                    >
                      Forgot Password
                    </Link>
                  </div>
                  <div>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your password"
                        id="password"
                        className={`placeholder:text-[#00000099] placeholder:text-[12px] placeholder:leading-[100%] w-full relative rounded-[4px] border border-[#E5E5E5] h-10 px-[12px]  ${
                          errors.password && touched.password
                            ? "input-error"
                            : " "
                        }`}
                      />
                      <Image
                        src={showPassword ? eye : eyeSlash}
                        alt="eye svg"
                        className="absolute top-[25%] right-5 cursor-pointer w-[20px] h-[20px]"
                        onClick={() => handleShowPassword()}
                      />
                    </div>

                    <p className="text-[12px] text-[#fc8181] transition-all duration-200">
                      {touched.password && errors.password
                        ? errors.password
                        : "\u00A0"}
                    </p>
                  </div>
                </div>

                {/* checkbox */}
                <div className="flex items-center justify-start gap-x-2 lg:gap-x-4">
                  <input
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    className="accent-black"
                  />

                  <label
                    htmlFor="Remember me"
                    className="text-[12px] text-[#00000099] font-normal w-[88px] h-[16px]"
                  >
                    Remember me
                  </label>
                </div>

                {/* login button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#000000] text-[14px] text-[#ffffff] leading-[100%] font-medium rounded-[62px] px-[54px] h-10"
                >
                  Login
                </button>

                {/* others */}
                <div className="w-full mx-auto">
                  <p className="text-center font-normal text-14px text-[#000000] leading-[100%]">
                    Don&apos;t have an account?{" "}
                    <Link
                      href="/auth/signup"
                      className="underline font-bold text-[#000000]"
                    >
                      Create Account
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>

          <div className="hidden  bg-[#F2F0F1] space-y-[120px] h-screen md:flex items-center flex-col">
            <h2 className="text-[32px] font-[900] leading-[100%] w-full text-[#000000] text-center mt-[60px] font-montserrat">
              SHOP.CO
            </h2>

            <div className="relative">
              <Image src={heroImage} alt="hero image" />
              <Image
                src={star}
                alt="starIcon"
                className="w-[104px] h-[116.53px] absolute top-[120px] right-[62px]"
              />
            </div>
          </div>

          {/* end */}
        </div>
      </div>
    </>
  );
};

export default Login;
