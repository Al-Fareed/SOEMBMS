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
import BookElectricity from "./Pages/BookElectricity";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <main>
      <Router>
        <MainNavigation 
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
        <Switch>
          <Route path="/" exact>
            <Home 
              loggedIn={loggedIn}
            />
          </Route>
          <Route path="/sell" exact>
            <Sell />
          </Route>
          <Route path="/buy" exact>
            <Buy />
          </Route>
          <Route path="/new" exact>
            <NewMeter />
          </Route>
          <Route path="/book" exact>
            <BookElectricity />
          </Route>
          <Route path="/logout" exact>
            <Login 
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
            />
          </Route>
          
          <Redirect to="/" />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
