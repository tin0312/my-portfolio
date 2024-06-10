import { keyframes } from "@mui/material/styles";
import WavingHandIcon from "@mui/icons-material/WavingHand";

const waveAnimation = keyframes`
      0% {
    transform: rotate(0deg);
  }
  15% {
    transform: rotate(14deg);
  } /* The following five values can be played with to make the waving more or less extreme */
  30% {
    transform: rotate(-8deg);
  }
  40% {
    transform: rotate(14deg);
  }
  50% {
    transform: rotate(-4deg);
  }
  60% {
    transform: rotate(10deg);
  }
  70% {
    transform: rotate(0deg);
  } /* Reset for the last half to pause */
  100% {
    transform: rotate(0deg);
  }
`;

const WavingHand = () => {
  return (
    <WavingHandIcon
      sx={{
        color: "gold",
        marginLeft: "0.7rem",
        fontSize: "1.7rem",
        animation: `${waveAnimation} 2.5s infinite`,
        transformOrigin: "70% 70%",
      }}
    />
  );
};

export default WavingHand;
