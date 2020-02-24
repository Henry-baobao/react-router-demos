import React from 'react';
import {
    useLocation
} from 'react-router-dom'

export default function NoMatch() {
    let location = useLocation();

    return (
        <p3>
            No match for <code>{location.pathname}</code>
        </p3>
    )
}
