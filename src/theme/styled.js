import styled from "styled-components";

/* 
   APP
*/

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
`;


  //  NAVBAR


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
  gap: 9px;
  flex-wrap: nowrap;
`;

export const NavButton = styled.button`
  width: auto;
  height: 32px;
  padding: 0 17px;

  border: 1px solid #3e80a6;
  border-radius: 7px;

  background: transparent;
  color: white;

  font-size: 12px;
  cursor: pointer;
  white-space: nowrap;
`;

export const NavSignup = styled(NavButton)`
  background: #50c9c3;
  border-color: #50c9c3;
`;

export const SignUpButton = styled(NavButton)`
  background: ${({ theme }) => theme.colors.secondary};

  border-color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    background: ${({ theme }) =>
      theme.colors.secondaryHover};
  }
`;

/* 
   HERO
*/

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

/* 
   SLIDER
 */

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

/* 
   SECTION
 */

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

/* 
   ABOUT
 */

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

/* 
   SERVICES
 */

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

/* 
   FOOTER
 */

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



/* 
   AUTH / SIGNUP PAGE
 */





export const AuthPage = styled.div`
  min-height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.background};

  padding: 24px 20px;
  box-sizing: border-box;
`;

/* Main white card */
export const AuthCard = styled.div`
  width: 100%;
  max-width: 680px;

  background: ${({ theme }) => theme.colors.surface};

  border-radius: 26px;

  padding: 34px 42px;

  box-sizing: border-box;

  box-shadow:
    0 -4px 12px rgba(77, 201, 198, 0.30),
    0 8px 24px rgba(0, 0, 0, 0.04);

  @media (max-width: 700px) {
    max-width: 600px;
    padding: 30px 30px;
    border-radius: 24px;
  }

  @media (max-width: 500px) {
    padding: 26px 20px;
    border-radius: 20px;
  }
`;

/* 
   TITLE
 */

export const AuthTitle = styled.h1`
  margin: 0 0 8px;

  font-size: 32px;
  line-height: 1.2;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

export const AuthSubtitle = styled.p`
  margin: 0 0 26px;

  font-size: 16px;
  line-height: 1.5;

  color: ${({ theme }) => theme.colors.text};
`;

/* 
   FORM
 */

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 19px;
`;

/* First Name + Last Name */
export const NameRow = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 18px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 17px;
  }
`;

/* Password + Confirm Password */
export const PasswordRow = styled(NameRow)``;

/* 
   FORM GROUP
 */

export const FormGroup = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 7px;
`;

/* 
   LABEL
 */

export const Label = styled.label`
  font-size: 16px;
  line-height: 1.2;

  font-weight: 700;

  color: ${({ theme }) => theme.colors.text};
`;

/* 
   INPUT
 */

export const Input = styled.input`
  width: 100%;
  height: 52px;

  padding: 0 16px;

  box-sizing: border-box;

  border-radius: 14px;

  border: 2px solid
    ${({ theme }) => theme.colors.border};

  background: ${({ theme }) =>
    theme.colors.background};

  color: ${({ theme }) =>
    theme.colors.text};

  font-size: 15px;

  outline: none;

  transition: 0.2s ease;

  &::placeholder {
    color: ${({ theme }) =>
      theme.colors.textLight};
  }

  &:focus {
    border-color: ${({ theme }) =>
      theme.colors.secondary};

    box-shadow:
      0 0 0 3px
      rgba(77, 201, 198, 0.12);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

/* 
   PASSWORD INPUT
 */

export const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const PasswordInput = styled(Input)`
  padding-right: 70px;
`;

export const TogglePassword = styled.button`
  position: absolute;

  right: 12px;
  top: 50%;

  transform: translateY(-50%);

  border: none;
  background: transparent;

  color: ${({ theme }) =>
    theme.colors.secondary};

  font-size: 13px;
  font-weight: 600;

  cursor: pointer;

  padding: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

export const TogglePasswordButton = styled(TogglePassword)``;

/* 
   HELPER TEXT
 */

