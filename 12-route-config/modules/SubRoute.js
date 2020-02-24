import React from 'react';
import {
    Route
}
from 'react-router-dom';

export default function SubRoute(route) {
    return (
        <Route path={route.path} render={props=>{
            console.log('props:');
            console.log(props);

            console.log("SubRoute's routes:");
            console.log(route.routes);
            //{...props} pass match、location、history properties to route.component
            return <route.component {...props} routes={route.routes} />;
        }}>
            
        </Route>
    )
}
