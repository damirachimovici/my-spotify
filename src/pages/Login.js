import React from 'react';

import LabeledInput from '../LabeledInput';
import './Login.css'

class Login extends React.Component {



    state = {
        'client-id': '',
        'client-secret': ''
    };

    onClickHandler = () => {

        const params = {
                client_id: this.state["client-id"],
                response_type: 'token',
                redirect_uri: 'http://localhost:3000/callback'
            };
        let queryString = '';
        Object.keys(params)
            .forEach(key => {
                queryString += queryString !== '' ? '&' : '';
                queryString += encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
            });

        window.location.href = `https://accounts.spotify.com/authorize?${queryString}`;
    };

    onChangeHandler = (id, value) => {

        const state = {...this.state};
        state[id] = value;

        this.setState(state);
    };


    render() {
        return (
            <div className="login">
                <div className="form">
                    <LabeledInput
                        id="client-id"
                        placeholder="Client ID"
                        change={this.onChangeHandler}
                    />
                    <button
                        type="button"
                        className="myButton"
                        onClick={this.onClickHandler}
                    >
                        Login
                    </button>
                </div>
            </div>
        )
    }
}

export default Login;