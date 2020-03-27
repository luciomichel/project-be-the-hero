import React, { useState } from 'react';
import './styles.css'

import logoImage from '../../assets/logo.svg';
import herosImage from '../../assets/heroes.png';

import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        try{
            const response = await api.post('session', { id });
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.ong.name);

            history.push('/profile');
        }catch(error){
            alert('Falha no login, Tente novamente!');
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImage} alt="Heroes" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    <input 
                        placeholder="Sua ID" 
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                </form>
                <Link className="back-link" to="/register">
                    Não tenho cadastro
                </Link>
            </section>
            <img src={herosImage} alt="Heroes" />
        </div>
    );
}