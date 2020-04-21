import React, { useContext, useEffect } from 'react';
import './Bienvenido.css';

import Publicaciones from '../Publicaciones';
import { GlobalContext } from '../../context/Global';

export default ({ stickyRef }) => {
    const { usuario } = useContext(GlobalContext);

    useEffect(() => {
        if (usuario) {
            document.title = usuario.full_name;
            document.querySelector("link[rel*='icon']").href = usuario.profile_pic_url;
        }
    }, [usuario]);

    return (
        <main>
            <section className="welcome">
                <div ref={stickyRef}>
                    <Publicaciones />
                </div>
            </section>
        </main>
    );
};