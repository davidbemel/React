import React, { Component } from 'react';
import './App.css';
import Paises from './Paises';
import Form from './Form'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Form formName='Registro Personal' input1='Primer Nombre' input2='Apellido'
          input3='Correo Electrónico' input4='Contraseña' input5='Dirección' input6='País' 
          input7='Código Postal' buttonName='Guardar'/>
      </div>
    );
  }
}

export default App;