export const HelperText = styled.p`
  margin: 2px 0 0;

  font-size: 14px;
  line-height: 1.3;

  color: ${({ theme }) => theme.colors.text};
`;

/* 
   TERMS
 */

export const TermsRow = styled.label`
  display: flex;
  align-items: center;

  gap: 8px;

  margin-top: 1px;

  font-size: 14px;

  color: ${({ theme }) =>
    theme.colors.text};

  cursor: pointer;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;

  margin: 0;

  accent-color: ${({ theme }) =>
    theme.colors.secondary};

  cursor: pointer;
`;

/* 
   SUBMIT BUTTON
 */

export const SubmitButton = styled.button`
  width: 100%;
  height: 54px;

  margin-top: 2px;

  border: none;
  border-radius: 14px;

  background: ${({ theme }) =>
    theme.colors.secondary};

  color: #ffffff;

  font-size: 17px;
  font-weight: 700;

  cursor: pointer;

  transition: 0.2s ease;

  &:hover:not(:disabled) {
    background: ${({ theme }) =>
      theme.colors.secondaryHover};

    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;





export const SigninButton = styled(SubmitButton)``;

/* 
   FORGOT PASSWORD
*/

export const ForgotPassword = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;

  margin-top: -3px;
`;

export const ForgotPasswordLink = styled.button`
  border: none;
  background: transparent;

  color: ${({ theme }) =>
    theme.colors.secondary};

  font-size: 14px;

  cursor: pointer;

  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`;

/* 
   BOTTOM TEXT
 */

export const BottomText = styled.p`
  margin: 20px 0 0;

  font-size: 14px;
  line-height: 1.4;

  color: ${({ theme }) =>
    theme.colors.text};
`;

export const AuthLink = styled.button`
  border: none;
  background: transparent;

  padding: 0;

  color: ${({ theme }) =>
    theme.colors.secondary};

  font-size: inherit;

  cursor: pointer;

  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

/* 
   VALIDATION ERRORS
 */

export const ErrorText = styled.p`
  margin: 1px 0 0;

  color: #d93025;

  font-size: 12px;
  line-height: 1.25;
`;

export const SuccessText = styled.p`
  margin: 1px 0 0;

  color: #159447;

  font-size: 12px;
  line-height: 1.25;
`;


/* DASHBOARD TOPBAR */

export const TopBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 64px;

  background: #0d2b6b;
  color: white;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 28px;

  z-index: 1000;

  box-sizing: border-box;
`;

export const TopBarTitle = styled.h3`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
`;

export const TopBarButton = styled.button`
  background: transparent;

  border: 1px solid #4dc9c6;
  color: white;

  padding: 8px 18px;

  border-radius: 7px;

  font-size: 12px;

  cursor: pointer;

  &:hover {
    background: #4dc9c6;
  }
`;

/*  DASHBOARD  */

export const DashboardWrapper = styled.div`
  padding-top: 64px;
  min-height: 100vh;

  background: #f4f6f8;
`;

/*  SIDEBAR */

export const Sidebar = styled.aside`
  position: fixed;

  top: 64px;
  left: 0;
  bottom: 0;

  width: 230px;

  background: #ffffff;

  border-right: 1px solid #dce5e8;

  padding: 20px 15px;

  box-sizing: border-box;

  overflow-y: auto;

  z-index: 900;
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;

  padding-bottom: 20px;

  border-bottom: 1px solid #e5eaea;
`;

export const Avatar = styled.div`
  width: 38px;
  height: 38px;

  border-radius: 50%;

  background: #173875;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  font-weight: 700;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;

  gap: 3px;

  strong {
    font-size: 12px;
  }

  span {
    font-size: 9px;
    color: #777;
  }
`;

export const SidebarSection = styled.div`
  margin-top: 25px;
`;

export const SidebarTitle = styled.div`
  font-size: 9px;

  font-weight: 700;

  color: #555;

  margin-bottom: 8px;
`;

