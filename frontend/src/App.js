import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Cart, ProductScreen } from "./pages";
import { Backdrop, Navbar, SideDrawer } from "./components";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
