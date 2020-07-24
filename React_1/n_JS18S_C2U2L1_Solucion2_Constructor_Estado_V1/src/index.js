import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App mostrarEstado={true}
  mensaje='Este es el estado del componente, entregado desde el padre.'/>, 
  document.getElementById('root'));
registerServiceWorker();
