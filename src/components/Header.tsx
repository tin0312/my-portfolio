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
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const drawerWidth = 240;
type NavItem = "home" | "about" | "project" | "contact";

const navItems: NavItem[] = ["home", "about", "project", "contact"];

interface Props {
  window?: () => Window;
}

const Header: React.FC<Props> = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState<NavItem>("home");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const getIcon = (item: NavItem) => {
    switch (item) {
      case "home":
        return <HomeOutlinedIcon sx={{fontSize: {xs: "2rem", sm: "1.5rem"}, color: activeItem === item ? "#D07225" : "#FFF"}}/>;
      case "about":
        return <PersonOutlineIcon  sx={{fontSize: {xs: "2rem", sm: "1.5rem"}, color: activeItem === item ? "#D07225" : "#FFF"}}/>;
      case "project":
        return <WorkOutlineIcon  sx={{fontSize: {xs: "2rem", sm: "1.5rem"}, color: activeItem === item ? "#D07225" : "#FFF"}}/>;
      case "contact":
        return <AlternateEmailIcon  sx={{fontSize: {xs: "2rem", sm: "1.5rem"}, color: activeItem === item ? "#D07225" : "#FFF"}}/>;
      default:
        return null;
    }
  };

  const drawer = (
    <Box className= "site-wrapper" sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          padding: 2,
        }}
      >
        <IconButton onClick={handleDrawerToggle} sx={{ color: "#FFF" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "95vh",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "1.7rem", fontWeight: "bold" }}>
          Hi<WavingHandIcon className="wave" sx={{ color: "gold" , marginLeft: "0.7rem"}} />
        </Typography>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              onClick={() => setActiveItem(item)}
              href={`#${item}`}
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                "&:hover": 
                {  
                transform:" translateY(-4px), translateX(-2px)",
                boxShadow: "0px 0px 20px 5px  #2583D0"
              }
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
                  display: "flex",
                  gap: "0.5rem",
                  color: "#fff",
                  textTransform: "lowercase",
              
                  letterSpacing: "4px",
                  fontSize: "1.2rem", 
                  "&:hover": 
                  {  
                  transform:" translateY(-4px), translateX(-2px)",
                  boxShadow: "2px 5px 0 0 #2583D0"
                }
                }}
                href={`#${item}`}
                className={activeItem === item ? "active" : ""}
              >
                 {getIcon(item)}
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
