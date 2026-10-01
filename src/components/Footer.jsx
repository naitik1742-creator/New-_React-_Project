import {  useNavigate } from "react-router-dom";

import {
  FooterWrapper,
  FooterContainer,
  Copyright,
  FooterLinks,
  NavButton,
  LoginButton,
  SignUpButton,
} from "../theme/styled";

function Footer({ toggleTheme }) {
const navigate = useNavigate();

  const goToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <FooterWrapper>

      <FooterContainer>

        <Copyright>
          © 2025 WebTech Practice. Built for
          learning and growth.
        </Copyright>

        <FooterLinks>

          <NavButton
            onClick={() =>
              goToSection("about")
            }
          >
            About
          </NavButton>

          <NavButton
            onClick={() =>
              goToSection("services")
            }
          >
            Services
          </NavButton>

          <NavButton onClick={toggleTheme}>
            Theme
          </NavButton>

          <LoginButton
            onClick={() =>
              navigate("/signin")
            }
          >
            Login
          </LoginButton>

          <SignUpButton
            onClick={() =>
              navigate("/SignUp")
            }
          >
            Sign Up
          </SignUpButton>

        </FooterLinks>

      </FooterContainer>

    </FooterWrapper>
  );
}

export default Footer;