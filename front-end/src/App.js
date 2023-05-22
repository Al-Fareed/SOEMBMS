import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch,
} from "react-router-dom";
import MainNavigation from "./Navigation/MainNavigation";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
function App() {
  return (
    <main>
        <MainNavigation />
    </main>
  );
}

export default App;
