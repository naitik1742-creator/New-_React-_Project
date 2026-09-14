import styled from "styled-components";

/* =================================
   APP
================================= */

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
`;

/* =================================
   NAVBAR
================================= */

export const NavbarWrapper = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
`;

export const NavbarContainer = styled.nav`
  max-width: 1120px;
  height: 72px;

  margin: 0 auto;
  padding: 0 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 700px) {
    height: auto;
    padding: 15px 20px;

    flex-direction: column;
    gap: 15px;
  }
`;

export const Logo = styled.div`
  color: white;
  font-size: 17px;
  font-weight: 700;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 9px;

  flex-wrap: wrap;
`;

export const NavButton = styled.button`
  padding: 8px 17px;

  border-radius: 6px;

  border: 1px solid rgba(77, 201, 198, 0.6);

  background: transparent;
  color: white;

  font-size: 12px;

  cursor: pointer;

  transition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const SignUpButton = styled(NavButton)`
  background: ${({ theme }) => theme.colors.secondary};

  border-color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    background: ${({ theme }) =>
      theme.colors.secondaryHover};
  }
`;

/* =================================
   HERO
================================= */

export const Hero = styled.section`
  max-width: 1120px;

  margin: 0 auto;

  padding: 60px 78px 65px;

  display: grid;

  grid-template-columns: 1fr 1fr;

  align-items: center;

  gap: 55px;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;

    padding: 45px 25px;
  }
`;

export const HeroContent = styled.div`
  max-width: 470px;
`;

export const HeroTitle = styled.h1`
  font-size: 25px;

  line-height: 1.15;

  margin-bottom: 18px;

  color: ${({ theme }) => theme.colors.text};
`;

export const HeroDescription = styled.p`
  font-size: 12px;

  line-height: 1.5;

  color: ${({ theme }) => theme.colors.textLight};

  margin-bottom: 24px;
`;

export const HeroButtons = styled.div`
  display: flex;

  align-items: center;

  gap: 10px;

  flex-wrap: wrap;
`;

export const PrimaryButton = styled.button`
  border: none;

  background: ${({ theme }) => theme.colors.secondary};

  color: white;

  border-radius: 6px;

  padding: 10px 17px;

  font-size: 12px;

  cursor: pointer;

  transition: 0.25s;

  &:hover {
    background: ${({ theme }) =>
      theme.colors.secondaryHover};

    transform: translateY(-1px);
  }
`;

export const OutlineButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.border};

  background: transparent;

  color: ${({ theme }) => theme.colors.text};

  border-radius: 6px;

  padding: 10px 17px;

  font-size: 12px;

  cursor: pointer;

  transition: 0.25s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

/* =================================
   SLIDER
================================= */

export const SliderContainer = styled.div`
  position: relative;

  min-height: 235px;

  padding: 45px 65px;

  background: ${({ theme }) => theme.colors.surface};

  border: 2px solid
    ${({ theme }) => theme.colors.sliderBorder};

  border-radius: 18px;

  box-shadow:
    0 3px 7px rgba(0, 0, 0, 0.15);

  display: flex;

  flex-direction: column;

  justify-content: center;

  text-align: center;

  @media (max-width: 500px) {
    padding: 40px 45px;
  }
`;

export const SliderTitle = styled.h2`
  font-size: 16px;

  margin-bottom: 14px;
`;

export const SliderDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};

  font-size: 11px;

  line-height: 1.5;
`;

export const SliderArrow = styled.button`
  position: absolute;

  top: 50%;

  transform: translateY(-50%);

  width: 34px;
  height: 34px;

  border: none;

  border-radius: 8px;

  background: ${({ theme }) => theme.colors.secondary};

  color: white;

  font-size: 22px;

  cursor: pointer;

  ${({ left }) =>
    left
      ? `
        left: 8px;
      `
      : `
        right: 8px;
      `}

  &:hover {
    background: ${({ theme }) =>
      theme.colors.secondaryHover};
  }
`;

export const SliderDots = styled.div`
  position: absolute;

  bottom: 12px;

  left: 0;
  right: 0;

  display: flex;

  justify-content: center;

  gap: 9px;
`;

export const SliderDot = styled.button`
  width: ${({ active }) => (active ? "18px" : "18px")};

  height: 9px;

  border: none;

  border-radius: 20px;

  cursor: pointer;

  background: ${({ active, theme }) =>
    active
      ? theme.colors.secondary
      : "#edf0f4"};
`;

/* =================================
   SECTION
================================= */

export const Section = styled.section`
  max-width: 900px;

  margin: 0 auto;

  padding: 55px 25px;

  scroll-margin-top: 30px;
`;

export const SectionTitle = styled.h2`
  text-align: center;

  font-size: 21px;

  margin-bottom: 25px;
`;

export const SectionDescription = styled.p`
  max-width: 700px;

  margin: 0 auto 23px;

  font-size: 11px;

  line-height: 1.5;

  color: ${({ theme }) => theme.colors.textLight};
`;

/* =================================
   ABOUT
================================= */

export const AboutList = styled.div`
  max-width: 650px;

  margin: 0 auto;

  display: flex;

  flex-direction: column;

  gap: 10px;
`;

