import * as yup from "yup";

// Password rule as Yup test
const passwordValidationTest = function (
  this: yup.TestContext,
  value?: string
) {
  if (!value) return true;

  const missing: string[] = [];

  if (value.length < 5) missing.push("at least 5 characters");
  if (!/[A-Z]/.test(value)) missing.push("an uppercase letter");
  if (!/[a-z]/.test(value)) missing.push("a lowercase letter");
  if (!/\d/.test(value)) missing.push("a number");

  return (
    missing.length === 0 ||
    this.createError({
      message: `Password must include: ${missing.join(", ")}`,
    })
  );
};

// ✅ Forgot password schema
export const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email("Enter a valid email address")
    .required("Email is required"),
});

// ✅ Login schema
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email address is required"),
  password: yup
    .string()
    .required("Password is required")
    .test("password-strength", passwordValidationTest),
});

// ✅ New password schema
export const newPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .test("password-strength", passwordValidationTest),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

// ✅ Signup schema
export const signupSchema = yup.object().shape({
  fullname: yup
    .string()
    .min(2, "Fullname must be at least 2 characters")
    .max(50, "Fullname cannot be more than 50 characters")
    .required("Fullname is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email address is required"),
  password: yup
    .string()
    .required("Password is required")
    .test("password-strength", passwordValidationTest),
  confirmPassword: yup
    .string()
    .nullable()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

// ✅ OTP schema
export const otpSchema = yup.object().shape({
  otp1: yup.string().matches(/^\d$/, "Must be a digit").required("Required"),
  otp2: yup.string().matches(/^\d$/, "Must be a digit").required("Required"),
  otp3: yup.string().matches(/^\d$/, "Must be a digit").required("Required"),
  otp4: yup.string().matches(/^\d$/, "Must be a digit").required("Required"),
});
