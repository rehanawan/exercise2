import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoListYooo from './TodoListYooo';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root')
ReactDOM.render(
    <TodoListYooo
        headerText="My Todo List 2019" />,
    root);

serviceWorker.unregister();
