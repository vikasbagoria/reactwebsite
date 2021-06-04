import React from "react";
import './App.css';
import Home from "./Home";
import Contact from "./Contact";
import Service from "./Service";
import About from "./About";
import Navbar from "./Navbar";
import { Switch, Route,Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const App = () => {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component ={About} />
        <Route exact path="/service" component ={Service} />
        <Route exact path="/contact" component ={Contact} />
        <Redirect to="/" />
      </Switch>
    </>

  );
};


export default App;
