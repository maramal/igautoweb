import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from '../../context/Global';

import "./Navbar.css";

export default ({ sticky }) => {
    const { usuario } = useContext(GlobalContext);
    const [titulo, setTitulo] = useState('Mi sitio web');
    const [logo, setLogo] = useState('');

    useEffect(() => {
        if (usuario) {
            setTitulo(usuario.full_name);
            setLogo(usuario.profile_pic_url);
        }
    }, [usuario]);
    
    return (
        <nav className={ sticky ? 'navbar navbar-sticky' : 'navbar'}>
            <div className="navbar--logo-holder">
                {sticky ? <img src={logo} alt="logo" className="navbar--logo" /> : null}
                <h1>{titulo}</h1>
            </div>
            <ul className="navbar--link">
                <li className="navbar--link-item"><Link to="/">Inicio</Link></li>
                <li className="navbar--link-item"><Link to="/contacto">Contacto</Link></li>
            </ul>
        </nav>
    );
};
