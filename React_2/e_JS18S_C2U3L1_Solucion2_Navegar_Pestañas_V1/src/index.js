import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const pestanas = [
    {nombre:'Pestaña 1', contenido:'Contenido de la pestaña 1'},
    {nombre:'Pestaña 2', contenido:'Contenido de la pestaña 2'},
    {nombre:'Pestaña 3', contenido:'Contenido de la pestaña 3'},
    {nombre:'Pestaña 4', contenido:'Contenido de la pestaña 4'}
]

ReactDOM.render(<App pestanas={pestanas} activa={1}/>, document.getElementById('root'));
registerServiceWorker();
