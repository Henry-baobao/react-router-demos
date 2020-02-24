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
import CustomLink from './modules/CustomLink';

ReactDOM.render((
    <Router>
        <div>
            <CustomLink label='App' to='/' activeWhenExact={true}/>
            <CustomLink label='About' to='/about'></CustomLink>

            <Switch>
                <Route exact path='/'>
                    <App/>
                </Route>
                <Route path='/about'>
                    <About/>
                </Route>
            </Switch>
        </div>
    </Router>
), document.getElementById('app'));