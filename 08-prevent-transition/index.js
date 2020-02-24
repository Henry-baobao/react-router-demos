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
import App from './modules/App';
import About from './modules/About';
import Repos from './modules/Repos';

ReactDOM.render((
    <Router>
        <div>
            <ul>
                <li>
                    <Link to='/'>App</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/repos'>Repos</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path='/'>
                    <App />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/repos'>
                    <Repos />
                </Route>
            </Switch>
        </div>
    </Router>
), document.getElementById('app'));