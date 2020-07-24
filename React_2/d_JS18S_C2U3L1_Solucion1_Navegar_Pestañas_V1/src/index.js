import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const pestanas = [
    {nombre:'Pestaña 1'},
    {nombre:'Pestaña 2'},
    {nombre:'Pestaña 3'},
    {nombre:'Pestaña 4'}
]

ReactDOM.render(<App pestanas={pestanas} activa={1}/>, document.getElementById('root'));
registerServiceWorker();
