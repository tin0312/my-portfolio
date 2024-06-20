import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import projectData, { Project } from "../data/projectData";
import { useTheme } from "@mui/material/styles";

export default function Projects() {
  const theme = useTheme();

  return (
    <Box
      className="projects-wrapper"
      id="projects"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        "@media (max-width: 600px)": {
          gap: "2rem",
          px: 0,
        },
      }}
    >
      <Typography variant="h2" sx={{ my: 10 }}>
        Projects
      </Typography>
      <Box
        sx={{
          display: "flex",
          // justifyContent: "space-between",
          gap: "8rem",
          width: "80%",
          flexWrap: "wrap",
          "@media (max-width: 600px)": {
            width: "90%",
            flexDirection: "column",
            gap: "4rem",
          },
        }}
      >
        {projectData.map((project: Project, index: number) => (
          <Card
            key={index}
            sx={{
              maxWidth: 345,
              height: 375,
              boxShadow:
                theme.palette.mode === "light"
                  ? "0px 0px 100000px rgba(0, 0, 0, 0.1)"
                  : "0px 0px 100000px rgba(255, 255, 255, 0.1)",
              "@media (max-width: 600px)": { height: "auto" },
            }}
          >
            <CardMedia
              component="img"
              alt={project.name}
              height="140"
              image={project.img}
              sx={{
                boxShadow: '0 0px 8px rgba(0, 0, 0, 0.3)',
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={project.liveLink} target="_blank">
                Live Demo
              </Button>
              <Button size="small" href={project.githubLink} target="_blank">
                Source Code
              </Button>
            </CardActions>
            <Box sx={{display: "flex", gap: "1rem", p:2}}>
              {project.techStacks.map((techStack, index) => (
                <Box
                  key={index}
                  component="img"
                  alt={project.name}
                  src={techStack}
                  width={30}
                  height="100%"
                />
              ))}
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
