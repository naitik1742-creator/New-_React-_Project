import * as Yup from "yup";

const validationRules = {
  email:
     /^[a-zA-Z0-9._%+-]+@[a-z]+\.[a-z]{2,}$/,

  password:
    /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
};

const SigninSchema = Yup.object({
  email: Yup.string()
    .trim()
    .matches(
      validationRules.email,
      "Please enter a valid email address"
    )
    .required("Email is required"),

  password: Yup.string()
    .matches(
      validationRules.password,
      "Password must contain at least 8 characters, including a letter and a number"
    )
    .required("Password is required"),
});

export default SigninSchema;