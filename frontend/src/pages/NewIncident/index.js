import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import './styles.css'
import logoImage from '../../assets/logo.svg';
import api from '../../services/api';

export default function NewIncident(){
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try{
            await api.post('incidents',data,{
                headers: {
                    Authorization: ongId,
                }
            });

            history.push('/profile');
        }catch(error){
            alert('Erro ao cadastrar caso, Tente novamente!');
        }

    }

    return (
            <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Be The Hero" />
                    <h1>Cadastrar Novo caddos</h1>
                    <p>Descreva o caso detalhadamente para encontrar um héroi para resolver isso.</p>
                    <Link className="back-link" to="/profile">
                        Voltar para home
                    </Link>
                </section>
                <form>
                    <input 
                        placeholder="Titulo do caso" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição" 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <button onClick={handleNewIncident} className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}