
import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Products from './components/Products'
import Home from './components/HomePage'
import ViewCart from './components/ViewCart'
import IndividualProduct from './components/IndividualProductPage'

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
            <Link to="/IndividualProductPage">Individual Product</Link>
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
          <Route path="./HomePage" component={Home}>
            <Home />
          </Route>
          <Route  path="./components/Products" component={Products}>
            <Products />
          </Route>
          <Route path="./components/ViewCart" component={ViewCart}>
            <ViewCart />
          </Route>
          <Route path="./components/IndividualProductPage" component={IndividualProduct}>
            <IndividualProduct />
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
