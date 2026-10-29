import * as Yup from "yup";

import { validationRules } from "../validation/Common/validationRules";
import { validationMessages } from "../validation/Common/validationMessage";;

const SigninSchema = Yup.object({
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
});

export default SigninSchema;