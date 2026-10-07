import * as Yup from "yup";

const SecuritySchema = Yup.object({
  currentPassword: Yup.string()
    .required("Current password is required."),

  newPassword: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
      "Password must be at least 8 characters and contain a letter and number."
    )
    .required("New password is required."),

  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("newPassword")],
      "New password and confirm password do not match."
    )
    .required("Please confirm your new password."),
});

export default SecuritySchema;