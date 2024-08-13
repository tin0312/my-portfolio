import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { useTheme } from "@mui/material/styles";
import ModeToggle from "../component/ModeToggle";
import Link from "@mui/material/Link";

const drawerWidth = 240;
type NavItem = "about" | "projects" | "contact";

const navItems: NavItem[] = ["about", "projects", "contact"];

interface Props {
  window?: () => Window;
  toggleTheme: () => void;
}

const Header: React.FC<Props> = (props) => {
  const { window, toggleTheme } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState<NavItem>("about");
  const theme = useTheme();

  const handleClickRoute = (
    item: NavItem,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    const id = `#${item}`;
    setActiveItem(item);
    setMobileOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getIcon = (item: NavItem) => {
    switch (item) {
      case "about":
        return (
          <PersonOutlineIcon
            sx={{
              fontSize: { xs: "2.5rem", sm: "1.5rem" },
              color: activeItem === item ? "#D07225" : "#FFF",
            }}
          />
        );
      case "projects":
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

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
        backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          boxShadow:
            theme.palette.mode === "light"
              ? "0px 2px 4px rgba(0, 0, 0, 0.1)"
              : "0px 4px 6px rgba(255, 255, 255, 0.1)",
        }}
      >
        <Link href="/about">
          <Box
            component="img"
            sx={{
              height: 100,
              width: 120,
            }}
            alt="logo"
            src="./assets/images/myLogo.png"
          />
        </Link>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "#FFF" }}>
          <CloseIcon sx={{ fontSize: "2.8rem" }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "90vh",
          justifyContent: "space-around",
        }}
      >
        {navItems.map((item) => (
          <Button
            key={item}
            onClick={(e) => handleClickRoute(item, e)}
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
            <Typography
              variant="body1"
              sx={{
                color: "#FFF",
                fontSize: "1.2rem",
                fontWeight: "bold",
                letterSpacing: "0.1rem",
              }}
            >
              {item}
            </Typography>
          </Button>
        ))}
      </Box>
    </Box>
  );

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
          boxShadow:
            theme.palette.mode === "light"
              ? ""
              : "0px 4px 6px rgba(255, 255, 255, 0.1)",
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
            <MenuIcon sx={{ fontSize: "2.8rem" }} />
          </IconButton>
          <Link href="/about">
            <Box
              component="img"
              sx={{
                display: { xs: "none", lg: "block" },
                height: 100,
                width: 120,
              }}
              alt="logo"
              src="./assets/images/myLogo.png"
            />
          </Link>

          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "1rem" }}>
            {navItems.map((item) => (
              <Button
                key={item}
                onClick={(e) => handleClickRoute(item, e)}
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
