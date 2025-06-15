import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const forgotPasswordSchema = yup.object().shape({
    email : yup.string().email('Please enter a valid email').required("Required"),
})

export const loginSchema = yup.object().shape({
    email : yup.string().email('Please enter a valid email').required("Email address is required"),
    password : yup.string().min(5).matches(passwordRules, {message : "Please create a stronger password"}).required('Password is required'),
})

export const newPasswordSchema = yup.object().shape({
    password : yup.string().min(5).matches(passwordRules, {message : "Please create a stronger password"}).required('Password is required'),
    confirmPassword : yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('Confirm password is required'),
})

export const signupSchema = yup.object().shape({
    fullname : yup.string().min(2, 'Fullname must be at least 2 characters').max(50, 'Fullname cannot be more than 50 characters').required("Fullname is required"),
    email : yup.string().email('Please enter a valid email').required("Email address is required"),
    password : yup.string().min(5).matches(passwordRules, {message : "Please create a stronger password"}).required('Password is required'),
    confirmPassword : yup.string().nullable().oneOf([yup.ref('password')], 'Passwords must match').required('confirm password is required'),
})

export const otpSchema = yup.object().shape({
  otp1 : yup.string().matches(/^\d$/, 'Must be a digit').required('Required'),
  otp2 : yup.string().matches(/^\d$/, 'Must be a digit').required('Required'),
  otp3 : yup.string().matches(/^\d$/, 'Must be a digit').required('Required'),
  otp4 : yup.string().matches(/^\d$/, 'Must be a digit').required('Required'),
})