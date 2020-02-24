import React, { Component } from 'react';
import {
    Link,
    Switch,
    useRouteMatch,
    useParams,
    Route
} from 'react-router-dom';

export default function Repos() {
    let match = useRouteMatch();
    return (
        <div>
            <h2>Repos</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props`}>Props</Link>
                </li>
            </ul>
            <Switch>
                {/* Note how these two routes are ordered. The more specific path '/:topicID'
                comes before path={match.path} so that route will render when view one 
                specific route */}
                <Route path={`${match.path}/:topicID`} component={Topic}></Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    )
}

function Topic(){
    let {topicID} = useParams();
    return(
        <h3>Request topic is: {topicID}</h3>
    )
}
