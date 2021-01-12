import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/";
import BooksSearch from "./components/BooksSearch/";
import FavoriteBooks from "./components/Favoritebooks/";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Route exact path="/">
            <BooksSearch />
          </Route>
          <Route exact path="/profile">
            <FavoriteBooks />
          </Route>
          <Route exact path="/authProfile"></Route>
          <Route exact path="/test"></Route>
        </Router>
      </div>
    );
  }
}

export default App;
