import * as Yup from "yup";

export const signUpSchema = Yup.object({
  firstName: Yup.string().min(3).max(20).required(""),
  lastName: Yup.string().min(3).max(20).required(""),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(8).required("Please enter your password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});