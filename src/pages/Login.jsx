import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  HelperText,
  ForgotPassword,
  LoginButton,
  BottomText,
  AuthLink,
  ErrorText,
  SuccessText,
} from "../theme/styled";


function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");


  const handleSubmit = (e) => {

    e.preventDefault();

    setError("");
    setSuccess("");


    if (!email || !password) {

      setError(
        "Please enter your email and password."
      );

      return;
    }


    const usersList =
      JSON.parse(
        localStorage.getItem("registeredUsers")
      ) || [];


    const user = usersList.find(
      (item) =>
        item.email.toLowerCase() ===
          email.trim().toLowerCase() &&
        item.password === password
    );


    if (!user) {

      setError(
        "Invalid email or password."
      );

      return;
    }


    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(user)
    );


    setSuccess(
      "Login successful!"
    );


    setTimeout(() => {
      navigate("/");
    }, 800);
  };


  return (

    <AuthPage>

      <AuthCard>

        <AuthTitle
          style={{
            textAlign: "center",
          }}
        >
          Welcome Back
        </AuthTitle>


        <AuthSubtitle
          style={{
            textAlign: "center",
          }}
        >
          Sign in to continue to your dashboard
        </AuthSubtitle>


        <Form onSubmit={handleSubmit}>

          {/* EMAIL */}

          <FormGroup>

            <Label htmlFor="email">
              Email Address:
            </Label>

            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
            />

          </FormGroup>


          {/* PASSWORD */}

          <FormGroup>

            <Label htmlFor="password">
              Password:
            </Label>

            <PasswordWrapper>

              <PasswordInput
                id="password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
              />

              <TogglePassword
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
              >
                {showPassword
                  ? "Hide"
                  : "Show"}
              </TogglePassword>

            </PasswordWrapper>

            <HelperText>
              Password must be at least 8 characters
              with a letter and number.
            </HelperText>

          </FormGroup>


          {/* FORGOT PASSWORD */}

          <ForgotPassword>

            <AuthLink
              onClick={() =>
                alert(
                  "Password reset feature can be added here."
                )
              }
            >
              Forgot password?
            </AuthLink>

          </ForgotPassword>


          {/* ERROR */}

          {error && (
            <ErrorText>
              {error}
            </ErrorText>
          )}


          {/* SUCCESS */}

          {success && (
            <SuccessText>
              {success}
            </SuccessText>
          )}


          {/* LOGIN */}

          <LoginButton type="submit">
            Sign in
          </LoginButton>


        </Form>


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

export default Login;