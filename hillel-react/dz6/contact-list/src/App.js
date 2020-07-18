import React from "react";
import About from "./components/About";
import ContactList from "./components/ContactList";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <header>
        <center>
          <h2>Contact List</h2>
        </center>
        <ul>
          <li>
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            <Link to="/contact-list">Contact List</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </header>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/contact-list">
          <ContactList />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
