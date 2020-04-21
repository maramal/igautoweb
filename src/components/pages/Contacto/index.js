import React, { useContext, useState, useEffect } from 'react';

import { GlobalContext } from '../../../context/Global';

import './estilo.css';
import InstagramLogo from './instagram-logo.png';

export default () => {
    const { usuario } = useContext(GlobalContext);
    const [bio, setBio] = useState('Mi biografía');
    const [logo, setLogo] = useState('');
    const [url, setUrl] = useState('');
    const [nombre, setNombre] = useState('Usuario');
    const [username, setUsername] = useState('Usuario');
    const [seguidores, setSeguidores] = useState(0);

    useEffect(() => {
        if (usuario) {
            setBio(usuario.biography);
            setLogo(usuario.profile_pic_url);
            setUrl(usuario.external_url);
            setNombre(usuario.full_name);
            setUsername(usuario.username);
            setSeguidores(usuario.edge_follow.count);
        }
    }, [usuario]);

    return (
        <div className="pagina-contacto">
            <div className="contacto">
                <div className="text">
                    <img src={logo} alt="Logo" />
                    <p className="bio">{bio}</p>
                </div>
                <div className="stats">
                    <div className="stats--titulos">
                        <h1>{nombre}</h1>
                        <h3>@{username}</h3>
                    </div>
                    <div className="stats--data">
                        <p>Seguidores: {seguidores}</p>
                        <a href={url}><img src={InstagramLogo} alt="Instagram Logo" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}