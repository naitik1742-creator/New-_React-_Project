import {
  FooterWrapper,
  FooterContainer,
  Copyright,
  FooterLinks,
  NavButton,
  SignUpButton,
} from "../theme/styled";

function Footer({ toggleTheme }) {

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

          <NavButton
            onClick={() =>
              alert("Login page coming soon!")
            }
          >
            Login
          </NavButton>

          <SignUpButton
            onClick={() =>
              alert("Sign Up page coming soon!")
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