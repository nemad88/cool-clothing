import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/jackets" render={() => <div>Jackets</div>} />
      </Switch>
    </>
  );
}

export default App;
