import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout, receiveCurrentUser } from './actions/session_actions';
import configureStore from './store/store';
import { dispatch } from 'redux';
import Root from './components/root.jsx';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = { currentUser: window.currentUser }
        store = configureStore(preloadedState);
        delete window.currentUser
        
    }
    else {
        store = configureStore();
    }
    window.store = store;
    window.receiveCurrentUser = receiveCurrentUser;
    window.dispatch = dispatch;
    ReactDOM.render(<Root store={store}/>, root);
    window.login = login;
});