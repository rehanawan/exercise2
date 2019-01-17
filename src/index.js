import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContactsList from './ContactsList';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root')
ReactDOM.render(
    <ContactsList headerText="Contacts List" />,
    root);

serviceWorker.unregister();
