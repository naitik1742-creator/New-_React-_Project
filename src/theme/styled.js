import styled from "styled-components";

/* 
   APP
 */

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.background};
`;

export const Main = styled.main`
  flex: 1;
  padding-top: 82px;
`;


/* 
   NAVBAR  */

export const NavbarWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 82px;

  background: ${({ theme }) => theme.colors.primary};

  z-index: 1000;

  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
`;

export const NavbarContainer = styled.nav`
  max-width: 1250px;
  height: 82px;

  margin: 0 auto;
  padding: 0 35px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 700px) {
    height: auto;
    min-height: 82px;

    padding: 15px 20px;

    flex-direction: column;
    gap: 14px;
  }
`;

export const Logo = styled.div`
  color: white;

  font-size: 23px;
  font-weight: 700;

  white-space: nowrap;

  @media (max-width: 700px) {
    font-size: 21px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;

  flex-wrap: wrap;

  @media (max-width: 700px) {
    justify-content: center;
    gap: 8px;
  }
`;

export const NavButton = styled.button`
  min-width: 82px;
  height: 42px;

  padding: 0 19px;

  border: 1px solid #50c9c3;
  border-radius: 8px;

  background: transparent;
  color: white;

  font-size: 14px;
  font-weight: 500;

  cursor: pointer;
  white-space: nowrap;

  transition: all 0.25s ease;

  &:hover {
    background: rgba(80, 201, 195, 0.15);
    transform: translateY(-1px);
  }

  @media (max-width: 700px) {
    min-width: 70px;
    height: 38px;

    padding: 0 14px;

    font-size: 13px;
  }
`;

export const NavSignup = styled(NavButton)`
  background: #50c9c3;
  border-color: #50c9c3;

  &:hover {
    background: #43b8b2;
  }
`;

export const SignUpButton = styled(NavButton)`
  background: ${({ theme }) => theme.colors.secondary};

  border-color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    background: ${({ theme }) =>
      theme.colors.secondaryHover};

    transform: translateY(-1px);
  }
`;

export const NavLogin = styled(NavButton)`
  
  border-color: #50c9c3;

  &:hover {
    background: #43b8b2;
  }
`;

export const LoginButton = styled(NavButton)`


  border-color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    background: ${({ theme }) =>
      theme.colors.secondaryHover};

    transform: translateY(-1px);
  }
`;


/* 
   HERO
*/

export const Hero = styled.section`
  max-width: 1250px;

  margin: 0 auto;

  margin-top:80px;

  padding: 75px 55px 80px;

  display: grid;

  grid-template-columns: 1fr 1fr;

  align-items: center;

  gap: 65px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;

    padding: 60px 35px;

    gap: 45px;
  }

  @media (max-width: 500px) {
    padding: 45px 20px;
  }
`;

export const HeroContent = styled.div`
  max-width: 550px;
`;

export const HeroTitle = styled.h1`
  font-size: 40px;

  line-height: 1.15;

  margin: 0 0 22px;

  color: ${({ theme }) => theme.colors.text};

  font-weight: 750;

  @media (max-width: 700px) {
    font-size: 34px;
  }

  @media (max-width: 450px) {
    font-size: 29px;
  }
`;

export const HeroDescription = styled.p`
  font-size: 16px;

  line-height: 1.65;

  color: ${({ theme }) => theme.colors.textLight};

  margin: 0 0 30px;

  max-width: 520px;
`;

export const HeroButtons = styled.div`
  display: flex;

  align-items: center;

  gap: 14px;

  flex-wrap: wrap;
`;

export const PrimaryButton = styled.button`
  border: none;

  background: ${({ theme }) => theme.colors.secondary};

  color: white;

  border-radius: 8px;

  padding: 13px 24px;

  font-size: 15px;

  font-weight: 600;

  cursor: pointer;

  transition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) =>
      theme.colors.secondaryHover};

    transform: translateY(-2px);
  }
`;

