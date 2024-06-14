import Box from "@mui/material/Box";

export default function About() {
  return (
    <>
      <Box 
          className="about-wrapper"
          id="about"
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          >
        <h1>About</h1>
      </Box>
    </>
  );
}
