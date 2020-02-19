import React from 'react';
import "./App.css";

import Home from "./pages/home";
import Clients from "./pages/clients";
import Psychics from "./pages/psychics";
import Psychic from "./pages/psychic";
import Error from "./pages/error";
import Navbar from "./components/navbar";
import {Route, Switch} from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Clients" component={Clients}/>
        <Route exact path="/Psychics" component={Psychics}/>
        <Route exact path="/Psychics/:PsychicID" component={Psychic}/>
        <Route component={Error}/>
      </Switch>

    </div>
  );
}

export default App;