export const OutlineButton = styled.button`
  border: 1px solid
    ${({ theme }) => theme.colors.border};

  background: transparent;

  color: ${({ theme }) => theme.colors.text};

  border-radius: 8px;

  padding: 12px 23px;

  font-size: 15px;

  cursor: pointer;

  transition: all 0.25s ease;

  &:hover {
    border-color: ${({ theme }) =>
      theme.colors.secondary};

    transform: translateY(-2px);
  }
`;


/* 
   SLIDER
 */

export const SliderContainer = styled.div`
  position: relative;

  min-height: 300px;

  padding: 55px 75px;

  background: ${({ theme }) => theme.colors.surface};

  border: 2px solid
    ${({ theme }) => theme.colors.sliderBorder};

  border-radius: 22px;

  box-shadow:
    0 5px 15px rgba(0, 0, 0, 0.15);

  display: flex;

  flex-direction: column;

  justify-content: center;

  text-align: center;

  @media (max-width: 500px) {
    min-height: 260px;

    padding: 45px 50px;
  }
`;

export const SliderTitle = styled.h2`
  font-size: 24px;

  margin: 0 0 16px;

  color: ${({ theme }) => theme.colors.text};
`;

export const SliderDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};

  font-size: 15px;

  line-height: 1.6;

  margin: 0 auto;

  max-width: 420px;
`;

export const SliderArrow = styled.button`
  position: absolute;

  top: 50%;

  transform: translateY(-50%);

  width: 44px;
  height: 44px;

  border: none;

  border-radius: 10px;

  background: ${({ theme }) => theme.colors.secondary};

  color: white;

  font-size: 26px;

  cursor: pointer;

  transition: all 0.25s ease;

  ${({ left }) =>
    left
      ? `
        left: 12px;
      `
      : `
        right: 12px;
      `}

  &:hover {
    background: ${({ theme }) =>
      theme.colors.secondaryHover};

    transform: translateY(-50%) scale(1.05);
  }

  @media (max-width: 500px) {
    width: 38px;
    height: 38px;

    font-size: 22px;
  }
`;

export const SliderDots = styled.div`
  position: absolute;

  bottom: 18px;

  left: 0;
  right: 0;

  display: flex;

  justify-content: center;

  gap: 10px;
`;

export const SliderDot = styled.button`
  width: ${({ active }) =>
    active ? "25px" : "11px"};

  height: 10px;

  border: none;

  border-radius: 20px;

  cursor: pointer;

  background: ${({ active, theme }) =>
    active
      ? theme.colors.secondary
      : "#edf0f4"};

  transition: all 0.25s ease;
`;


/* 
   SECTION
 */

export const Section = styled.section`
  max-width: 1100px;

  margin: 0 auto;

  padding: 80px 35px;

  margin-top:110px;

  scroll-margin-top: 50px;

  @media (max-width: 600px) {
    padding: 60px 20px;
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;

  font-size: 32px;

  margin: 0 0 30px;

  color: ${({ theme }) => theme.colors.text};

  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 27px;
  }
`;

export const SectionDescription = styled.p`
  max-width: 800px;

  margin: 0 auto 30px;

  font-size: 15px;

  line-height: 1.7;

  color: ${({ theme }) => theme.colors.textLight};

  text-align: center;
`;


/* 
   ABOUT*/

export const AboutList = styled.div`
  max-width: 850px;

  margin: 0 auto;

  display: flex;

  flex-direction: column;

  gap: 14px;
`;

export const AboutItem = styled.div`
  min-height: 58px;

  padding: 15px 22px;

  border: 2px solid
    ${({ theme }) => theme.colors.border};

  border-radius: 10px;

  background: ${({ theme }) => theme.colors.surface};

  display: flex;

  justify-content: center;

  align-items: center;

  text-align: center;

  color: ${({ theme }) => theme.colors.textLight};

  font-size: 14px;

  line-height: 1.5;

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);

    border-color: ${({ theme }) =>
      theme.colors.secondary};
  }
