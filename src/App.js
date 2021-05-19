import "./App.css";
import Intro from "./Intro";
import { useState } from "react";
import SortingVisualizer from "./SortingVisualizer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/visualizer">
            <SortingVisualizer />
          </Route>
          <Route path="/">
            <Intro />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

/* Difficulties during project
1. Was not making changes in original array and pushing the changes in animation only.
*/
