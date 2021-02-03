import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/homePage/";
import ProfilePage from "./components/Profilepage/";
import AuthPage from "./components/Authpage/";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/profile/:id">
            <ProfilePage />
          </Route>
          <Route exact path="/authProfile">
            <AuthPage />
          </Route>
          <Route exact path="/test"></Route>
        </Router>
      </div>
    );
  }
}

export default App;
