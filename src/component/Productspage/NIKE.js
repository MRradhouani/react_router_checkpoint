import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";

function NIKE() {
    let { topicId } = useParams();

    return (
        <div>
            <h1>NIKE Liteforce Blue Sneakers</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.</p>
            <></>
            <h2>Available</h2>
        </div>
    )
}

export default NIKE
