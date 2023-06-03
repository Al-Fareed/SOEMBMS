import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import React, { useState } from "react";
import MainNavigation from "./Navigation/MainNavigation";
import Home from "./Pages/Home";
import Buy from "./Pages/Buy";
import Sell from "./Pages/Sell";
import NewMeter from "./Pages/NewMeter";
import Login from "./Pages/Login";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <main>
      <Router>
        <MainNavigation 
          loggedIn={loggedIn}
        />
        <Switch>
          <Route path="/" exact>
            <Home 
              loggedIn={loggedIn}
            />
          </Route>
          <Route path="/Sell" exact>
            <Sell />
          </Route>
          <Route path="/Buy" exact>
            <Buy />
          </Route>
          <Route path="/New" exact>
            <NewMeter />
          </Route>
          <Route path="/logout" exact>
            <Login />
          </Route>
          
          <Redirect to="/" />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
