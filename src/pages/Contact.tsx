import Box from "@mui/material/Box";
import AnimatedForm from "../component/AnimatedForm";
import { Typography } from "@mui/material";

export default function Contact() {
  return (
    <>
      <Box
        className="contact-wrapper"
        id="contact"
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2" sx={{ marginTop: 15, marginBottom: 7 }}>
          Say hi
        </Typography>
        <AnimatedForm />
      </Box>
    </>
  );
}
