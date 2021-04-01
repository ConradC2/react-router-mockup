
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Products from './components/Products'
import Home from './components/HomePage'
import ViewCart from './components/ViewCart'

function App() {
  return (
    <div className="App">

<Router>
      <div>
        <ul>
          <li>
            <Link to="/HomePage">Home</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
          <li>
            <Link to="/ViewCart">ViewCart</Link>
          </li>
          <li>
            <Link to="/CheckOut">CheckOut</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="./HomePage">
            <Home />
          </Route>
          <Route exact path="./components/Products">
            <Products />
          </Route>
          <Route path="./components/ViewCart">
            <ViewCart />
          </Route>
        </Switch>
      </div>
    </Router>

      <header className="App-header">
      
      <h1> Ecommerce Mock Up</h1>
     
     
    </header>

    </div>
  );
}

export default App;
