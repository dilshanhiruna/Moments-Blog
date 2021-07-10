import React from "react";
import { Container } from "@material-ui/core";

import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";

require("dotenv").config();

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Home />
      </Container>
    </BrowserRouter>
  );
};

export default App;
