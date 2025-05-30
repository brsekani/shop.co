import * as yup from "yup";

export const otpSchema = yup.object().shape({
  otp1 : yup.string().matches(/^\d$/, 'Must be a digit').required('Required'),
  otp2 : yup.string().matches(/^\d$/, 'Must be a digit').required('Required'),
  otp3 : yup.string().matches(/^\d$/, 'Must be a digit').required('Required'),
  otp4 : yup.string().matches(/^\d$/, 'Must be a digit').required('Required'),
})