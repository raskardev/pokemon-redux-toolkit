import React from "react";

import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router";

import Home from "./screens/Home";

const App = () => (
  <Container className="mt-4 text-center">
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </Container>
);

export default App;
