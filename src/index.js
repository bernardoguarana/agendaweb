import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
{/*BrowserRouter -> habilitando o projeto para utilizar a navegação por rotas*/}
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
