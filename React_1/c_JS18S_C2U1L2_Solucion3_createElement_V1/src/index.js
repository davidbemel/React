import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const titulo = React.createElement('h1','','Ejercicio 3. Formulario')

const nombre = React.createElement('fieldset',{class: 'form-group'},
                <label>Nombre Completo</label>,
                React.createElement('input',{id:'nombre',class: 'form-input',
                    name: 'nombre',type:'text'}));

const email = React.createElement('fieldset',{class: 'form-group'},
            <label>Correo electrónico</label>,
            React.createElement('input',{id: 'email',type: 'email', class: 'form-input'}));

const subject = React.createElement('fieldset',{class: 'form-group'},
            <label>Asunto</label>,
            React.createElement('input',{id:'asunto',class: 'form-input',
            name: 'asunto',type:'text'}));

const mensaje = React.createElement('fieldset',{class: 'form-group'},
            <label>Mensaje</label>,
            React.createElement('textarea',{id:'mensaje',class: 'form-input',
            name: 'mensaje',type:'text'}));

const form = React.createElement('form',{class: 'react-form'},titulo,nombre,email,subject,mensaje);

ReactDOM.render(form,document.getElementById('root'));

registerServiceWorker();
