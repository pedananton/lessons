import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from 'react-router-dom';
import Home from './components/home/Home';
import Container from '@material-ui/core/Container/Container';
import Typography from '@material-ui/core/Typography';
import Navigation from './components/common/Navigation';
import Grid from '@material-ui/core/Grid';
import Users from './components/users/Users'
import Albums from './components/albums/Albums'

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
                <Route path="/albums">
                  <Albums />
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
