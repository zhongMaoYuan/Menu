import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter, Switch } from "react-router-dom";
import store from './store/index'
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <Switch>
            <Provider store={store}>
                <App></App>
            </Provider>
        </Switch>
    </HashRouter>
);
