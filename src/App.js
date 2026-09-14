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

          

        </Routes>

      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
