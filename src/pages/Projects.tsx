import Box from "@mui/material/Box";

export default function Projects() {
  return (
    <>
      <Box 
          className = "projects-wrapper"
          id="projects"
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}  
        >
        <h1>Projects</h1>
      </Box>
    </>
  )
}
