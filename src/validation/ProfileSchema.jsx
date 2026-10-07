import * as Yup from "yup";

const ProfileSchema = Yup.object({
  name: Yup.string()
    .trim()
    .matches(
      /^[a-zA-Z\s-]{2,}$/,
      "Name must be at least 2 letters long."
    )
    .required("Full name is required."),

  dob: Yup.date()
    .typeError("Please enter a valid date.")
    .required("Date of birth is required."),

  email: Yup.string()
    .trim()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-z]+\.[a-z]{2,}$/,
      "Please enter a valid email address."
    )
    .required("Email is required."),

  phone: Yup.string()
    .matches(
      /^\+?[0-9\s-]{10,15}$/,
      "Please enter a valid phone number."
    )
    .required("Phone number is required."),

  address: Yup.string()
    .trim()
    .min(
      5,
      "Address must be at least 5 characters."
    )
    .required("Address is required."),

  pin: Yup.string()
    .matches(
      /^[0-9]{6}$/,
      "PIN code must contain exactly 6 digits."
    )
    .required("PIN code is required."),

  city: Yup.string()
    .trim()
    .matches(
      /^[a-zA-Z\s-]{2,}$/,
      "Please enter a valid city."
    )
    .required("City is required."),

  country: Yup.string()
    .trim()
    .matches(
      /^[a-zA-Z\s-]{2,}$/,
      "Please enter a valid country."
    )
    .required("Country is required."),

  github: Yup.string()
    .trim()
    .url("Please enter a valid GitHub URL.")
    .required("GitHub profile is required."),
});

export default ProfileSchema;