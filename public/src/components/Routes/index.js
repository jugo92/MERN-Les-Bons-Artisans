import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "../../pages/Home";
import Product from "../../pages/Product";

const index = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product" exact component={Product} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default index;
