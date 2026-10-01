import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

import {
  Main,
  Hero,
  HeroContent,
  HeroTitle,
  HeroDescription,
  HeroButtons,
  PrimaryButton,
  OutlineButton,

  Section,
  SectionTitle,
  SectionDescription,

  AboutList,
  AboutItem,

  ServicesGrid,
  ServiceCard,
  ServiceTitle,
  ServiceDescription,
} from "../theme/styled";

import { useNavigate } from "react-router-dom";

function Home({
  toggleTheme,
  darkMode,
}) {
   
      const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };


  return (
    <>
      <Navbar
        toggleTheme={toggleTheme}
        darkMode={darkMode}
      />

      <Main>

        

        <Hero>

          <HeroContent>

            <HeroTitle>
              Launch your Web Tech
              <br />
              practice site in minutes
            </HeroTitle>

            <HeroDescription>
              A clean, modern starter template with
              Login, Signup, Dashboard, Profile &
              Logout pages using only HTML/CSS/JS
              and browser localStorage. Perfect for
              learning and practicing web development
              fundamentals.
            </HeroDescription>

            <HeroButtons>

              <PrimaryButton onClick={() => navigate("/signup")}>
                 Sign Up
             </PrimaryButton>

              <OutlineButton
                onClick={() =>
                  navigate("/Signin")
                }
              >
                I already have an account
              </OutlineButton>

            </HeroButtons>

          </HeroContent>

          <Slider />

        </Hero>


      

        <Section id="about">

          <SectionTitle>
            About This Project
          </SectionTitle>

          <SectionDescription>
            This comprehensive template is designed
            for students and developers to practice
            modern web fundamentals—responsive
            layouts, accessible forms, client-side
            state management, and component
            architecture—without any frameworks or
            complex build processes.
          </SectionDescription>

          <AboutList>

            <AboutItem>
              Single-file pages you can open directly
              in any modern browser
            </AboutItem>

            <AboutItem>
              Responsive layouts for desktop, tablet
              and mobile
            </AboutItem>

            <AboutItem>
              Accessible forms with validation
            </AboutItem>

            <AboutItem>
              Client-side state management
            </AboutItem>

            <AboutItem>
              LocalStorage session management
            </AboutItem>

            <AboutItem>
              Reusable React component architecture
            </AboutItem>

          </AboutList>

        </Section>


    

        <Section id="services">

          <SectionTitle>
            What's Included
          </SectionTitle>

          <ServicesGrid>

            <ServiceCard>

              <ServiceTitle>
                Authentication Templates
              </ServiceTitle>

              <ServiceDescription>
                Beautiful login and signup forms with
                real-time validation, error handling,
                and seamless localStorage integration.
              </ServiceDescription>

            </ServiceCard>


            <ServiceCard>

              <ServiceTitle>
                Dashboard
              </ServiceTitle>

              <ServiceDescription>
                Clean dashboard layouts for practicing
                cards, navigation and user information.
              </ServiceDescription>

            </ServiceCard>


            <ServiceCard>

              <ServiceTitle>
                Profile Management
              </ServiceTitle>

              <ServiceDescription>
                Practice displaying and editing user
                profile information using React state.
              </ServiceDescription>

            </ServiceCard>


            <ServiceCard>

              <ServiceTitle>
                Theme System
              </ServiceTitle>

              <ServiceDescription>
                Light and dark mode using
                styled-components ThemeProvider.
              </ServiceDescription>

            </ServiceCard>


            <ServiceCard>

              <ServiceTitle>
                React Router
              </ServiceTitle>

              <ServiceDescription>
                Organize your application using
                React Router DOM navigation.
              </ServiceDescription>

            </ServiceCard>


            <ServiceCard>

              <ServiceTitle>
                Reusable Components
              </ServiceTitle>

              <ServiceDescription>
                Navbar, Footer, Slider, Buttons and
                Cards are reusable React components.
              </ServiceDescription>

            </ServiceCard>

          </ServicesGrid>

        </Section>


        

      </Main>

      
      <Footer
        toggleTheme={toggleTheme}
      />

      

    </>
  );
}

export default Home;