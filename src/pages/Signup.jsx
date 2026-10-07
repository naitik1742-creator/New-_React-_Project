import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import {
  AuthPage,
  AuthCard,
  AuthTitle,
  AuthSubtitle,
  Form,
  NameRow,
  FormGroup,
  Label,
  Input,
  PasswordRow,
  HelperText,
  TermsRow,
  Checkbox,
  SubmitButton,
  BottomText,
  AuthLink,
  ErrorText,
  SuccessText,
} from "../theme/styled";

import SignupSchema from "../validation/SignupSchema";

function Signup() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },

    validationSchema: SignupSchema,

    onSubmit: (values, { setFieldError }) => {
      const users =
        JSON.parse(
          localStorage.getItem("registeredUsers")
        ) || [];

      // Check duplicate email
      const emailExists = users.some(
        (user) =>
          user.email.toLowerCase() ===
          values.email.trim().toLowerCase()
      );

      if (emailExists) {
        setFieldError(
          "email",
          "Email is already registered. Try another email."
        );
        return;
      }

      // User data
      const user = {
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        email: values.email.trim(),
        password: values.password,
      };

      // Save user
      localStorage.setItem(
        "registeredUsers",
        JSON.stringify([
          ...users,
          user,
        ])
      );

      // Optional current user
      localStorage.setItem(
        "webtechUser",
        JSON.stringify(user)
      );

      alert("Account created successfully!");

      navigate("/signin");
    },
  });

  return (
    <AuthPage>
      <AuthCard>

        <AuthTitle>
          Create your account
        </AuthTitle>

        <AuthSubtitle>
          Sign up to access the practice dashboard.
        </AuthSubtitle>

        <Form onSubmit={formik.handleSubmit}>

          {/* FIRST + LAST NAME */}

          <NameRow>

            <FormGroup>
              <Label htmlFor="firstName">
                First name:
              </Label>

              <Input
                id="firstName"
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.firstName &&
                formik.errors.firstName && (
                  <ErrorText>
                    {formik.errors.firstName}
                  </ErrorText>
                )}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="lastName">
                Last Name:
              </Label>

              <Input
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.lastName &&
                formik.errors.lastName && (
                  <ErrorText>
                    {formik.errors.lastName}
                  </ErrorText>
                )}
            </FormGroup>

          </NameRow>

          {/* EMAIL */}

          <FormGroup>
            <Label htmlFor="email">
              Email Address:
            </Label>

            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.email &&
              formik.errors.email && (
                <ErrorText>
                  {formik.errors.email}
                </ErrorText>
              )}
          </FormGroup>

          {/* PASSWORD */}

          <PasswordRow>

            <FormGroup>
              <Label htmlFor="password">
                Password:
              </Label>

              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <HelperText>
                Use at least 8 characters, with
                <br />
                letter & number
              </HelperText>

              {formik.touched.password &&
                formik.errors.password && (
                  <ErrorText>
                    {formik.errors.password}
                  </ErrorText>
                )}
            </FormGroup>

            {/* CONFIRM PASSWORD */}

            <FormGroup>
              <Label htmlFor="confirmPassword">
                Confirm Password:
              </Label>

              <Input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <ErrorText>
                    {formik.errors.confirmPassword}
                  </ErrorText>
                )}
            </FormGroup>

          </PasswordRow>

          {/* TERMS */}

          <TermsRow>

            <Checkbox
              id="terms"
              type="checkbox"
              name="terms"
              checked={formik.values.terms}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <span>
              I agree to the Terms
            </span>

          </TermsRow>

          {formik.touched.terms &&
            formik.errors.terms && (
              <ErrorText>
                {formik.errors.terms}
              </ErrorText>
            )}

          {/* SUCCESS */}

          {formik.status && (
            <SuccessText>
              {formik.status}
            </SuccessText>
          )}

          {/* SUBMIT */}

          <SubmitButton
            type="submit"
            disabled={formik.isSubmitting}
          >
            Create Account
          </SubmitButton>

        </Form>

        {/* SIGN IN */}

        <BottomText>
          Already have account?{" "}

          <AuthLink as={Link} to="/signin">
            Sign in
          </AuthLink>
        </BottomText>

      </AuthCard>
    </AuthPage>
  );
}

export default Signup;