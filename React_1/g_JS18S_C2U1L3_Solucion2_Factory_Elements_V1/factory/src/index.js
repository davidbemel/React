import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

var lista_fac = React.createFactory('li');

var l1 = lista_fac('',
    React.createElement('a',{href:''},'Física'));
var l2 = lista_fac({id: 'selected'},<a href="">Química</a>);
var l3 = lista_fac({},<a href="">Biología</a>);
var l4 = lista_fac({},<a href="">Inglés</a>);
var l5 = lista_fac({},<a href="">Sociales</a>);
var l6 = lista_fac({},<a href="">Historia</a>);
var l7 = lista_fac({},<a href="">Deporte</a>);
var lista =[l1,l2,l3,l4,l5,l6,l7]; 

var header=<header>
    <h1>Pestañas con React</h1>
    <nav>
        <ul>
            {lista}
        </ul>
    </nav>
</header>;

var seccion = React.createElement('section',{id: 'content'},
    <p>Ejemplo de pestañas creadas con elementos estáticos de React y CSS.</p>,
    <p>La química es la ciencia que estudia tanto la composición, como la estructura y las propiedades de 
        la materia como los cambios que esta experimenta durante las reacciones químicas 
        y su relación con la energía.​</p>,
    React.createElement('p','',
    React.createElement('a',{href:''},
    <img src="https://conceptodefinicion.de/wp-content/uploads/2014/07/Qu%C3%ADmica.jpg" alt="Química"/>)));

ReactDOM.render([header,seccion],document.getElementById('root'));

registerServiceWorker();
