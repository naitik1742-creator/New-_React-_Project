import { Link } from "react-router-dom";
import {  useNavigate } from "react-router-dom";

import {
  NavbarWrapper,
  NavbarContainer,
  Logo,
  NavLinks,
  NavButton,
  SignUpButton,
  LoginButton,
} from "../theme/styled";


function Navbar({ toggleTheme, darkMode }) {
  const navigate = useNavigate();
  
    const goToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <NavbarWrapper>
      <NavbarContainer>

        <Link to="/">
          <Logo>WebTech Practice</Logo>
        </Link>

        <NavLinks>

          <NavButton
            onClick={() => goToSection("about")}
          >
            About
          </NavButton>

          <NavButton
            onClick={() => goToSection("services")}
          >
            Services
          </NavButton>

          <NavButton onClick={toggleTheme}>
            {darkMode ? "Light" : "Theme"}
          </NavButton>

         <LoginButton
  onClick={() => navigate("/signin")}
>
  Login
</LoginButton>

<SignUpButton
  onClick={() => navigate("/signup")}
>
  Sign Up
</SignUpButton>

        </NavLinks>
        

      </NavbarContainer>
    </NavbarWrapper>
  );
}

export default Navbar;