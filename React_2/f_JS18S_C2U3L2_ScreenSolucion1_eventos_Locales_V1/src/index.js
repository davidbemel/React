import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App.js';
import Login from './Login.js';

  const login = <Login key='2001'></Login>

  const tabs = [
    {nombre:'Inicio',
    icono:'fa-home',
    contenido:login},
    {nombre:'Perfil',
    icono:'fa-user',
    contenido:'....1'},
    {nombre:'Mensaje',
    icono:'fa-envelope',
    contenido:'....2'},
    {nombre:'Configuración',
    icono:'fa-cog',
    contenido:'....3'}]

ReactDOM.render(<App tabIndexActive={0} tabs={tabs}/>, document.getElementById('root'));
registerServiceWorker();
