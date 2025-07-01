import React from "react";
import { Typography, Container } from "@mui/material";
import "./style.scss";

const DashBoardPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        dashboard
      </Typography>
    </Container>
  );
};

export default DashBoardPage;
