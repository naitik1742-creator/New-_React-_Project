import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      terms,
    } = formData;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setError(
        "Password must contain at least 8 characters."
      );
      return;
    }

    if (!/[A-Za-z]/.test(password)) {
      setError(
        "Password must contain at least one letter."
      );
      return;
    }

    if (!/[0-9]/.test(password)) {
      setError(
        "Password must contain at least one number."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!terms) {
      setError("Please agree to the Terms.");
      return;
    }

    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    localStorage.setItem(
      "webtechUser",
      JSON.stringify(user)
    );

    setSuccess("Account created successfully!");

    setTimeout(() => {
      navigate("/");
    }, 1200);
  };

  return (
    <AuthPage>
      <AuthCard>

        <AuthTitle>
          Create your account
        </AuthTitle>

        <AuthSubtitle>
          Sign up to access the practice dashboard.
        </AuthSubtitle>

        <Form onSubmit={handleSubmit}>

          

          <NameRow>

            <FormGroup>
              <Label>First name:</Label>

              <Input
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Last Name:</Label>

              <Input
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </FormGroup>

          </NameRow>


          

          <FormGroup>
            <Label>Email Address:</Label>

            <Input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>


          

          <PasswordRow>

            <FormGroup>
              <Label>Password:</Label>

              <Input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
              />

              <HelperText>
                Use at least 8 characters, with
                <br />
                letter & number
              </HelperText>
            </FormGroup>

            <FormGroup>
              <Label>Confirm Password:</Label>

              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </FormGroup>

          </PasswordRow>


          

          <TermsRow>

            <Checkbox
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />

            <span>
              I agree to the Terms
            </span>

          </TermsRow>


        

          {error && (
            <ErrorText>
              {error}
            </ErrorText>
          )}

          

          {success && (
            <SuccessText>
              {success}
            </SuccessText>
          )}


          

          <SubmitButton type="submit">
            Create Account
          </SubmitButton>

        </Form>


        

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