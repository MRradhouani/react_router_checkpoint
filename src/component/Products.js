import React from 'react';
import NIKE from './Productspage/NIKE';
import US from './Productspage/US';
import Lee from './Productspage/Lee';
import ADIDAS from './Productspage/ADIDAS';
import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";



function Products() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <div className="Prodect">
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${url}/NIKE`}>NIKE Liteforce Blue Sneakers</Link>
          </li>
          <li>
            <Link to={`${url}/US`}>U.S. POLO ASSN. Slippers</Link>
          </li>
          <li>
            <Link to={`${url}/ADIDAS`}>ADIDAS Adispree Running Shoes</Link>
          </li>
          <li>
            <Link to={`${url}/Lee`}>Lee Cooper Mid Sneakers</Link>
          </li>
        </ul>
      </div>


      <Switch>

        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        
        {/* <Route exact path="/NIKE">
          <h3>Please select a topic.</h3>
          <NIKE />
        </Route> */}

        <Route path={`${path}/NIKE`}>
          <NIKE />
        </Route>

        <Route path={`${path}/US`}>
          
          <US />
          
        </Route>

        <Route path={`${path}/ADIDAS`}>
          
          <ADIDAS />
          
        </Route>


        <Route path={`${path}/Lee`}>
          
          <Lee />
          
        </Route>
        

      </Switch>
    </div>
  );
}

// function Topic() {
// //   // The <Route> that rendered this component has a
// //   // path of `/topics/:topicId`. The `:topicId` portion
// //   // of the URL indicates a placeholder that we can
// //   // get from `useParams()`.
//   let { topicId } = useParams();

//   return (
//     <div>
       
//        <h3>{topicId}</h3>
//     </div>
//   );
// }

export default Products
