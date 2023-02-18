import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import List from "./components/List";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" component={List} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
