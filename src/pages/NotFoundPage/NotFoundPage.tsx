import React from "react";
import { Container, Typography } from "@mui/material";
import "./style.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";

const NotFoundPage: React.FC = () => {
  return (
    <Container className="not-found-page">
      <Typography variant="h2" color="error">
        404
      </Typography>
      <Typography variant="h5">
        Oops! La pagina cercata non esiste, oppure richiede che tu esegua
        l'accesso 🚧
      </Typography>
      <Link to={ROUTES.LOGIN}>Vai al login</Link>
    </Container>
  );
};

export default NotFoundPage;
