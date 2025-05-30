import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const signupSchema = yup.object().shape({
    fullname : yup.string().min(2, 'Fullname must be at least 2 characters').max(50, 'Fullname cannot be more than 50 characters').required("Required"),
    email : yup.string().email('Please enter a valid email').required("Required"),
    password : yup.string().min(5).matches(passwordRules, {message : "Please create a stronger password"}).required('Required'),
    confirmPassword : yup.string().nullable().oneOf([yup.ref('password')], 'Passwords must match').required('confirm password is required'),
})