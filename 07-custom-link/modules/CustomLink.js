import React from 'react';
import {
    useRouteMatch,
    Link
} from 'react-router-dom';

export default function CustomLink({ label, to, activeWhenExact }) {
    let match = useRouteMatch({
        path: to,
        exact: activeWhenExact
    });
    console.log(label + " route: " + to)
    console.log(match);

    return (
        <div className={match ? "active" : ""}>
            {match && '> '}
            <Link to={to}>{label}</Link>
        </div>
    )
}
