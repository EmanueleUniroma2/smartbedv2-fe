import React from "react";
import { Typography, Container } from "@mui/material";
import "./style.scss";

const HomePage: React.FC = () => {
  return (
    <Container className="home-page">
      <Typography variant="h3" gutterBottom>
        Home Page di prova
      </Typography>
    </Container>
  );
};

export default HomePage;
