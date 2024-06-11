import React from "react";
import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import "./App.css";
import PreloaderLight from "./component/PreloaderLight";
import PreloaderDark from "./component/PreloaderDark";
import PreloadPage from "./component/PreloaderPage";
import { keyframes } from "@mui/material/styles";

const fadeInAnimation = keyframes`
         0% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.75;
  }
  100% {
    opacity: 1;
  }
`;
const themeLight = createTheme({
  palette: {
    mode: "light",
  },
});

const themeDark = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  const [theme, setTheme] = useState(themeLight);
  const [loading, setLoading] = useState(true);
  const [showPreload, setShowPreload] = React.useState(false);

  const toggleTheme = () => {
    const newTheme = theme === themeLight ? themeDark : themeLight;
    localStorage.setItem("theme", newTheme === themeDark ? "dark" : "light");
    setTheme(newTheme);
  };

  useEffect(() => {
    let timer;
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setTheme(themeDark);
      timer = setTimeout(() => setLoading(false), 4000);
    } else {
      setTheme(themeLight);
      timer = setTimeout(() => setLoading(false), 2000);
    }
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {showPreload ? (
        <PreloadPage theme={theme} />
      ) : loading ? (
        theme.palette.mode === "dark" ? (
          <PreloaderDark theme={theme} />
        ) : (
          <PreloaderLight theme={theme} />
        )
      ) : (
        <Box
          className="site-wrapper"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "100vh",
            backgroundImage:
              theme.palette.mode === "light"
                ? "linear-gradient(rgb(37, 131, 208, 0.9), rgba(14, 63, 104, 0.25))"
                : "none",
            backgroundColor: theme.palette.background.default,
            transition:
              "background-color 0.5s ease-in-out, background-image 0.5s ease-in-out",
            animation: loading ? "none" : `${fadeInAnimation} ease 2s forwards`, // Apply animation only when not loading
          }}
        >
          <Box className="site-header">
            <Header toggleTheme={toggleTheme} setShowPreload={setShowPreload} />
          </Box>
          <Box className="site-main">
            <About />
            <Projects />
            <Contact />
          </Box>
          <Box className="site-footer">
            <Footer />
          </Box>
        </Box>
      )}
    </ThemeProvider>
  );
}
