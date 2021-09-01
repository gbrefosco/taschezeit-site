import React, { useState } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import './login.css';

export default function Login() {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();

    async function handleSubmitNewUser(event) {
        event.preventDefault();
        const loginData = await api.get(`/user?login=${login}`);
        
        if (loginData.data.length > 0) {
            const loginDataDetails = loginData.data[0];
            if (loginDataDetails.password === password) {
                localStorage.setItem('userId', loginDataDetails.id);
                localStorage.setItem('login', loginDataDetails.login);
                history.push('/home');
            } else {
                alert('incorrect password');
            }
        } else {
            alert('This user does not exist.');
        }

    }

    return (
        <div>
            <div className="titulo">
                <h1 className="title">TascheZeit</h1>
                <h2 className="description">A simple and pratical time-manager <br /> for those who want to be organized</h2>
            </div>
            <form className="PLogin" onSubmit={handleSubmitNewUser}>
                <label className="login_label"><strong>Sing in</strong></label>
                <input className="login_input" onChange={e => setLogin(e.target.value)} type="text" placeholder="Type in your login account"></input>
                <input className="pass_input" onChange={e => setPassword(e.target.value)} type="password" placeholder="Type in your password"></input>
                <a href="www.google.com">Forgot your password?</a>

                <button className="continue">Continue</button>

                <p className="signUp">
                    Don't have an account?
                    <a href="/singup">Sign Up</a>
                </p>
            </form>
        </div>
    );
}