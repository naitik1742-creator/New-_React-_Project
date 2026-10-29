import * as Yup from "yup";

import { validationRules } from "../validation/Common/validationRules";
import { validationMessages } from "../validation/Common/validationMessage";

const validateName = (fieldName) =>
  Yup.string()
    .trim()
    .required(
      fieldName === "firstName"
        ? "First name is required."
        : "Last name is required."
    )
    .test(
      "valid-name",
      validationMessages.nameMinLength,
      function (value) {
        if (!value) {
          return true;
        }

        if (/[^a-zA-Z\s-]/.test(value)) {
          return this.createError({
            message: validationMessages.invalidNameCharacters,
          });
        }

        if (value.length < 2) {
          return this.createError({
            message: validationMessages.nameMinLength,
          });
        }

        return true;
      }
    );

const SignupSchema = Yup.object({
  firstName: validateName("firstName"),

  lastName: validateName("lastName"),

  email: Yup.string()
    .trim()
    .matches(
      validationRules.email,
      validationMessages.invalidEmail
    )
    .required(validationMessages.emailRequired),

  password: Yup.string()
    .matches(
      validationRules.password,
      validationMessages.invalidPassword
    )
    .required(validationMessages.passwordRequired),

  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password")],
      validationMessages.passwordMismatch
    )
    .required(validationMessages.confirmPasswordRequired),

  terms: Yup.boolean()
    .oneOf(
      [true],
      validationMessages.termsRequired
    )
    .required(validationMessages.termsRequired),
});

export default SignupSchema;