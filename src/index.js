import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header.js'
import Main from './main.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>
);

