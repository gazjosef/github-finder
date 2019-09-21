import React, { Component } from "react";
import "./App.css";

import NavBar from "./Components/Layout/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar title="Github Finder" icon="fab fa-github" />
      </div>
    );
  }
}

export default App;