`;


/* 
   SERVICES
 */

export const ServicesGrid = styled.div`
  max-width: 1050px;

  margin: 0 auto;

  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 20px;

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.div`
  min-height: 150px;

  padding: 25px;

  background: ${({ theme }) => theme.colors.surface};

  border: 2px solid
    ${({ theme }) => theme.colors.border};

  border-radius: 18px;

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-5px);

    box-shadow:
      0 8px 22px rgba(0, 0, 0, 0.12);

    border-color: ${({ theme }) =>
      theme.colors.secondary};
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 17px;

  margin: 0 0 12px;

  color: ${({ theme }) => theme.colors.text};
`;

export const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};

  font-size: 14px;

  line-height: 1.6;

  margin: 0;
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
  max-width: 1250px;

  min-height: 120px;

  margin: auto;

  padding: 30px 35px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 25px;

  @media (max-width: 700px) {
    flex-direction: column;

    text-align: center;

    padding: 25px 20px;
  }
`;

export const Copyright = styled.p`
  font-size: 13px;

  margin: 0;
`;

export const FooterLinks = styled.div`
  display: flex;

  gap: 12px;

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
  left: 290px;
  right: 0;

  height: 82px;

  background: #0d2b6b;

  color: white;

  display: flex;

  align-items: center;

  padding: 0 32px;

  box-sizing: border-box;

  z-index: 1000;

  /* Desktop */
  @media (max-width: 900px) {
    left: 240px;

    height: 75px;

    padding: 0 25px;
  }

  /* Mobile */
  @media (max-width: 700px) {
    position: fixed;

    left: 0;

    height: 70px;

    padding: 0 20px;
  }
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
   display:flex;
   position:absolute;
   right:20px;

  padding: 8px 18px;

  border-radius: 7px;

  font-size: 12px;

  cursor: pointer;

  &:hover {
    background: #4dc9c6;
  }
`;

/* 
   DASHBOARD PAGE
 */

export const DashboardWrapper = styled.div`
  padding-top: 82px;

  min-height: 100vh;

  background: #f4f6f8;

  box-sizing: border-box;
`;


/* 
   SIDEBAR
 */

export const Sidebar = styled.aside`
  position: fixed;

  top: 0px;
  left: 0;
  bottom: 0;

  width: 290px;

  background: #ffffff;

  border-right: 1px solid #dce5e8;

  padding: 28px 20px;

  box-sizing: border-box;

  overflow-y: auto;

  z-index: 900;

  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.04);

  @media (max-width: 900px) {
    width: 240px;
  }

  @media (max-width: 700px) {
    position: relative;

    top: 0;

    width: 100%;

    height: auto;

    border-right: none;

    border-bottom: 1px solid #dce5e8;

    box-shadow: none;
  }
`;


/* 
   USER BOX
*/

export const UserBox = styled.div`
  display: flex;

  align-items: center;

  gap: 15px;

  padding: 0 5px 24px;

  border-bottom: 1px solid #e5eaea;
`;


/* 
   AVATAR
 */

export const Avatar = styled.div`
  width: 54px;
  height: 54px;

  flex-shrink: 0;

  border-radius: 50%;

  background: #173875;

  color: white;

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 17px;

  font-weight: 700;

  box-shadow: 0 3px 8px rgba(23, 56, 117, 0.2);
`;


/* 
   USER DETAILS
 */

export const UserDetails = styled.div`
  display: flex;

  flex-direction: column;

  gap: 5px;

  strong {
    font-size: 16px;

    font-weight: 700;

    color: #222;
  }

  span {
    font-size: 12px;

    color: #777;

    line-height: 1.4;
  }
`;


/* 
   SIDEBAR SECTION
 */

export const SidebarSection = styled.div`
  margin-top: 32px;
`;


/* 
   SIDEBAR TITLE
 */

export const SidebarTitle = styled.div`
  font-size: 12px;

  font-weight: 700;

  color: #555;

  margin: 0 0 12px;

  margin-top:40px;

  padding-left: 8px;

  text-transform: uppercase;

  letter-spacing: 0.5px;
