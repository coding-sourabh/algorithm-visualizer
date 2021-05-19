import React from "react";
import "./intro.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SortingVisualizer from "./SortingVisualizer";
function intro() {
  return (
    <div className="intro__container">
      <Link to="/visualizer">
        <button>Enter Algorithm Visualizer</button>
      </Link>
    </div>
  );
}

export default intro;
