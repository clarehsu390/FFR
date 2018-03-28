import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './actions/session_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store = configureStore();
    console.log(store);
    window.store = store;
    ReactDOM.render(<h1>Furry Friends Rescue</h1>, root);
    window.login = login;
});