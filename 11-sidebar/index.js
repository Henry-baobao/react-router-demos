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

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>Home</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: '/about',
    sidebar: () => <div>About SideBar</div>,
    main: () => <h2>About Main!</h2>
  },
  {
    path: '/repos',
    sidebar: () => <div>Repos SideBar</div>,
    main: () => <h2>Repos Main!</h2>
  }
]

ReactDOM.render((
  <Router>
    <div style={{ display: 'flex' }}>
      <div style={{
        padding: '10px',
        width: '40%',
        background: '#f0f0f0'
      }}>
        <ul style={{
          listStyleType: 'none',
          padding: 0
        }}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/repos'>Repos</Link>
          </li>
        </ul>

        <Switch>
          {routes.map((route, index) => {
            return (
              <Route key={index} path={route.path}
                exact={route.exact} children={route.sidebar} />
            );
          })}
        </Switch>
      </div>

      <div style={{
        flex: 1,
        padding: '10px'
      }}>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route key={index} path={route.path}
                exact={route.exact} children={route.main} />
            );
          })}
        </Switch>
      </div>
    </div>
  </Router>
), document.getElementById('app'));