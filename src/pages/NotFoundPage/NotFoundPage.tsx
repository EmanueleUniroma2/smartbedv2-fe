import React from "react";
import { Container, Typography } from "@mui/material";
import "./style.scss";

const NotFoundPage: React.FC = () => {
  return (
    <Container className="not-found-page">
      <Typography variant="h2" color="error">
        404
      </Typography>
      <Typography variant="h5">Oops! This page took a wrong turn 🚧</Typography>
    </Container>
  );
};

export default NotFoundPage;
