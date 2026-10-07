import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import SigninForm from "../forms/SigninForm";

import {
  AuthPage,
  AuthCard,
  AuthTitle,
  AuthSubtitle,
  Form,
  FormGroup,
  Label,
  Input,
  PasswordWrapper,
  PasswordInput,
  TogglePassword,
  ForgotPassword,
  SubmitButton,
  BottomText,
  AuthLink,
  ErrorText,
  HelperText,
} from "../theme/styled";

function Signin() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (values) => {
    const users =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    const user = users.find(
      (item) =>
        item.email.toLowerCase() ===
          values.email.trim().toLowerCase() &&
        item.password === values.password
    );

    if (!user) {
      alert("Invalid email or password !");
      return;
    }

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(user)
    );

    navigate("/overview");
  };

  const formik = SigninForm({
    onSubmit: handleLogin,
  });

  return (
    <AuthPage>
      <AuthCard>

        <AuthTitle>
          Welcome Back
        </AuthTitle>

        <AuthSubtitle>
          Sign in to continue to your dashboard
        </AuthSubtitle>

        <Form onSubmit={formik.handleSubmit}>

          {/* EMAIL */}
          <FormGroup>

            <Label htmlFor="email">
              Email Address:
            </Label>

            <Input
              id="email"
              name="email"
              type="email"
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
          <FormGroup>

            <Label htmlFor="password">
              Password:
            </Label>

            <PasswordWrapper>

              <PasswordInput
                id="password"
                name="password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <TogglePassword
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
              >
                {showPassword ? "Hide" : "Show"}
              </TogglePassword>

            </PasswordWrapper>

            {formik.touched.password &&
              formik.errors.password && (
                <ErrorText>
                  {formik.errors.password}
                </ErrorText>
              )}

          </FormGroup>

          <HelperText>
    Password must be at least 6 characters long.
  </HelperText>

          {/* FORGOT PASSWORD */}
          <ForgotPassword
            type="button"
            onClick={() =>
              alert(
                ""
              )
            }
          >
            Forgot password?
          </ForgotPassword>


          {/* SIGN IN */}
          <SubmitButton type="submit">
            Sign in
          </SubmitButton>

        </Form>

        {/* REGISTER */}
        <BottomText>
          New to WebTech Practice?{" "}

          <AuthLink
            onClick={() =>
              navigate("/signup")
            }
          >
            Create an account
          </AuthLink>
        </BottomText>

      </AuthCard>
    </AuthPage>
  );
}

export default Signin;