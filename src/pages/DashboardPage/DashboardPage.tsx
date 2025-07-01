import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  CssBaseline,
  Divider,
} from "@mui/material";

import "./style.scss";
import { href, useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";

const DashBoardPage: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h3" gutterBottom>
          dashboard
        </Typography>
        {/* Content goes here */}
      </Box>
    </Box>
  );
};

export default DashBoardPage;
