"use client";

import React, { useState } from "react";
import left from "@/public/svg/left.svg";
import padlock from "@/public/svg/Padlock.svg";
import Image from "next/image";
import Link from "next/link";
import eye from "@/public/svg/eye.svg";
import eyeSlash from "@/public/svg/eyeSlash.svg";
import { useFormik } from "formik";
import { newPasswordSchema } from "@/app/_components/Schemas";
import { useRouter, useSearchParams } from "next/navigation";
import { NewPasswordValues } from "@/types/auth";

const NewPassWord: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const code = searchParams.get("code");

  const [show, setShow] = useState({
    password: false,
    confirmPassword: false,
  });

  console.log(typeof email);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik<NewPasswordValues>({
      initialValues: {
        password: "",
        confirmPassword: "",
        email: email || "",
        code: code || "",
      },

      validationSchema: newPasswordSchema,
      onSubmit: (values) => {
        console.log(values);
        router.push("/auth/forgot-password/verify-otp/new-password/successful");
      },
    });

  const handleShow =
    (field: "password" | "confirmPassword") =>
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setShow((prev) => ({
        ...prev,
        [field]: !prev[field],
      }));
    };

  if (!email || !code) {
    router.replace("/auth/forgot-password");
    return;
  }

  return (
    <>
      <div className="p-6 lg:p-10  w-full h-full">
        {/* go back */}
        <div>
          <Link
            href="/auth/forgot-password/verify-otp"
            className="flex items-center gap-x-2"
          >
            <button className="text-[12px] font-normal text-[#000000] flex items-center gap-x-[8px]">
              <Image src={left} alt="arrow right" className="w-[10.67px]" />{" "}
              <span className="text-[12px] font-normal text-[#000000] leading-[100%]">
                {" "}
                Go back
              </span>
            </button>
          </Link>
        </div>

        <div className="mt-[148px] lg:max-w-[803px] mx-auto">
          <div className="grid place-items-center mb-[24px]">
            <Image
              src={padlock}
              alt="padlock svg"
              className="w-[124px] h-[124px] lg:w-[166.18px] lg:h-[150.02px]"
            />
          </div>

          <div>
            <h2 className="text-[16px] leading-[100%] font-bold text-[#000000] text-center pb-3 lg:text-[20px] font-montserrat">
              ENTER NEW PASSWORD
            </h2>
            <h4 className="text-[12px] pb-[22px] font-normal leading-[100%] text-[#00000099] text-center">
              Set a new password for your account. Make sure it is <br />{" "}
              something secure and easy to remember{" "}
            </h4>

            <form
              action=""
              className="flex flex-col gap-y-[18px]"
              onSubmit={handleSubmit}
            >
              {/* password */}
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="pb-[4px] text-[14px] font-normal leading-[100%]"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <input
                    type={show.password ? "text" : "password"}
                    name=""
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your password"
                    id="password"
                    className={`placeholder:text-[#00000099] placeholder:text-[12px] placeholder:leading-[100%] w-full relative rounded-[4px] border border-[#E5E5E5] h-10 px-[12px]`}
                  />
                  <button
                    onClick={handleShow("password")}
                    type="button"
                    className="absolute top-[20%] cursor-pointer right-5"
                  >
                    {show.password ? (
                      <Image
                        src={eye}
                        alt="eye svg"
                        className="w-[20px] h-[20px]"
                      />
                    ) : (
                      <Image
                        src={eyeSlash}
                        alt="eyeSlash svg"
                        className="w-[20px] h-[20px]"
                      />
                    )}
                  </button>

                  <p className="error">
                    {errors.password && touched.password
                      ? errors.password
                      : "\u00A0"}
                  </p>
                </div>
              </div>

              {/* confirm password */}
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="confirm-password"
                    className="pb-[4px] text-[14px] font-normal leading-[100%]"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <input
                    type={show.confirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Retype your password"
                    id="confirmPassword"
                    className={`placeholder:text-[#00000099] placeholder:text-[12px] placeholder:leading-[100%] w-full relative rounded-[4px] border border-[#E5E5E5] h-10 px-[12px] `}
                  />
                  <button
                    onClick={handleShow("confirmPassword")}
                    type="button"
                    className="absolute top-[20%] cursor-pointer right-5"
                  >
                    {show.confirmPassword ? (
                      <Image
                        src={eye}
                        alt="eye svg"
                        className="w-[20px] h-[20px]"
                      />
                    ) : (
                      <Image
                        src={eyeSlash}
                        alt="eyeSlash svg"
                        className="w-[20px] h-[20px]"
                      />
                    )}
                  </button>
                  <p className="error">
                    {errors.confirmPassword && touched.confirmPassword
                      ? errors.confirmPassword
                      : "\u00A0"}
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="bg-[#000000] h-10 px-[54px] text-[#ffffff] w-full rounded-[62px]"
              >
                Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPassWord;
