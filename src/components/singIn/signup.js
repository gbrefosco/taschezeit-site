import React, { useState } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import './signup.css';

export default function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userNickName, setUserNickName] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();

    async function handleCreateAccount(e) {
        e.preventDefault();

        const userExists = await api.get(`/user?login=${userNickName}`);
        const emailExists = await api.get(`/user?email=${email}`);

        if (emailExists.data.length > 0) {
            alert('This Email is already in use');
        } else if (userExists.data.length > 0) {
            alert('This UserName is already in use');
        } else {
            api.post('/user', {
                login: userNickName,
                email: email,
                password: password
            });
            history.push('/');
        }

    }

    return (
        <>
            <div className="cadastroUser">
                <div className="titulo">
                    <h1 className="title">TascheZeit</h1>
                    <h2 className="description">A simple and pratical time-manager <br /> for those who want to be organized</h2>
                </div>

                <form className="cadastro" onSubmit={handleCreateAccount}>
                    <div className="login_label">
                        <label>Sign Up</label>
                    </div>
                    <div className="formDiv">
                        <input className="inputCadastro email_singup" onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter a valid email"></input>
                        <input className="inputCadastro pass_singup" onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter a valid password"></input>
                        <input className="inputCadastro login_singup" onChange={e => setUserNickName(e.target.value)} type="text" placeholder="Enter a valid username"></input>

                        <div className="continue">
                            <button>Create account</button>
                        </div>
                        <p className="logar">
                            Already have an account? <a href="/">Login</a>
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
}