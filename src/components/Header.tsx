import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CloseIcon from "@mui/icons-material/Close";

const drawerWidth = 240;
const navItems = ["home", "about", "project", "contact"];

interface Props {
  window?: () => Window;
}

const Header: React.FC<Props> = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState("home");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // drawer on mobile
  const drawer = (
    <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          padding: 2,
        }}
      >
        <IconButton onClick={handleDrawerToggle} sx={{ color: "#1F89E0" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "70vh",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          hi <WavingHandIcon className="wave" sx={{ color: "gold" }} />
        </Typography>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              onClick={() => setActiveItem(item)}
              href={`#${item}`}
              sx={{
                textAlign: "center",
              }}
            >
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: activeItem === item ? "#fff" : "#1F89E0",
                  letterSpacing: "0.1rem",
                  ...(activeItem === item && {
                    backgroundColor: "#1fe0d6",
                    borderRadius: "4px",
                  }),
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#1F89E0",
          height: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="div">
            t r u o n g
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "1rem" }}>
            {navItems.map((item) => (
              <Button
                key={item}
                onClick={() => setActiveItem(item)}
                sx={{
                  color: "#fff",
                  textTransform: "lowercase",
                  letterSpacing: "4px",
                  fontSize: "1.2rem",
                  ...(activeItem === item && {
                    borderBottom: "2px solid #1fe0d6",
                    // paddingBottom: "0.005rem",
                    transition: "all 0.3s ease",
                  }),
                }}
                href={`#${item}`}
                className={activeItem === item ? "active" : ""}
              >
                {item}
              </Button>
            ))}
          </Box>
          <IconButton color="inherit" aria-label="toggle light dark mode">
            <DarkModeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Header;
