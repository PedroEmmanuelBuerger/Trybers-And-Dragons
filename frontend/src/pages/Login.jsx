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
            <header>
                <h1>Chose Path</h1>
            </header>
            <section>
                <button onClick={(e) => redirect(e)} value={'Character'}>
                    Create Character
                </button>
            </section>
        </div>
    );
}
