import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Bienvenido from './Header/Bienvenido.js';
import Navbar from './Header/Navbar.js';
import Contacto from './pages/Contacto/index.js';

export default () => {

    useEffect(() => {
        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        }
    }, []);

    const [isSticky, setIsSticky] = useState(false);
    const stickyRef = useRef(null);

    const handleScroll = () => {
        if (stickyRef.current) {
            window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom
                ? setIsSticky(true)
                : setIsSticky(false);
        }
    }

    const debounce = function (func, wait = 20, immediate = true) {
        let timeOut;
        return () => {
            let context = this,
                args = arguments;
            const later = () => {
                timeOut = null;
                if (!immediate) func.apply(context, args);
            }
            const callNow = immediate && !timeOut;
            clearTimeout(timeOut);
            if (callNow) func.apply(context, args);
        }
    }

    window.addEventListener('scroll', debounce(handleScroll));

    return (
        <Router>
            <Navbar sticky={isSticky} />
            <Switch>
                <Route path="/" exact>
                    <Bienvenido stickyRef={stickyRef} />
                </Route>
                <Route path="/contacto">
                    <Contacto />
                </Route>
            </Switch>
        </Router>
    );
};