import React, { useState, useEffect, createContext } from 'react';
import ig from 'instagram-scraping';
import Loader from 'react-loader-spinner'

import './Global.css';

export const GlobalContext = createContext(null);

export default ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [usuario, setUsuario] = useState({});
    const [error, setError] = useState('');
    const [cargando, setCargando] = useState(true);

    const getData = async () => {
        try {
            const username = process.env.USUARIO || 'ahide_art';
            console.log('USUARIO', username);
            const { medias, user } = await ig.scrapeUserPage(username);

            setPosts(medias);
            setUsuario(user);
            setCargando(false);
        } catch(err) {
            setError('No se pudo obtener la información.');
            console.log('Error del servidor:', err.message);
        }
        
    };

    // Primera carga de posts
    useEffect(() => {
        getData();
    }, []);

    const value = {
        posts,
        usuario,
        error
    };

    return (
        error ? <div className="error">{error}</div> :
        cargando 
            ? (
                <div className="loader">
                    <Loader
                        type="Rings"
                        color="#FFFFFF"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs

                    />
                </div>
            ) 
            : <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
    )
}