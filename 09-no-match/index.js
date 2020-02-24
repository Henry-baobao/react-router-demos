import React from 'react';
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Link,
    NavLink,
    Redirect,
    Route
} from "react-router-dom";
import Home from './modules/Home';
import WillMatch from './modules/WillMatch';
import NoMatch from './modules/NoMatch';

ReactDOM.render((
    <Router>
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/old-match'>Old Match, to be redireted</Link>
                </li>
                <li>
                    <Link to='/will-match'>Will Match</Link>
                </li>
                <li>
                    <Link to='/will-not-match'>Will Not Match</Link>
                </li>
                <li>
                    <Link to='/alse/will/not/match'>Also Will Not Match</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/old-match'>
                    <Redirect to='/will-match'/>
                </Route>
                <Route path='/will-match'>
                    <WillMatch />
                </Route>
                <Route path='*'>
                    <NoMatch/>
                </Route>
            </Switch>
        </div>
    </Router>
), document.getElementById('app'));