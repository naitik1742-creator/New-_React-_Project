import * as Yup from "yup";

import { validationRules } from "../validation/Common/validationRules";
import { validationMessages } from "../validation/Common/validationMessage";

const ProfileSchema = Yup.object({
  name: Yup.string()
    .trim()
    .matches(
      validationRules.name,
      validationMessages.nameMinLength
    )
    .required(validationMessages.nameRequired),

  dob: Yup.date()
    .typeError(validationMessages.invalidDate)
    .max(new Date(), "Date of birth cannot be in the future.")
    .required(validationMessages.dobRequired),

  email: Yup.string()
    .trim()
    .matches(
      validationRules.email,
      validationMessages.invalidEmail
    )
    .required(validationMessages.emailRequired),

  phone: Yup.string()
    .trim()
    .matches(
      validationRules.phone,
      validationMessages.invalidPhone
    )
    .required(validationMessages.phoneRequired),

  address: Yup.string()
    .trim()
    .min(5, validationMessages.invalidAddress)
    .required(validationMessages.addressRequired),

  pin: Yup.string()
    .matches(
      validationRules.pin,
      validationMessages.invalidPin
    )
    .required(validationMessages.pinRequired),

  city: Yup.string()
    .trim()
    .matches(
      validationRules.city,
      validationMessages.invalidCity
    )
    .required(validationMessages.cityRequired),

  country: Yup.string()
    .trim()
    .matches(
      validationRules.country,
      validationMessages.invalidCountry
    )
    .required(validationMessages.countryRequired),

  github: Yup.string()
    .trim()
    .url(validationMessages.invalidGithub)
    .required(validationMessages.githubRequired),
});

export default ProfileSchema;