import React from 'react'
import Shoes from './Router/Shoes';
import Boots from './Router/Boots';
import Footwear from './Router/Footwear';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Category() {
    return (
        <div>
            <h1> Category Page</h1>
            <Router>
                <ul>
                    <li><Link to="/Shoes">Shoes</Link></li>
                    <li><Link to="/Boots">Boots</Link></li>
                    <li><Link to="/Footwear">Footwear</Link></li>
                </ul>




                <Switch>
                    <Route exact path="/Shoes" component={Shoes}>
                        <Shoes />
                    </Route>
                    <Route exact path="/Boots" component={Boots}>
                        <Boots />
                    </Route>
                    <Route exact path="/Footwear" component={Footwear}>
                        <Footwear />
                    </Route>

                </Switch>

            </Router>
        </div>
    )
}

export default Category
