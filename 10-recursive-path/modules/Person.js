import React from 'react';
import {
    useParams,
    useRouteMatch,
    Link,
    Switch,
    Route
} from "react-router-dom";
import {
    findById
} from './FriendModel';

export default function Person() {
    let { url } = useRouteMatch();
    let { id } = useParams();
    let person = findById(parseInt(id));

    return (
        <div>
            <h3>{person.name}'s Friends</h3>

            <ul>
                {
                    person.friends.map(id=>(
                        <li key={id}>
                            <Link to={`${url}/${id}`}>
                                {findById(id).name}
                            </Link>
                        </li>
                    ))
                }
            </ul>

            <Switch>
                <Route path={`${url}/:id`}>
                    <Person />
                </Route>
            </Switch>
        </div>
    )
}
