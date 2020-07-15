import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from 'react-router-dom';
import Home from './components/Home';
import Container from '@material-ui/core/Container/Container';
import Typography from '@material-ui/core/Typography';
import SimpleMenu from './components/SimpleMenu';


function App() {
  return (
    <Router>
      <Container maxWidth="lg">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
          <SimpleMenu></SimpleMenu>
        </Typography>
      </Container>
    </Router>
  );
}

export default App;
