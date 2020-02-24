import React, { useState } from 'react';
import {
    Prompt
} from 'react-router-dom';


export default function App() {
    const [isBlocking, setIsBlocking] = useState(false);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            event.target.reset();
            setIsBlocking(false);
        }}>

            <Prompt when={isBlocking}
                message={location => `Are you sure you want to go to ${location.pathname}`} />
            <p>Blocking? {isBlocking ? 'Yes, click a link' : 'Nope!'}</p>
            <p>
                <input type="text" size="50" placeholder='type something'
                    onChange={event => {
                        setIsBlocking(event.target.value.length > 0);
                    }}
                />
            </p>
            <p>
                <button>Submit to stop blocking</button>
            </p>
        </form>
    )
}
