import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Box from "@mui/material/Box";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import "./App.css";
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const themeLight = createTheme({
  palette: {
    mode: 'light',
  },
});

const themeDark = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  const [theme, setTheme] = useState(themeLight);

  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === themeLight ? themeDark : themeLight);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        className="site-wrapper"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "100vh",
          backgroundImage: theme.palette.mode === 'light' ? 'linear-gradient(rgb(37, 131, 208, 0.9), rgba(14, 63, 104, 0.25))' : 'none',
          backgroundColor: theme.palette.background.default,
          transition: 'background-color 0.5s ease-in-out, background-image 0.5s ease-in-out',
        }}
      >
        <Box className="site-header">
          <Header toggleTheme={toggleTheme} />
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
    </ThemeProvider>
  );
}
