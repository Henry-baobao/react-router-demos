import React from 'react';
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Link,
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
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/repos">Repos</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path="/about" component={About}></Route>
                <Route path="/repos" component={Repos}></Route>
                <Route path="/" component={App}></Route>
            </Switch>
        </div>
    </Router>
), document.getElementById('app'));