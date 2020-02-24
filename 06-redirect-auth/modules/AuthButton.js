import React from 'react';
import {
    useHistory
} from 'react-router-dom';
import FakeAuth from './FakeAuth';

export default function AuthButton() {
    let history = useHistory();
    console.log("AuthButtom history log");
    console.log(history);
    console.log(history.location.pathname);
    return FakeAuth.isAuthenticated ? (
        <p>
            Welcome!
            <button onClick={() => {
                FakeAuth.signout(() => history.push("/"));
            }}>
                Sign Out
            </button>
        </p>
    ) : (
            <p>You are not logged in yet!</p>
        )
}
