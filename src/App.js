import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.scss";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import { selectCategoryNames } from "./redux/shop/shop.selector";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/jackets" render={() => <div>Jackets</div>} />
      </Switch>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategoryNames,
});

export default connect(mapStateToProps)(App);
