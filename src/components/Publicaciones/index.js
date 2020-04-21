import React, { useContext, useEffect, useState } from 'react';

import { GlobalContext } from '../../context/Global';

import './estilo.css';

export default () => {
    const context = useContext(GlobalContext);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (context.posts.length) {
            setPosts(context.posts);
        }
    }, [context]);

    return (
        <div className="posts">
            {posts.length ? posts.map((post, i) => {
                let text = '';
                if (post.text) {
                    text = post.text.slice(0, 150) + '...';
                }
                
                const url = `https://www.instagram.com/p/${post.shortcode}`;

                return (
                    <div className="post" key={i}>
                        <div className="post--image">
                            <img src={post.thumbnail} alt="Imagen de publicación" />
                        </div>
                        {text.length && (
                            <div className="post--text">
                                {text}
                            </div>
                        )}                        
                        <a href={url} className="post--link">Ver más</a>
                    </div>
                );
            }): ''}
        </div>
    );
};