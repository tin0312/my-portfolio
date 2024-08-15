import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import axios from "axios";

interface FormData {
  email: string;
  textarea: string;
}

const AnimatedContainer = styled(Box)(({ theme }) => ({
  width: "600px",
  "@media (max-width: 600px)": {
    width: "100%",
    height: "400px",
  },
  background:
    theme.palette.mode === "light"
      ? "linear-gradient(rgba(240, 240, 240, 0.1), rgba(240, 240, 240, 0.1)) padding-box, linear-gradient(145deg, transparent 35%, #e0761f, #1F89E0) border-box"
      : "linear-gradient(#212121, #212121) padding-box, linear-gradient(145deg, transparent 35%, #e0761f, #1F89E0) border-box",
  border: "2px solid transparent",
  padding: "32px 24px",
  fontSize: "14px",
  fontFamily: "inherit",
  color: theme.palette.mode === "light" ? "#000" : "#fff",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  boxSizing: "border-box",
  borderRadius: "16px",
  backgroundSize: "200% 100%",
  animation: "gradient 5s ease infinite",
  "@keyframes gradient": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
}));

const AnimatedForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();
  const theme = useTheme();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post("/.netlify/function/contact", data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AnimatedContainer component="form" onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6" component="h1" gutterBottom>
        Contact me
      </Typography>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{ required: "Email is required" }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            variant="outlined"
            error={!!errors.email}
            helperText={
              errors.email && typeof errors.email.message === "string"
                ? errors.email.message
                : ""
            }
            fullWidth
            required
            InputProps={{
              style: {
                color: theme.palette.mode === "light" ? "#000" : "#fff",
                backgroundColor: "transparent",
                borderRadius: "8px",
                borderColor:
                  theme.palette.mode === "light" ? "#cccccc" : "#414141",
              },
            }}
            InputLabelProps={{
              style: {
                color: theme.palette.mode === "light" ? "#717171" : "#cccccc",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor:
                    theme.palette.mode === "light" ? "#cccccc" : "#414141",
                },
                "&:hover fieldset": {
                  borderColor:
                    theme.palette.mode === "light" ? "#000" : "#e81cff",
                },
                "&.Mui-focused fieldset": {
                  borderColor:
                    theme.palette.mode === "light" ? "#000" : "#e81cff",
                },
              },
            }}
          />
        )}
      />
      <Controller
        name="textarea"
        control={control}
        defaultValue=""
        rules={{ required: "This field is required" }}
        render={({ field }) => (
          <TextField
            {...field}
            label="How Can I Help You?"
            variant="outlined"
            multiline
            rows={4}
            error={!!errors.textarea}
            helperText={
              errors.textarea && typeof errors.textarea.message === "string"
                ? errors.textarea.message
                : ""
            }
            fullWidth
            required
            InputProps={{
              style: {
                color: theme.palette.mode === "light" ? "#000" : "#fff",
                backgroundColor: "transparent",
                borderRadius: "8px",
                borderColor:
                  theme.palette.mode === "light" ? "#cccccc" : "#414141",
              },
            }}
            InputLabelProps={{
              style: {
                color: theme.palette.mode === "light" ? "#717171" : "#cccccc",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor:
                    theme.palette.mode === "light" ? "#cccccc" : "#414141",
                },
                "&:hover fieldset": {
                  borderColor:
                    theme.palette.mode === "light" ? "#000" : "#e81cff",
                },
                "&.Mui-focused fieldset": {
                  borderColor:
                    theme.palette.mode === "light" ? "#000" : "#e81cff",
                },
              },
            }}
          />
        )}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          alignSelf: "flex-start",
          fontFamily: "inherit",
          color: theme.palette.mode === "light" ? "#000" : "#717171",
          fontWeight: 600,
          background:
            theme.palette.mode === "light"
              ? "rgba(240, 240, 240, 0.8)"
              : "#313131",
          border: `1px solid ${
            theme.palette.mode === "light" ? "#cccccc" : "#414141"
          }`,
          padding: "12px 16px",
          fontSize: "inherit",
          gap: "8px",
          marginTop: "8px",
          cursor: "pointer",
          borderRadius: "6px",
          "&:hover": {
            backgroundColor:
              theme.palette.mode === "light" ? "#e0e0e0" : "#fff",
            borderColor: theme.palette.mode === "light" ? "#000" : "#fff",
            color: theme.palette.mode === "light" ? "#000" : "#000",
          },
          "&:active": {
            transform: "scale(0.95)",
          },
        }}
      >
        Submit
      </Button>
    </AnimatedContainer>
  );
};

export default AnimatedForm;
