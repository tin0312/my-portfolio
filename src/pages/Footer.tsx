import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
  const [currentYear] = useState(new Date().getFullYear());
  const theme = useTheme();

  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '16px',
        backgroundColor: theme.palette.background.paper,
        backgroundImage: theme.palette.mode === "light"
          ? "linear-gradient(135deg, rgba(37, 131, 208, 0.9) 30%, rgba(14, 63, 104, 0.5) 100%)"
          : "none",
        borderTop: `1px solid ${theme.palette.divider}`,
        mt: 'auto'
      }}
    >
      <Typography 
        sx={{ 
          fontSize: '14px', 
          color: theme.palette.text.secondary 
        }}
      >
        Design & Developed by Truong | &copy; {currentYear} All rights reserved
      </Typography>
    </Box>
  );
}
