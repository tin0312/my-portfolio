import Header from "./components/Header";
import Footer from "./components/Footer";
import Box from "@mui/material/Box";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import "./App.css";

export default function App() {
  return (
    <>
      <Box
        className="site-wrapper"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "100vh",
        }}
      >
        <Box className="site-header">
          <Header />
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
    </>
  );
}
