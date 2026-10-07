import * as Yup from "yup";

const nameRegex = /^[a-zA-Z\s-]+$/;

const SignupSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .required("First name is required.")
    .test(
      "valid-first-name",
      "Name must be at least 2 letters long.",
      function (value) {
        if (!value) return true;

    
        if (!nameRegex.test(value)) {
          return this.createError({
            message: "Name should be in  letter only.",
          });
        }

        if (value.length < 2) {
          return this.createError({
            message: "Name must be at least 2 letters long.",
          });
        }

        return true;
      }
    ),

  lastName: Yup.string()
    .trim()
    .required("Last name is required.")
    .test(
      "valid-last-name",
      "Name must be at least 2 letters long.",
      function (value) {
        if (!value) return true;

        if (!nameRegex.test(value)) {
          return this.createError({
            message: "Name should be in  letter only..",
          });
        }

        if (value.length < 2) {
          return this.createError({
            message: "Name must be at least 2 letters long.",
          });
        }

        return true;
      }
    ),

 email: Yup.string()
  .trim()
  .matches(
    /^[a-zA-Z0-9._%+-]+@[a-z]+\.[a-z]{2,}$/,
    "Please enter a valid email address."
  )
  .required("Email is required."),

  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
      "Password must contain at least 8 characters, including a letter and a number."
    )
    .required("Password is required."),

  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password")],
      "Passwords do not match."
    )
    .required("Please confirm your password."),

  terms: Yup.boolean()
    .oneOf(
      [true],
      "Please agree to the Terms."
    ),
});

export default SignupSchema;