import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "@material-ui/core/Container/Container";
import Navigation from "./components/common/Navigation";

function App() {
  return (
    <Router>
      <Container maxWidth="lg">
        <Navigation />
      </Container>
    </Router>
  );
}

export default App;
