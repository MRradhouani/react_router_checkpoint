import React from 'react';
import Home from './component/Home';
import Category from './component/Category';
import Products from './component/Products';
import Admin from './component/Admin';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";






function App() {



  return (
    <div >
      <Router>
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Category">Category</Link> </li>
          <li><Link to="/Products">Products</Link></li>
          <li><Link to="/Admin">Admin area</Link></li>
        </ul>




        <Switch>
          <Route exact path="/Home" component={Home}>
            <Home />
          </Route>
          <Route path="/Category" component={Category}>
            <Category />
          </Route>
          <Route path="/Products" component={Products}>
            <Products />
          </Route>
          <Route path="/Admin" component={Admin}>
            <Admin />
          </Route>
        </Switch>

      </Router>



    </div>
  );
}

export default App;
