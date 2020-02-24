import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    NavLink,
    Redirect,
    Route
} from "react-router-dom";
import Home from './modules/Home';
import LoginPage from './modules/LoginPage';
import PrivateRoute from './modules/PrivateRoute';
import Protected from './modules/Protected';
import AuthButton from './modules/AuthButton';

ReactDOM.render((
    <Router>
        <div>
            <AuthButton />

            <ul>
                <li>
                    <Link to="/home">Home Page</Link>
                </li>
                <li>
                    <NavLink to="/protected" activeClassName='Nav-about'>Protected Page</NavLink>
                </li>
            </ul>

            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <PrivateRoute path="/protected">
                    <Protected />
                </PrivateRoute>
            </Switch>
        </div>
    </Router>
), document.getElementById('app'));