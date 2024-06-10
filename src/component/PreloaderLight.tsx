import React from "react";
import { keyframes, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const sunshines = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  100% {
    transform: scale(1.4);
    opacity: 0;
  }
`;

const clouds = keyframes`
  0% {
    transform: translateX(15px);
  }
  50% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(15px);
  }
`;

const PreloaderWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
  backgroundImage:
    theme.palette.mode === "light"
      ? "linear-gradient(rgb(37, 131, 208, 0.9), rgba(14, 63, 104, 0.25))"
      : "none",
}));

const Sun = styled(Box)({
  width: "120px",
  height: "120px",
  background: "linear-gradient(to right, #fcbb04, #fffc00)",
  borderRadius: "60px",
  position: "absolute",
});

const AnimatedSun = styled(Sun)({
  animation: `${sunshines} 2s infinite`,
});

const Cloud = styled(Box)({
  width: "65px",
  height: "65px",
  borderRadius: "50% 50% 0 50%",
  backgroundColor: "#4c9beb",
  display: "inline-block",
});

const CloudSmall = styled(Cloud)({
  width: "30px",
  height: "30px",
});

const CloudWrapper = styled(Box)({
  width: "250px",
  position: "absolute",
  display: "flex",
});

const AnimatedCloudWrapper = styled(CloudWrapper)({
  zIndex: 11,
  animation: `${clouds} 8s infinite ease-in-out`,
  paddingTop: "45px",
  marginLeft: "25px",
});

const AnimatedCloudWrapper2 = styled(CloudWrapper)({
  zIndex: 12,
  animation: `${clouds} 12s infinite ease-in-out`,
  marginTop: "-30px",
  marginLeft: "150px",
});

interface PreloaderProps {
  theme: any;
}

const PreloaderLight: React.FC<PreloaderProps> = ({ theme }) => (
  <PreloaderWrapper theme={theme}>
    <Box
      sx={{
        width: "250px",
        height: "250px",
        padding: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <AnimatedCloudWrapper>
        <Cloud />
        <Cloud
          sx={{
            width: "45px",
            height: "45px",
            borderRadius: "50% 50% 50% 0",
            marginLeft: "-25px",
          }}
        />
      </AnimatedCloudWrapper>
      <Sun className="sunshine" />
      <AnimatedSun />
      <AnimatedCloudWrapper2>
        <CloudSmall />
        <CloudSmall
          sx={{
            width: "50px",
            height: "50px",
            borderRadius: "50% 50% 50% 0",
            marginLeft: "-20px",
          }}
        />
      </AnimatedCloudWrapper2>
    </Box>
  </PreloaderWrapper>
);

export default PreloaderLight;
