import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubState from "./Components/Context/Github/GithubState";
import "./App.css";

import NavBar from "./Components/Layout/Navbar";
import Search from "./Components/Users/Search";
import Users from "./Components/Users/Users";
import User from "./Components/Users/User";
import Alert from "./Components/Layout/Alert";
import About from "./Components/Pages/About";

const App = () => {
  const [alert, setAlert] = useState(null);

  // Set Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search setAlert={showAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
