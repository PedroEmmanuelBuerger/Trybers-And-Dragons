import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Login() {
    const history = useHistory();

    const redirect = (par) => {
     const { value } = par.target;
     history.push(value);
    };

    return (
        <div>
            <h1>Chose Path</h1>
            <button onClick={(e) => redirect(e)} value={'Character'}>
                Create Character
            </button>
        </div>
    );
}
