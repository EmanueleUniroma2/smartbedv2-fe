import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import { appRoutes, ROUTES } from "./routes";
import NavGuard from "./components/navGuard";
import "./style.scss";

function App() {
  const navigate = useNavigate();
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* 🧭 Header */}
      <header>
        <AppBar position="static">
          <Toolbar>
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
