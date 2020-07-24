import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
const element1 = React.createElement('h1',{},'Ejercicio 2. Curso React');
ReactDOM.render(element1,document.getElementById('title'));
const element2 = React.createElement('p',{class: 'App'},
        'En esta página se coloca un enlace a la página de NextU');
ReactDOM.render(<a href="http://www.nextu.com" target='_blank'>Página de NextU</a>,
    document.getElementById('nextu'));
ReactDOM.render(element2,document.getElementById('parrafo'));

registerServiceWorker();
