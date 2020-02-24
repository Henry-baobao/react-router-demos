import React from 'react';
import {
    Switch,
    Link
} 
from 'react-router-dom';
import SubRoute from './SubRoute';

export default function Tacos(props) {
    //the props(object) contains match、location、history and routes properties
    //in order to get routes array, you can
    //1、 get props object(the fucntion is Tacos(props)), then get props.routes array;
    //2、 get routes array directly(the fucntion is Tacos({routes}))
    //这里用到了javascript中的解构
    console.log(props);

    let routes=props.routes;
    console.log('routes:');
    console.log(routes);
    
    return (
        <div>
            <h2>Tacos</h2>
            <ul>
                <li>
                    <Link to='/tacos/bus'>Bus</Link>
                </li>
                <li>
                    <Link to='/tacos/cart'>Cart</Link>
                </li>
            </ul>

            <Switch>
                {routes.map((route,index)=>(
                    <SubRoute key={index} {...route}/>
                ))}
            </Switch>
        </div>
    )
}
