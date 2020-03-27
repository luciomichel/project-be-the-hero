import React, { useState } from 'react';
import './styles.css'
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import logoImage from '../../assets/logo.svg';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }

        try{
            const response =  await api.post('ongs',data)
            alert(`Seu ID de acesso ${response.data.id}`); 
            history.push('/');
        }catch(error){
            alert('Erro no cadastro, Tente Novamente');
        }
    }

    return(
        <div className="register-conteiner">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro,entrena plataforma e ajude pessoas a encontrar os caddos da sua ONG</p>
                    <Link className="back-link" to="/">
                        Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input type="email" 
                        placeholder="E-mail" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="WhastsApp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}    
                        />
                        <input 
                            placeholder="UF" style={{ width:80 }} 
                            value={uf}
                            onChange={e => setUf(e.target.value)}    
                        />
                    </div>
                    <button className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}