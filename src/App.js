import React from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./page/LandingPage/LandingPage";
import Home from "./page/Home/Home";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
      {/* <LandingPage /> */}
      {/* <Login /> */}
    </div>
  );
};

export default App;
