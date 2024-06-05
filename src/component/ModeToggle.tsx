import React from "react";
import { keyframes, styled } from "@mui/material/styles";
import SvgIcon from "@mui/material/SvgIcon";

// Mode toggle button
const rotate = keyframes`
0% {
  transform: rotate(0);
}
100% {
  transform: rotate(360deg);
}
`;

const tilt = keyframes`
0% {
  transform: rotate(0deg);
}
25% {
  transform: rotate(-10deg);
}
75% {
  transform: rotate(10deg);
}
100% {
  transform: rotate(0deg);
}
`;

const SwitchLabel = styled("label")(({ theme }) => ({
  fontSize: "17px",
  position: "relative",
  display: "inline-block",
  width: "64px",
  height: "34px",
  backgroundColor: theme.palette.mode === "dark" ? "#183153" : "#73C0FC",
  borderRadius: "30px",
  transition: "background-color 0.4s",
}));

const SunIcon = styled(SvgIcon)(({ theme }) => ({
  position: "absolute",
  top: "6px",
  left: theme.palette.mode === "light" ? "36px" : "6px",
  zIndex: 1,
  width: "24px",
  height: "24px",
  animation: `${rotate} 15s linear infinite`,
  transition: "left 0.4s, opacity 0.4s",
  opacity: theme.palette.mode === "light" ? 1 : 0,
}));

const MoonIcon = styled(SvgIcon)(({ theme }) => ({
  fill: theme.palette.mode === "light" ? "#183153" : "#73C0FC",
  position: "absolute",
  top: "5px",
  left: theme.palette.mode === "dark" ? "6px" : "36px",
  zIndex: 1,
  width: "24px",
  height: "24px",
  animation: `${tilt} 5s linear infinite`,
  transition: "left 0.4s, opacity 0.4s",
  opacity: theme.palette.mode === "dark" ? 1 : 0,
}));

const SliderSpan = styled("span")(({ theme }) => ({
  position: "absolute",
  cursor: "pointer",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  transition: ".4s",
  borderRadius: "30px",
  "&:before": {
    position: "absolute",
    content: '""',
    height: "30px",
    width: "30px",
    borderRadius: "20px",
    left: theme.palette.mode === "dark" ? "32px" : "2px",
    bottom: "2px",
    zIndex: 2,
    backgroundColor: "#e8e8e8",
    transition: "left .4s",
  },
}));

const ModeToggle: React.FC = () => {
  return (
    <SwitchLabel>
      <SunIcon viewBox="0 0 24 24">
        <g fill="#ffd43b">
          <circle r="5" cy="12" cx="12"></circle>
          <path d="M21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM4 13H3a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1-.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1-.75.29zm-12.02 12.02a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1-.7.24zm6.36-14.36a1 1 0 0 1-1-1V2a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1zm0 17a1 1 0 0 1-1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1zm-5.66-14.66a1 1 0 0 1-.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.29zm12.02 12.02a1 1 0 0 1-.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.24z"></path>
        </g>
      </SunIcon>
      <MoonIcon viewBox="0 0 384 512">
        <path d="M223.5 32C100 32 0 132.3 0 256s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
      </MoonIcon>
      <SliderSpan className="slider" />
    </SwitchLabel>
  );
};

export default ModeToggle;
