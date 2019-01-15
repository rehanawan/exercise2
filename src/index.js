import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root')
ReactDOM.render(
    <App headerText="My Todo List 2019" />,
    root);

serviceWorker.unregister();
