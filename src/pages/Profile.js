import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import './profile.css';
import SideNavMenu from '../components/global/sideNav';
import api from '../services/api';
import Card from '../components/card/card';

export default function Profile(props) {

    const useStyles = makeStyles((theme) => ({
        addProjectOrClient: {
            position: 'absolute',
            width: 690,
            height: 200,
            backgroundColor: theme.palette.background.default,
            border: '#7D53D4',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        }
    }));

    const [user, setUser] = useState();

    function loadUser() {
        api.get(`/user/${localStorage.getItem('userId')}`)
            .then(res => {
                let { data: user } = res;
                setUser(user);                
            })
    };

    useEffect(() => {
        loadUser();
    }, []);

    return !!user && (
        <>
            <SideNavMenu />


            <div className="container">

                <div className="title">
                    Your Profile
                </div>
                <div className="subtitle">
                    <p>{user.login}</p>
                </div>
                <Card>
                    <p>Código: {user.id}</p>
                </Card>
                <Card>
                    <p>Email: {user.email}</p>
                </Card>            
                <Card>
                    <p>Pergunta secreta: {user.secretQuestion}</p>
                </Card>            
                <Card>
                    <p>Resposta: {user.secretAnswer}</p>
                </Card>            

                {/* <div style={{ textAlign: 'center', position: 'absolute', left: '45%', top: '50%' }}>
                    <p style={{ color: '#7D53D4', fontSize: '25px' }}>Código: {user.id}</p>
                </div>
                <div style={{ textAlign: 'center', position: 'absolute', left: '45%', top: '50%' }}>
                    <p style={{ color: '#7D53D4', fontSize: '25px' }}>{user.login}</p>
                </div>
                <div style={{ textAlign: 'center', position: 'absolute', left: '45%', top: '50%' }}>
                    <p style={{ color: '#7D53D4', fontSize: '25px' }}>Email: {user.email}</p>
                </div> */}

                <button className="caixa" onClick={() => alert('Sua senha é: ' + user.password)} >Mostrar senha</button>
            </div>
        </>
    );
}