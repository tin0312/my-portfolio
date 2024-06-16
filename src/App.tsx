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
import PreloadPage from "./component/PreloaderPage";
import { keyframes } from "@mui/material/styles";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import Fab from '@mui/material/Fab';

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

  const toggleTheme = () => {
    const newTheme = theme === themeLight ? themeDark : themeLight;
    localStorage.setItem("theme", newTheme === themeDark ? "dark" : "light");
    setTheme(newTheme);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    const storedTheme = localStorage.getItem("theme");
    setTheme(storedTheme === "dark" ? themeDark : themeLight);
  
    return () => clearTimeout(timer);
  }, []);

  interface Props {
    window?: () => Window;
    children: React.ReactElement;
  }
  
  function ScrollTop(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      const anchor = (
        (event.target as HTMLDivElement).ownerDocument || document
      ).querySelector('#back-to-top-anchor');
  
      if (anchor) {
        anchor.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };
  
    return (
      <Fade in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          {children}
        </Box>
      </Fade>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loading ?  <PreloadPage theme={theme}/> : 
        (<Box
          className="site-wrapper"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "100vh",
            backgroundImage:
              theme.palette.mode === "light"
                ? "linear-gradient(135deg, rgba(37, 131, 208, 0.9) 30%, rgba(14, 63, 104, 0.5) 100%)"
                : "none",
            backgroundColor: theme.palette.background.default,
            transition:
              "background-color 0.5s ease-in-out, background-image 0.5s ease-in-out",
            animation: loading ? "none" : `${fadeInAnimation} ease 1s forwards`, 
          }}
        >
          <Box id="back-to-top-anchor" className="site-header">
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
        </Box>)}
        <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </ThemeProvider>
  );
}
