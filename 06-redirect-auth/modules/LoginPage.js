import React from 'react';
import {
    useHistory,
    useLocation
} from "react-router-dom";
import FakeAuth from './FakeAuth';

export default function LoginPage() {
    let history = useHistory();
    let location = useLocation();
    console.log("Login history log");
    console.log(history);
    console.log(history.location.pathname);
    console.log("Login location log");
    console.log(location);

    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        console.log('click login');
        FakeAuth.authenticate(() => {
            console.log('Click log, history and from pathname: ');
            console.log(history.location.pathname);
            console.log(from.pathname);
            history.replace(from);
            console.log('click log, from: ');
            console.log(from);
        });
    };

    return (
        <div>
            <p>You must login in to view the page at {from.pathname}</p>
            <button onClick={login}>Login in</button>
        </div>
    )
}
