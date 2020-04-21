import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import GlobalContextWrapper from "./context/Global";

ReactDOM.render(
    <React.StrictMode>
        <GlobalContextWrapper>
            <App />
        </GlobalContextWrapper>
    </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.register();