`;


/* 
   SIDEBAR LINK
 */

export const SidebarLink = styled.button`
  width: 100%;
  padding: 13px 18px;
  margin: 4px 0;

  background: transparent;
  border: 2px solid transparent;
  border-radius: 12px;

  color: #222;
  font-size: 14px;
  font-weight: 500;
  text-align: left;

  cursor: pointer;
  transition: all 0.2s ease;

  ${({ active }) =>
    active &&
    `
      background: #f3f7f8;
      border-color: #8edbd8;

      box-shadow:
        -2px 0 0 #8edbd8,
        -2px 0 0 #8edbd8;

      font-weight: 600;
    `}

  &:hover {
    background: #f3f7f8;
    border-color: #bcefed;

    box-shadow: -5px 0 0 #8edbd8;
  }
`;

/* 
   DASHBOARD CONTENT
 */

export const DashboardContent = styled.main`
  margin-left: 290px;

  min-height: calc(100vh - 82px);

  padding: 40px;

  box-sizing: border-box;

  @media (max-width: 900px) {
    margin-left: 240px;

    padding: 30px;
  }

  @media (max-width: 700px) {
    margin-left: 0;

    padding: 25px 20px;
  }
`;

// Overview Page

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


// Security


export const SecurityPageCard = styled.div`
  width: 100%;
  max-width: 1050px;

  margin: 0 auto;

  padding: 34px 40px;

  background: #ffffff;

  border: 2px solid #bcefed;

  border-radius: 24px;

  box-sizing: border-box;

  box-shadow: 0 3px 12px rgba(77, 201, 198, 0.12);
`;

export const SecurityPageTitle = styled.h1`
  margin: 0 0 28px;

  font-size: 23px;

  font-weight: 700;

  color: #222;
`;

export const SecurityIntroTitle = styled.h2`
  margin: 0 0 12px;

  font-size: 17px;

  font-weight: 700;

  color: #222;
`;

export const SecurityDescription = styled.p`
  margin: 0 0 28px;

  font-size: 14px;

  line-height: 1.5;

  color: #333;
`;

export const SecurityFormGrid = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 20px 28px;

  width: 100%;
`;

export const SecurityField = styled.div`
  display: flex;

  flex-direction: column;

  width: 100%;
`;

export const SecurityLabel = styled.label`
  margin-bottom: 8px;

  font-size: 13px;

  font-weight: 600;

  color: #222;
`;

export const SecurityInput = styled.input`
  width: 100%;

  height: 48px;

  padding: 0 16px;

  background: #f1f3f4;

  border: 1px solid #e1e5e6;

  border-radius: 12px;

  box-sizing: border-box;

  font-size: 14px;

  color: #222;

  outline: none;

  &::placeholder {
    color: #555;
  }

  &:focus {
    border-color: #4dc9c6;

    background: #ffffff;

    box-shadow: 0 0 0 2px rgba(77, 201, 198, 0.12);
  }
`;

export const SecurityButtonRow = styled.div`
  display: flex;

  justify-content: flex-end;

  align-items: center;

  gap: 12px;

  margin-top: 22px;
`;

export const SecurityClearButton = styled.button`
  min-width: 100px;

  height: 48px;

  padding: 0 22px;

  background: #ffffff;

  border: 2px solid #a8dedc;

  border-radius: 14px;

  color: #333;

  font-size: 14px;

  font-weight: 600;

  cursor: pointer;

  &:hover {
    background: #eefafa;
  }
`;

export const SecurityUpdateButton = styled.button`
  min-width: 150px;

  height: 48px;

  padding: 0 22px;

  background: #50c9c5;

  border: 2px solid #50c9c5;

  border-radius: 14px;

  color: #ffffff;

  font-size: 14px;

  font-weight: 600;

  cursor: pointer;

  &:hover {
    background: #42b8b4;

    border-color: #42b8b4;
  }
`;

