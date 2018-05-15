import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import DocumentTitle from "react-document-title";
import NavBar from "./components/NavBar";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register"
import Dashboard from "./pages/Dashboard";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register}/>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="*" component={NoMatch} /> 
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
