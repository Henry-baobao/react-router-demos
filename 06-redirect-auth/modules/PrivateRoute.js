import React from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom';
import FakeAuth from './FakeAuth';

export default function PrivateRoute( {children, ...rest} ) {
    console.log("PrivateRoute children log");
    console.log(children);
    console.log("rest arguments");
    console.log(...rest);
    return (
        <Route {...rest} render={({ location })=> FakeAuth.isAuthenticated?(            
            children
        ): (
            <Redirect to={{
                pathname: '/login',
                state: { from: location }
            }} />
        )
} />
    )
}
