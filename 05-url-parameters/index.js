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
import Repos from './modules/Repos';
import About from './modules/About';

ReactDOM.render((
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        {/* <Link to="/about">About</Link> */}
                        <NavLink to="/about" activeClassName='Nav-about'>About</NavLink>
                    </li>
                    <li>
                        <Link to="/repos">Repos</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                {/* If the current URL is '/about', this route is rendered while the rest
                are ignored. */}
                <Route path="/about" component={About}></Route>
                <Route path="/repos" component={Repos}></Route>

                {/* If none of the previous routes render anything, this routes acts as 
                a fallback.
                
                Important: A route with path="/" will always match the Url because all
                Urls begin with a /. So that's why we put this one last of all. */}
                <Route path="/" component={App}></Route>
            </Switch>
        </div>
    </Router>
), document.getElementById('app'));