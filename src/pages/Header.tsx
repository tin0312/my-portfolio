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

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === themeLight ? themeDark : themeLight));
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Simulating a loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
            backgroundImage: theme.palette.mode === "light"
              ? "linear-gradient(rgb(37, 131, 208, 0.9), rgba(14, 63, 104, 0.25))"
              : "none",
          }}
        >
          <Box
            sx={{
              width: '250px',
              height: '250px',
              padding: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                width: '250px',
                position: 'absolute',
                zIndex: 11,
                animation: 'clouds 8s infinite ease-in-out',
                display: 'flex',
                paddingTop: '45px',
                marginLeft: '25px',
              }}
            >
              <Box
                sx={{
                  width: '65px',
                  height: '65px',
                  borderRadius: '50% 50% 0 50%',
                  backgroundColor: '#4c9beb',
                  display: 'inline-block',
                }}
              ></Box>
              <Box
                sx={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '50% 50% 50% 0',
                  backgroundColor: '#4c9beb',
                  display: 'inline-block',
                  marginLeft: '-25px',
                }}
              ></Box>
            </Box>
            <Box
              sx={{
                width: '120px',
                height: '120px',
                background: 'linear-gradient(to right, #fcbb04, #fffc00)',
                borderRadius: '60px',
                position: 'absolute',
              }}
              className="sunshine"
            ></Box>
            <Box
              sx={{
                width: '120px',
                height: '120px',
                background: 'linear-gradient(to right, #fcbb04, #fffc00)',
                borderRadius: '60px',
                position: 'absolute',
                animation: 'sunshines 2s infinite',
              }}
            ></Box>
            <Box
              sx={{
                width: '250px',
                position: 'absolute',
                zIndex: 12,
                animation: 'clouds 12s infinite ease-in-out',
                display: 'flex',
                marginTop: '-30px',
                marginLeft: '150px',
              }}
            >
              <Box
                sx={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50% 50% 0 50%',
                  backgroundColor: '#4c9beb',
                  display: 'inline-block',
                }}
              ></Box>
              <Box
                sx={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50% 50% 50% 0',
                  backgroundColor: '#4c9beb',
                  display: 'inline-block',
                  marginLeft: '-20px',
                }}
              ></Box>
            </Box>
          </Box>
        </Box>
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
      )}
      <style>{`
        @keyframes sunshines {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
        @keyframes clouds {
          0% {
            transform: translateX(15px);
          }
          50% {
            transform: translateX(0px);
          }
          100% {
            transform: translateX(15px);
          }
        }
      `}</style>
    </ThemeProvider>
  );
}