export const SecurityInfoSection = styled.section`
  margin-top: 30px;

  padding-top: 20px;

  border-top: 2px solid #d9eeee;
`;

export const SecurityInfoTitle = styled.h2`
  margin: 0 0 20px;

  font-size: 16px;

  font-weight: 700;

  color: #222;
`;

export const SecurityInfoGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 18px;

  width: 100%;
`;

export const SecurityInfoCard = styled.div`
  min-height: 115px;

  padding: 18px 22px;

  background: #f5f7f8;

  border: 2px solid #a8dedc;

  border-radius: 14px;

  box-sizing: border-box;
`;

export const SecurityInfoIcon = styled.span`
  display: block;

  margin-bottom: 14px;

  color: #50c9c5;

  font-size: 18px;

  font-weight: 700;
`;

export const SecurityInfoCardTitle = styled.h3`
  margin: 0 0 8px;

  font-size: 15px;

  font-weight: 700;

  color: #222;
`;

export const SecurityInfoText = styled.p`
  margin: 0;

  font-size: 12px;

  line-height: 1.4;

  color: #333;
`;

// Notification Page

export const NotificationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  margin-top: 25px;
`;

export const NotificationBox = styled.div`
  border: 2px solid #a8dedc;
  border-radius: 16px;
  padding: 22px 26px;
  background: #f8f9fa;
  min-height: 125px;
  box-sizing: border-box;
`;

export const NotificationIcon = styled.div`
  color: #50c9c5;
  font-size: 22px;
  margin-bottom: 12px;
`;

export const NotificationTitle = styled.h3`
  font-size: 16px;
  margin: 0 0 8px;
  padding:0px;
  color: #111827;
`;

export const NotificationText = styled.p`
  font-size: 13px;
  margin: 5px 0;
  color: #333;
`;

export const CheckboxRow = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  font-size: 14px;
  cursor: pointer;

  input {
    width: 16px;
    height: 16px;
    accent-color: #50c9c5;
    cursor: pointer;
  }
`;

export const S1Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 24px;
  font-size: 18px;
  color: #111827;
  
`;

export const ActivityBox = styled.div`
  width: 100%;
  min-height: 125px;
  box-sizing: border-box;

  border: 2px solid #a8dedc;
  border-radius: 16px;

  padding: 22px 28px;
  margin-top: 15px;

  background: #f8f9fa;
`;

export const ActivityIcon = styled.div`
  width: 20px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid #50c9c5;
  border-radius: 4px;

  color: #50c9c5;
  font-size: 13px;
  margin-bottom: 12px;
`;

// Help & Support

export const PageContent = styled.main`
  margin-left: 80px;
  padding: 30px 28px 40px;
  min-height: 100vh;
  background: #f4f6f8;
  box-sizing: border-box;
`;

export const ContentCard = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  background: #ffffff;
  border: 2px solid #bcefed;
  border-radius: 24px;
  padding: 32px 40px;
  box-sizing: border-box;
  box-shadow: 0 3px 12px rgba(77, 201, 198, 0.12);
`;

export const PageTitle = styled.h1`
  margin: 0 0 32px;
  font-size: 24px;
  font-weight: 700;
  color: #111827;
`;

export const STitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 24px;
  font-size: 18px;
  color: #111827;
`;

export const SectionIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: #4dc9c6;
  font-size: 22px;
  font-weight: 700;
`;

export const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const FAQItem = styled.div`
  width: 100%;
  padding: 22px;
  background: #f5f7f8;
  border: 2px solid #bcefed;
  border-radius: 15px;
  box-sizing: border-box;
`;

export const FAQQuestion = styled.h3`
  margin: 0 0 12px;
  font-size: 15px;
  font-weight: 700;
  color: #111827;
`;

export const FAQAnswer = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
`;

export const SupportSection = styled.section`
  margin-top: 48px;
`;

export const SupportTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 25px;
  font-size: 18px;
  color: #111827;
`;

export const SupportText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: #333;
`;