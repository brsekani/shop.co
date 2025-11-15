export interface ForgotPasswordValues {
  email: string;
}

export interface OtpValues {
  otp1: string;
  otp2: string;
  otp3: string;
  otp4: string;
}

export interface NewPasswordValues {
  password: string;
  confirmPassword: string;
  email: string;
  code: string;
}