export const AboutItem = styled.div`
  min-height: 38px;

  padding: 9px 15px;

  border: 2px solid
    ${({ theme }) => theme.colors.border};

  border-radius: 7px;

  background: ${({ theme }) => theme.colors.surface};

  display: flex;

  justify-content: center;

  align-items: center;

  text-align: center;

  color: ${({ theme }) => theme.colors.textLight};

  font-size: 11px;
`;

/* =================================
   SERVICES
================================= */

export const ServicesGrid = styled.div`
  max-width: 800px;

  margin: 0 auto;

  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 12px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.div`
  min-height: 100px;

  padding: 18px;

  background: ${({ theme }) => theme.colors.surface};

  border: 2px solid
    ${({ theme }) => theme.colors.border};

  border-radius: 16px;

  transition: 0.25s;

  &:hover {
    transform: translateY(-4px);

    box-shadow:
      0 7px 18px rgba(0, 0, 0, 0.1);
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 12px;

  margin-bottom: 10px;
`;

export const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};

  font-size: 10px;

  line-height: 1.4;
`;

/* =================================
   FOOTER
================================= */

export const FooterWrapper = styled.footer`
  width: 100%;

  background: ${({ theme }) => theme.colors.primary};

  color: white;

  margin-top: auto;
`;

export const FooterContainer = styled.div`
  max-width: 1120px;

  min-height: 100px;

  margin: auto;

  padding: 22px 30px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 20px;

  @media (max-width: 700px) {
    flex-direction: column;

    text-align: center;
  }
`;

export const Copyright = styled.p`
  font-size: 10px;
`;

export const FooterLinks = styled.div`
  display: flex;

  gap: 9px;

  flex-wrap: wrap;

  justify-content: center;
`;



/* =================================
   AUTH / SIGNUP PAGE
================================= */

export const AuthPage = styled.div`
  min-height: 100vh;

  background: ${({ theme }) =>
    theme.colors.background};

  display: flex;

  align-items: center;

  justify-content: center;

  padding: 50px 20px;
`;

export const AuthCard = styled.div`
  width: 100%;

  max-width: 765px;

  background: ${({ theme }) =>
    theme.colors.surface};

  border-radius: 32px;

  padding: 52px 54px;

  box-shadow:
    0 -5px 12px rgba(77, 201, 198, 0.35),
    0 8px 25px rgba(0, 0, 0, 0.04);

  @media (max-width: 700px) {
    padding: 35px 25px;

    border-radius: 22px;
  }
`;

export const AuthTitle = styled.h1`
  font-size: 38px;

  line-height: 1.2;

  margin-bottom: 12px;

  color: ${({ theme }) =>
    theme.colors.text};

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

export const AuthSubtitle = styled.p`
  font-size: 19px;

  margin-bottom: 38px;

  color: ${({ theme }) =>
    theme.colors.text};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Form = styled.form`
  width: 100%;

  display: flex;

  flex-direction: column;

  gap: 28px;
`;

export const NameRow = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const PasswordRow = styled(NameRow)``;

export const FormGroup = styled.div`
  display: flex;

  flex-direction: column;

  gap: 9px;
`;

export const Label = styled.label`
  font-size: 18px;

  font-weight: 700;

  color: ${({ theme }) =>
    theme.colors.text};
`;

export const Input = styled.input`
  width: 100%;

  height: 70px;

  padding: 0 20px;

  border-radius: 18px;

  border: 2px solid
    ${({ theme }) => theme.colors.border};

  background: ${({ theme }) =>
    theme.colors.background};

  color: ${({ theme }) =>
    theme.colors.text};

  font-size: 17px;

  outline: none;

  transition: 0.25s;

  &::placeholder {
    color: ${({ theme }) =>
      theme.colors.textLight};
  }

  &:focus {
    border-color: ${({ theme }) =>
      theme.colors.secondary};

    box-shadow:
      0 0 0 3px rgba(77, 201, 198, 0.12);
  }
`;

export const HelperText = styled.p`
  font-size: 17px;

  line-height: 1.25;

  color: ${({ theme }) =>
    theme.colors.text};

  margin-top: 4px;
`;

export const TermsRow = styled.label`
  display: flex;

  align-items: center;

  gap: 10px;

  font-size: 17px;

  color: ${({ theme }) =>
    theme.colors.text};

  cursor: pointer;
`;

export const Checkbox = styled.input`
  width: 18px;

  height: 18px;

  accent-color: ${({ theme }) =>
    theme.colors.secondary};

  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 100%;

  height: 70px;

  border: none;

  border-radius: 18px;

  background: ${({ theme }) =>
    theme.colors.secondary};

  color: white;

  font-size: 20px;

  font-weight: 700;

  cursor: pointer;

  transition: 0.25s;

  &:hover {
    background: ${({ theme }) =>
      theme.colors.secondaryHover};

    transform: translateY(-1px);
  }
`;

export const BottomText = styled.p`
  margin-top: 30px;

  font-size: 17px;

  color: ${({ theme }) =>
    theme.colors.text};
`;

export const AuthLink = styled.a`
  color: ${({ theme }) =>
    theme.colors.secondary};

  cursor: pointer;

  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorText = styled.p`
  color: #d93025;

  font-size: 14px;

  margin-top: -15px;
`;

export const SuccessText = styled.p`
  color: #159447;

  font-size: 14px;

  margin-top: -15px;
`;