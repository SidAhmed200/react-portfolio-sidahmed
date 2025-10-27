import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import ListIcon from "@mui/icons-material/List";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const drawerWidth = 240;

// ✅ Sections de ton portfolio (nom + id correspondants aux sections)
const navItems: [string, string][] = [
  ["Home", "home"],
  ["Expertise", "expertise"],
  ["Projects", "projects"],
  ["About", "about"],
  ["Contact", "contact"],
];

interface NavigationProps {
  parentToChild: {
    mode: "light" | "dark";
  };
  modeChange: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ parentToChild, modeChange }) => {
  const { mode } = parentToChild;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  // ✅ Changement de style lors du scroll
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        setScrolled(window.scrollY > 20);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Scroll fluide vers les sections
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ✅ Menu mobile
  const drawer = (
    <Box
      className="navigation-bar-responsive"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <p className="mobile-menu-top">
        <ListIcon /> Menu
      </p>
      <Divider />
      <List>
        {navItems.map(([label, id]) => (
          <ListItem key={label} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} onClick={() => scrollToSection(id)}>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        id="navigation"
        className={`navbar-fixed-top${scrolled ? " scrolled" : ""}`}
        sx={{
          backgroundColor: scrolled
            ? mode === "dark"
              ? "rgba(20, 20, 20, 0.9)"
              : "rgba(255, 255, 255, 0.9)"
            : "transparent",
          boxShadow: scrolled ? 2 : 0,
          backdropFilter: "blur(10px)",
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <Toolbar className="navigation-bar">
          {/* Bouton menu mobile */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo ou nom */}
          <Box
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              letterSpacing: 1,
              cursor: "pointer",
              fontSize: "1.1rem",
            }}
            onClick={() => scrollToSection("home")}
          >
            Sidahmed Mekiri
          </Box>

          {/* Mode clair/sombre */}
          <IconButton color="inherit" onClick={modeChange}>
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

          {/* Menu bureau */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(([label, id]) => (
              <Button
                key={label}
                onClick={() => scrollToSection(id)}
                sx={{
                  color: mode === "dark" ? "#fff" : "#000",
                  fontWeight: 500,
                  textTransform: "none",
                }}
              >
                {label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer mobile */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navigation;
