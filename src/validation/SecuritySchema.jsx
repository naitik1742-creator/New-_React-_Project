import * as Yup from "yup";

import { validationRules } from "../validation/Common/validationRules";
import { validationMessages } from "../validation/Common/validationMessage";

const SecuritySchema = Yup.object({
  currentPassword: Yup.string()
    .required(validationMessages.currentPasswordRequired),

  newPassword: Yup.string()
    .matches(
      validationRules.password,
      validationMessages.invalidPassword
    )
    .required(validationMessages.newPasswordRequired)
    .test(
      "different-password",
      "New password must be different from the current password.",
      function (value) {
        if (!value || !this.parent.currentPassword) {
          return true;
        }

        return value !== this.parent.currentPassword;
      }
    ),

  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("newPassword")],
      validationMessages.passwordMismatch
    )
    .required(validationMessages.confirmPasswordRequired),
});

export default SecuritySchema;