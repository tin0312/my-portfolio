import React from "react";
import { keyframes, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

// Keyframes for the animation
const animate = keyframes`
  0% {
    transform: translateX(150px);
  }
  50% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(-170px);
  }
`;

// Styled components
const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Loader = styled(Box)({
  height: "100px",
  width: "100px",
  borderRadius: "50%",
  backgroundColor: "#e8e8e8",
  border: "4px solid #e8e8e8",
  boxShadow: "0 0 3px #e8e8e8",
  filter: "blur(.4px)",
  position: "relative",
});

const Shadow = styled(Box)({
  height: "120px",
  width: "120px",
  borderRadius: "50%",
  backgroundColor: "#212121",
  position: "absolute",
  top: "-10px",
  left: "0",
  animation: `${animate} 3s infinite 1.5s`,
});

interface PreloaderProps {
  theme: any;
}

// Main component
const PreloaderDark: React.FC<PreloaderProps> = ({ theme }) => (
  <Container theme={theme}>
    <Loader>
      <Shadow />
    </Loader>
  </Container>
);

export default PreloaderDark;
