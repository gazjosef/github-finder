import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubState from "./Components/Context/Github/GithubState";
import AlertState from "./Components/Context/Alert/AlertState";
import "./App.css";

import NavBar from "./Components/Layout/Navbar";
import User from "./Components/Users/User";
import Alert from "./Components/Layout/Alert";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import NotFound from "./Components/Pages/NotFound";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <NavBar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
