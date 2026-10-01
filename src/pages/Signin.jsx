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
  ForgotPassword,
  SubmitButton,
  BottomText,
  AuthLink,
} from "../theme/styled";

function Signin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
 
    navigate("/overview");
    
    const users =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    
    const user = users.find(
      (item) =>
        item.email.toLowerCase() === email.trim().toLowerCase() &&
        item.password === password
    );

    // if (user) {
      
    //   localStorage.setItem(
    //     "loggedInUser",
    //     JSON.stringify(user)
    //   );

      
    //   navigate("/");
    // } else {
    //   alert("");
    // }
  };

  return (
    <AuthPage>
      <AuthCard>

        <AuthTitle>
          Welcome Back
        </AuthTitle>

        <AuthSubtitle>
          Sign in to continue to your dashboard
        </AuthSubtitle>

        <Form onSubmit={handleSubmit}>

          
          <FormGroup>
            <Label htmlFor="email">
              Email Address:
            </Label>

            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>

          
          <FormGroup>
            <Label htmlFor="password">
              Password:
            </Label>

            <PasswordWrapper>

              <PasswordInput
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

              <TogglePassword
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? "Hide" : "Show"}
              </TogglePassword>

            </PasswordWrapper>
          </FormGroup>

        
          <ForgotPassword
            type="button"
            onClick={() =>
              alert("")
            }
          >
            Forgot password?
          </ForgotPassword>

          
          <SubmitButton type="submit">
            Sign in
          </SubmitButton>

        </Form>

        
        <BottomText>
          New to WebTech Practice?{" "}

          <AuthLink
            onClick={() => navigate("/signup")}
          >
            Create an account
          </AuthLink>
        </BottomText>

      </AuthCard>
    </AuthPage>
  );
}

export default Signin;