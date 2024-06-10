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
import CloseIcon from "@mui/icons-material/Close";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { useTheme } from "@mui/material/styles";
import ModeToggle from "../component/ModeToggle";

const drawerWidth = 240;
type NavItem = "home" | "about" | "project" | "contact";

const navItems: NavItem[] = ["home", "about", "project", "contact"];

interface Props {
  window?: () => Window;
  toggleTheme: () => void;
}

const Header: React.FC<Props> = (props) => {
  const { window, toggleTheme } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState<NavItem>("home");
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const getIcon = (item: NavItem) => {
    switch (item) {
      case "home":
        return (
          <HomeOutlinedIcon
            sx={{
              fontSize: { xs: "2.5rem", sm: "1.5rem" },
              color: activeItem === item ? "#D07225" : "#FFF",
            }}
          />
        );
      case "about":
        return (
          <PersonOutlineIcon
            sx={{
              fontSize: { xs: "2.5rem", sm: "1.5rem" },
              color: activeItem === item ? "#D07225" : "#FFF",
            }}
          />
        );
      case "project":
        return (
          <WorkOutlineIcon
            sx={{
              fontSize: { xs: "2.5rem", sm: "1.5rem" },
              color: activeItem === item ? "#D07225" : "#FFF",
            }}
          />
        );
      case "contact":
        return (
          <AlternateEmailIcon
            sx={{
              fontSize: { xs: "2.5rem", sm: "1.5rem" },
              color: activeItem === item ? "#D07225" : "#FFF",
            }}
          />
        );
      default:
        return null;
    }
  };

  const drawer = (
    <Box
      className="site-wrapper"
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(rgb(37, 131, 208, 0.9), rgba(14, 63, 104, 0.25))"
            : "none",
            backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#fff', // Customize based on the mode
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingX: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", height: "6.25rem" }}>
          <Typography sx={{ fontSize: "1.7rem", fontWeight: "bold" }}>
            h i
          </Typography>
          <WavingHandIcon
            className="waving-hand"
            sx={{ color: "gold", marginLeft: "0.7rem", fontSize: "1.7rem" }}
          />
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "#FFF" }}>
          <CloseIcon sx={{fontSize: "2.8rem"}}/>
        </IconButton>
      </Box>
      <Divider />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "90vh",
          justifyContent: "space-around",
        }}
      >
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              onClick={() => setActiveItem(item)}
              href={`#${item}`}
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                "&:hover": {
                  transform: " translateY(-4px), translateX(-2px)",
                  boxShadow: "0px 0px 20px 5px  #2583D0",
                },
              }}
            >
              {getIcon(item)}
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "#FFF",
                  letterSpacing: "0.1rem",
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
          background: "transparent",
          height: "6.25rem",
          display: "flex",
          justifyContent: "center",
           boxShadow: theme.palette.mode === 'light' 
                ? ''
                : '0px 4px 6px rgba(255, 255, 255, 0.1)', 
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
            <MenuIcon sx={{fontSize: "2.8rem"}}/>
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{ letterSpacing: "0.5rem" }}
          >
            truong
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "1rem" }}>
            {navItems.map((item) => (
              <Button
                key={item}
                onClick={() => setActiveItem(item)}
                sx={{
                  display: "flex",
                  gap: "0.5rem",
                  color: "#fff",
                  textTransform: "lowercase",

                  letterSpacing: "4px",
                  fontSize: "1.2rem",
                  "&:hover": {
                    transform: " translateY(-4px), translateX(-2px)",
                    boxShadow: "2px 5px 0 0 #2583D0",
                  },
                }}
                href={`#${item}`}
                className={activeItem === item ? "active" : ""}
              >
                {getIcon(item)}
                {item}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="toggle light dark mode"
            onClick={toggleTheme}
          >
            <ModeToggle />
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