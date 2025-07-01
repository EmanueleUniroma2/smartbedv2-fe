import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import { appRoutes, ROUTES } from "./routes";
import MenuIcon from "@mui/icons-material/Menu";
import HistoryIcon from "@mui/icons-material/History";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import NavGuard from "./components/navGuard";
import "./style.scss";
import { useAppSelector } from "./redux/hooks"; // Adjust path as needed

const drawerWidth = 240;

function App() {
  const navigate = useNavigate();
  const loggedUser = useAppSelector((state) => state.loggedUser.user);

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const navItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: ROUTES.DASHBOARD },
    { text: "Readings", icon: <MenuBookIcon />, path: ROUTES.READING_PAGE },
    { text: "History", icon: <HistoryIcon />, path: ROUTES.HISTORY },
  ];

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* 🧭 Header */}
      <header>
        <AppBar position="static">
          <Toolbar>
            {loggedUser && (
              <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
            )}
            <Typography
              variant="h6"
              component="div"
              onClick={() => {
                navigate(ROUTES.HOME);
              }}
            >
              SmartBed V2 🛏️
            </Typography>
          </Toolbar>
        </AppBar>
      </header>

      {/* 🛤️ Route Wrapper */}
      <main>
        <Drawer
          anchor="left"
          open={open}
          onClose={toggleDrawer}
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
        >
          <Toolbar />
          <Divider />
          <List>
            {navItems.map(({ text, icon, path }) => (
              <ListItem
                component="button"
                key={text}
                onClick={() => {
                  navigate(path);
                  toggleDrawer();
                }}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Box component="main" flexGrow={1} padding={3}>
          <Routes>
            {appRoutes.map(({ path, component, navGuardItems }) => (
              <Route
                key={path}
                path={path}
                element={
                  <NavGuard
                    component={component}
                    navGuardItems={navGuardItems}
                  />
                }
              />
            ))}
          </Routes>
        </Box>
      </main>

      {/* 🧱 Footer */}
      <footer>
        <Box
          component="footer"
          padding={2}
          textAlign="center"
          bgcolor="#f5f5f5"
        >
          <Typography variant="body2" color="textSecondary">
            &copy; {new Date().getFullYear()} SmartBed V2 is a product of
            Dominolabs S.r.L - All rights reserved 💡
          </Typography>
        </Box>
      </footer>
    </Box>
  );
}

export default App;
