import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './Form';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Form formName='Registro Personal' input1='Primer Nombre' input2='Apellido'
    input3='Correo Electrónico' input4='Contraseña' input5='Dirección' input6='Ciudad' 
    input7='Código Postal' buttonName='Guardar'/>,
document.getElementById('root'));
registerServiceWorker();
