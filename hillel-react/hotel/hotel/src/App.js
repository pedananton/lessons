import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Container from "@material-ui/core/Container/Container";
import Navigation from "./components/common/Navigation";
import Grid from "@material-ui/core/Grid";
import Home from "./components/home/Home";
import Users from "./components/users/Users";
import Rooms from "./components/rooms/Rooms";

function App() {
  return (
    <Router>
      <Container maxWidth="lg">
        <Navigation />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/rooms">
                <Rooms />
              </Route>
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
}

export default App;
