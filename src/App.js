import { useEffect, useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {
  ThemeProvider,
} from "styled-components";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Overview from "./pages/Overview";
import Profile from "./pages/Profile";
import Security from "./pages/Security";
import Notification from "./pages/Notification";
import HelpSupport from "./pages/HelpSupport";

import GlobalStyle from "./theme/GlobalStyle";

import {
  lightTheme,
  darkTheme,
} from "./theme/theme";


function App() {

  const [darkMode, setDarkMode] =
    useState(() => {

      const savedTheme =
        localStorage.getItem("theme");

      return savedTheme === "dark";
    });

  useEffect(() => {

    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );

  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((previous) => !previous);
  };

  return (

    <ThemeProvider
      theme={
        darkMode
          ? darkTheme
          : lightTheme
      }
    >

      <GlobalStyle />

      <BrowserRouter>

        <Routes>

          <Route
            path="/"
            element={
              <Home
                toggleTheme={toggleTheme}
                darkMode={darkMode}
              />
            }
          />

          <Route
            path="/home"
            element={
              <Home
                toggleTheme={toggleTheme}
                darkMode={darkMode}
              />
            }
          />

          <Route
            path="/Signup"
            element={<Signup/>}
              />

                 <Route
          path="/signin"
          element={<Signin />}
        />
         
          <Route
          path="/overview"
          element={<Overview />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/security"
          element={<Security />}
        />

        <Route
          path="/notification"
          element={<Notification />}
        />

        <Route
          path="/helpsupport"
          element={<HelpSupport />}
        />

        </Routes>

      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
