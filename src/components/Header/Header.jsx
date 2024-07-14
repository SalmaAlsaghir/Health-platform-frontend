import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = (
    <div onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemText primary={t("dashboard")} />
        </ListItem>
        <ListItem button component={Link} to="/login">
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/register">
          <ListItemText primary="Register" />
        </ListItem>
        <ListItem>
          <Button onClick={() => changeLanguage("en")}>EN</Button>
          <Button onClick={() => changeLanguage("ar")}>AR</Button>
        </ListItem>
      </List>
    </div>
  );

  return (
    <AppBar position="static">
      <Toolbar className="header">
        <Typography variant="h6" className="header__logo">
          LOGO
        </Typography>
        <div className="header__nav_items">
          <div className="header__nav_links">
            <Link to="/dashboard">{t("dashboard")}</Link>
            <Link to="/login">Login</Link>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
          </div>
          <div className="header__language_buttons">
            <button className="header__language_button" onClick={() => changeLanguage("en")}>EN</button>
            <button className="header__language_button" onClick={() => changeLanguage("ar")}>AR</button>
          </div>
        </div>
        <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} className="header__burger_menu">
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          {menuItems}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
