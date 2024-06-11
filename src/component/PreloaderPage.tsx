import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundImage:
    theme.palette.mode === "light"
      ? "linear-gradient(rgb(37, 131, 208, 0.9), rgba(14, 63, 104, 0.25))"
      : "none",
}));

const Cube = styled(Box)({
  width: "200px",
  height: "200px",
  transformStyle: "preserve-3d",
  animation: "animate 4s linear infinite",
  "@keyframes animate": {
    "0%": {
      transform: "rotateX(0deg) rotateY(0deg)",
    },
    "100%": {
      transform: "rotateX(360deg) rotateY(360deg)",
    },
  },
});

const Side = styled(Box)({
  position: "absolute",
  width: "200px",
  height: "200px",
  display: "grid",
  backgroundColor: "none",
  borderRadius: "10px",
  placeContent: "center",
  border: "3px solid #fff",
});

const Front = styled(Side)({
  transform: "translateZ(100px)",
});

const Back = styled(Side)({
  transform: "rotateY(180deg) translateZ(100px)",
});

const Top = styled(Side)({
  transform: "rotateX(90deg) translateZ(100px)",
});

const Bottom = styled(Side)({
  transform: "rotateX(-90deg) translateZ(100px)",
});

const Left = styled(Side)({
  transform: "rotateY(-90deg) translateZ(100px)",
});

const Right = styled(Side)({
  transform: "rotateY(90deg) translateZ(100px)",
});

interface PreloaderProps {
  theme: any;
}

const PreloadPage: React.FC<PreloaderProps> = ({ theme }) => {
  return (
    <Wrapper theme={theme}>
      <Cube>
        <Front />
        <Back />
        <Top />
        <Bottom />
        <Left />
        <Right />
      </Cube>
    </Wrapper>
  );
};

export default PreloadPage;
