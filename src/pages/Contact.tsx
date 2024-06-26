import { useState } from "react";
import Box from "@mui/material/Box";
import { styled } from '@mui/system';
import { Typography, Snackbar, Alert } from "@mui/material";
import AnimatedForm from "../component/AnimatedForm";
import { useTheme } from "@mui/material/styles";
import { Fade, Zoom } from "react-awesome-reveal";

const StyledZoom = styled(Zoom)`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 600px) {
    display: block;
  }
`;
export default function Contact() {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <>
      <Box
        className="contact-wrapper"
        id="contact"
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "@media (max-width: 600px)": {
            alignItems: "flex-start",
          },
        }}
      >
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={success}
          autoHideDuration={2000}
          onClose={() => {
            setSuccess(false);
          }}
        >
          <Alert severity="success" sx={{ width: "100%", textAlign: "center", "@media (max-width: 600px)": {width: "auto", textAlign: "center"} }}>
            Form submitted successfully!
          </Alert>
        </Snackbar>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center", //
            "@media (max-width: 600px)": {
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "space-around",
              width: "95%",
            },
          }}
        >
          <Box
            sx={{
              width: "1000px",
              "@media (max-width: 600px)": {
                width: "100%",
                marginBottom: 6,
              },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                marginTop: 15,
                marginBottom: 7,
                textShadow:
                  theme.palette.mode === "light"
                    ? "0px 2px 4px rgba(0, 0, 0, 0.3)"
                    : "0px 4px 6px rgba(255, 255, 255, 0.3)",
              }}
            >
              <Fade cascade damping={0.1}>
                Say hi
              </Fade>
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", sm: "1.5rem" },
                color: theme.palette.text.secondary,
              }}
            >
              Have a project in mind? Send me a message and let's hear them out!
              I'm always excited to collaborate and help you bring your ideas to
              life.
            </Typography>
          </Box>
          <StyledZoom>
            <AnimatedForm
              setSuccess={setSuccess}
              loading={loading}
              setLoading={setLoading}
            />
          </StyledZoom>
        </Box>
      </Box>
    </>
  );
}
