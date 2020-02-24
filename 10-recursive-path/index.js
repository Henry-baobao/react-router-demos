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
import Person from './modules/Person';

ReactDOM.render((
    <Router>
      <Switch>
        <Route path="/:id">
          <Person />
        </Route>
        <Route path="/">
          <Redirect to="/0" />
        </Route>
      </Switch>
    </Router>
), document.getElementById('app'));