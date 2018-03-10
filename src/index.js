import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import App from './App';
import './style/index.css';

const store = configureStore();

ReactDOM.render(
  <App store={store} />, 
  document.getElementById('root')
);
