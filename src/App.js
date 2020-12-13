import React from "react";
import "./styles.css";
import Login from "./Login";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}
