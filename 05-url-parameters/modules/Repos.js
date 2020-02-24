import React, { Component } from 'react';
import {
    Link,
    Switch,
    NavLink,
    BrowserRouter as Router,
    useRouteMatch,
    useParams,
    Route
} from 'react-router-dom';

export default function Repos() {
    //we can use 'useRouteMatch' hook here to access parent route url 
    let match = useRouteMatch();
    console.log(match);
    return (
        // <Router>
            <div>
                <h2>Repos</h2>
                <ul>
                    <li><Link to={`${match.url}/netflix`}>Netflix</Link></li>
                    <li><NavLink to={`${match.url}/google`}>Google</NavLink></li>
                    <li><Link to={`${match.url}/yahoo`}>Yahoo</Link></li>
                    <li><Link to={`${match.url}/instagram`}>Instagram</Link></li>
                </ul>

                <Switch>
                    <Route path={`${match.url}/:id`} children={<Child />}></Route>
                </Switch>
            </div>
        // </Router>
    )
}

function Child() {
    //we can use the 'useParams' hook to access the dynamic piece of url
    let { id } = useParams();

    console.log(useParams());

    return (
        <div>
            <h3>ID is: {id}</h3>
        </div>
    )
}
