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
import SubRoute from './modules/SubRoute';
import Sandwiches from './modules/Sandwiches';
import Tacos from './modules/Tacos';
import Bus from './modules/Bus';
import Cart from './modules/Cart';

const routes = [
  {
    path: '/sandwiches',
    component: Sandwiches
  },
  {
    path: '/tacos',
    component: Tacos,
    routes: [
      {
        path: '/tacos/bus',
        component: Bus
      },
      {
        path: '/tacos/cart',
        component: Cart
      }
    ]
  }
]

function Repeat(props){
  let items=[];
  for (let index = 0; index < props.numTimes; index++) {
    items.push(props.children(index));
  }
  return <h3>{items}</h3>;
}

ReactDOM.render((
  // <Repeat numTimes={10}>
  //   {(index)=><div key={index}>This is item {index} in the list.</div>}
  // </Repeat>
  <Router>
    <div>
      <ul>
        <li>
          <Link to='/tacos'>Tacos</Link>
        </li>
        <li>
          <Link to='/sandwiches'>Sandwiches</Link>
        </li>
      </ul>

      <Switch>
        {routes.map((route,index)=>{
          return <SubRoute key={index} {...route}/>;
        })}
      </Switch>
    </div>
  </Router>
), document.getElementById('app'));