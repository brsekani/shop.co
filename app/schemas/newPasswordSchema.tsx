import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const newPasswordSchema = yup.object().shape({
    password : yup.string().min(5).matches(passwordRules, {message : "Please create a stronger password"}).required('Required'),
    confirmPassword : yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('Confirm password is required'),
})