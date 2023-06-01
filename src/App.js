import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainNavigation from "./Navigation/MainNavigation";
import Home from "./Pages/Home";
import Buy from "./Pages/Buy";
import Sell from "./Pages/Sell";
import NewMeter from "./Pages/NewMeter";
function App() {
  return (
    <main>
      <Router>
        <MainNavigation />
        <Switch>
          <Route path="/" exact>
            <Home />
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
          <Redirect to="/" />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
