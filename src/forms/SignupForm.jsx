import { useFormik } from "formik";
import { SignupSchema } from "../validation/SignupSchema";

function SignupForm({ onSubmit }) {
  return useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsCheckbox: false,
    },

    validationSchema: SignupSchema,

    onSubmit: (values) => {
      onSubmit(values);
    },
  });
}

export default SignupForm;