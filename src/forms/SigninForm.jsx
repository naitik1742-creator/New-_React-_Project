import { useFormik } from "formik";
import SigninSchema from "../validation/SigninSchema";

function SigninForm({ onSubmit }) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: SigninSchema,

    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return formik;
}

export default SigninForm;