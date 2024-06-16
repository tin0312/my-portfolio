import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import ExpandIcon from "../component/ExpandIcon";

interface TextType {
  elem: HTMLElement;
  rotateElem: string[];
  period: number;
  loopNum: number;
  text: string;
  isDeleting: boolean;
  tick: () => void;
}

class TextTypeImpl implements TextType {
  elem: HTMLElement;
  rotateElem: string[];
  period: number;
  loopNum: number;
  text: string;
  isDeleting: boolean;
  timeoutId: ReturnType<typeof setTimeout> | null;

  constructor(elem: HTMLElement, rotateElem: string[], period: number) {
    this.elem = elem;
    this.rotateElem = rotateElem;
    this.period = period || 2000;
    this.loopNum = 0;
    this.text = "";
    this.isDeleting = false;
    this.timeoutId = null;
    this.tick = this.tick.bind(this);
    this.tick();
  }

  tick() {
    const i = this.loopNum % this.rotateElem.length;
    const fullText = this.rotateElem[i];

    if (this.isDeleting) {
      this.text = fullText.substring(0, this.text.length - 1);
    } else {
      this.text = fullText.substring(0, this.text.length + 1);
    }

    this.elem.querySelector(".wrap")!.textContent = this.text;

    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.text === fullText) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.text === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    this.timeoutId = setTimeout(this.tick, delta);
  }

  stop() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}

const About: React.FC = () => {
  const typewriteRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useEffect(() => {
    let typewriter: TextTypeImpl | null = null;

    if (typewriteRef.current) {
      const element = typewriteRef.current;
      const toRotate = JSON.parse(element.getAttribute("data-type") || "[]");
      const period = parseInt(
        element.getAttribute("data-period") || "2000",
        10
      );
      typewriter = new TextTypeImpl(element, toRotate, period);

      // Dynamically add the CSS
      const colorValue = theme.palette.mode === "dark" ? "#D07225" : "#FFF";
      const css = document.createElement("style");
      css.innerHTML = `.typewrite > .wrap { border-right: 0.08em solid ${colorValue}; }`;
      document.head.appendChild(css);

      return () => {
        typewriter?.stop();
        document.head.removeChild(css);
      };
    }
  }, [theme.palette.mode]);

  return (
    <Box
      id="about"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          opacity: 0.05,
          fontSize: { xs: "13rem", lg: "15rem" },
          lineHeight: "1",
          margin: 0,
          padding: 0,
          position: "relative",
          zIndex: 1,
          fontWeight: "bolder",
        }}
      >
        Hi
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "8rem", lg: "14rem" },
          fontWeight: "bold",
          letterSpacing: "0.5rem",
          lineHeight: "1",
          margin: 0,
          padding: 0,
          position: "relative",
          zIndex: 2,
          marginTop: { xs: "-70px", lg: "-100px" },
        }}
      >
        I am
      </Typography>
      <Typography
        className="myName"
        sx={{
          fontSize: { xs: "6rem", lg: "12rem" },
          fontWeight: "bold",
          letterSpacing: "0.5rem",
          lineHeight: "1",
          margin: 0,
          padding: 0,
          position: "relative",
          zIndex: 3,
          color: theme.palette.mode === "dark" ? "#D07225" : "#FFF",
          textShadow: `0 0 10px ${
            theme.palette.mode === "dark" ? "#D07225" : "#FFF"
          }`,
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        Truong
      </Typography>
      <Box
        className="typewrite"
        sx={{
          color: theme.palette.mode === "dark" ? "#FFF" : "#D07225",
          fontSize: { xs: "1.2rem", lg: "1.8rem" },
          marginTop: "1rem",
          height: "2rem",
        }}
        ref={typewriteRef}
        data-period="2000"
        data-type='["I am a software developer.", "I build.", "I code."]'
      >
        <Box
          component="span"
          className="wrap"
          sx={{ color: theme.palette.mode === "dark" ? "#FFF" : "#D07225" }}
        ></Box>
      </Box>
      <ExpandIcon />
    </Box>
  );
};

export default About;
