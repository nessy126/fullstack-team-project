import * as Yup from "yup";

const SignUpSchema = Yup.object({
  name: Yup.string()
    .min(2, "Minimum 2 characters!")
    .max(20, "Maximum 20 characters!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string()
    .min(6, "Minimum 6 symbols!")
    .required("Password required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("Confirmation password required"),
});

const LoginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string()
    .min(6, "Minimum 6 symbols!")
    .required("Password required"),
});

export { SignUpSchema, LoginSchema };
