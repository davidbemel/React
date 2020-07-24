import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import registerServiceWorker from './registerServiceWorker';

var form = React.createElement('form',{action: ''},
    <h2>Formulario de Registro</h2>,
    <div class="input-container">
    <i class="fa fa-user icon"></i>
    <input class="input-field" type="text" placeholder="Nombre de usuario" name="usrnm"/>
    </div>,
    <div class="input-container">
    <i class="fa fa-envelope icon"></i>
    <input class="input-field" type="text" placeholder="Correo Electrónico" name="email"/>
    </div>,
    <div class="input-container">
    <i class="fa fa-key icon"></i>
    <input class="input-field" type="password" placeholder="Contraseña" name="psw"/>
    </div>,
    <button type="submit" class="btn"><strong>Regístrate</strong></button>);

ReactDOM.render(<div class='form'>{form}</div>,document.getElementById('root'));

registerServiceWorker();