export const SidebarLink = styled.button`
  width: 100%;

  border: none;

  background: ${({ active }) =>
    active ? "#eef8f8" : "transparent"};

  color: #333;

  text-align: left;

  padding: 9px 12px;

  border-radius: 7px;

  margin-bottom: 3px;

  font-size: 11px;

  cursor: pointer;

  &:hover {
    background: #eef8f8;
  }
`;

/*  CONTENT  */

export const DashboardContent = styled.main`
  margin-left: 230px;

  min-height: calc(100vh - 64px);

  padding: 30px;

  box-sizing: border-box;
`;

// Overview

export const OverviewWrapper = styled.div`
  padding: 35px;
`;

export const WelcomeCard = styled.div`
  width: 100%;
  max-width: 1060px;
  margin: 0 auto;

  padding: 38px 55px 48px;

  background: #faf9ff;

  border: 2px solid #a8e3df;
  border-radius: 30px;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

export const WelcomeTitle = styled.h1`
  margin: 0 0 18px;

  font-size: 25px;
  font-weight: 700;
  color: #111827;
`;

export const WelcomeText = styled.p`
  margin: 0 0 38px;

  font-size: 16px;
  line-height: 1.5;
  color: #333;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
`;

export const InfoCard = styled.div`
  min-height: 150px;
  padding: 25px 20px;

  background: #f8f8fa;

  border: 2px solid #a8e1de;
  border-radius: 18px;
`;

export const InfoTitle = styled.h3`
  margin: 0 0 15px;
  font-size: 18px;
  color: #222;
`;

export const InfoText = styled.p`
  min-height: 48px;
  margin: 0;

  font-size: 14px;
  line-height: 1.4;
  color: #333;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 6px;

  margin-top: 18px;

  background: #dfe5e8;
  border-radius: 10px;
`;

export const Progress = styled.div`
  width: 100%;
  height: 100%;

  background: #102d6b;
  border-radius: 10px;
`;

export const QuickTitle = styled.h3`
  margin: 58px 0 25px;

  font-size: 18px;
  color: #222;
`;

export const QuickGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
`;

export const QuickCard = styled.div`
  min-height: 120px;
  padding: 30px;

  background: #f8f8fa;

  border: 2px solid #a8e1de;
  border-radius: 18px;

  text-align: center;

  cursor: pointer;

  transition: 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const QuickCardTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 18px;
`;

export const QuickCardText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #333;
`;

// Profile

export const ProfileWrapper = styled.div`
  padding: 35px;
`;

export const ProfileCard = styled.div`
  width: 100%;
  max-width: 1060px;

  margin: 0 auto;
  padding: 25px 50px 32px;

  background: #faf9ff;

  border: 2px solid #9ee3df;
  border-radius: 30px;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

export const ProfileTitle = styled.h1`
  margin: 0 0 25px;

  font-size: 23px;
  font-weight: 700;
  color: #111827;
`;
export const Sectionname = styled.h2`
  margin: 25px 0 18px;
text-align:left;
  font-size: 20px;
  
`;





export const FormGrid = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;

  column-gap: 36px;
  row-gap: 25px;

  margin-bottom: 38px;
`;



export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;

  padding: 18px 28px;

  border: none;
  border-radius: 14px;

  background: #f0f1f3;

  color: #222;
  font-size: 14px;

  resize: none;
  outline: none;

  margin-bottom: 30px;

  &:focus {
    border: 2px solid #9ee3df;
    background: #fff;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;

  margin-top: 5px;
`;

export const CancelButton = styled.button`
  min-width: 200px;
  height: 58px;

  border: 2px solid #9ee3df;
  border-radius: 16px;

  background: transparent;

  color: #555;
  font-size: 16px;
  font-weight: 600;

  cursor: pointer;

  &:hover {
    background: #f0ffff;
  }
`;

export const SaveButton = styled.button`
  min-width: 200px;
  height: 58px;

  border: none;
  border-radius: 16px;

  background: #4fc9c4;

  color: white;
  font-size: 16px;
  font-weight: 600;

  cursor: pointer;

  &:hover {
    background: #3db8b3;
  }
`;