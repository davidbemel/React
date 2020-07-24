import React, { Component } from 'react'
import App from './App.js'
import Login from './Login.js';
import Perfil from './Perfil.js'
import Mensaje from './Mensajes.js'
//import Configuracion from './Configuracion.js'
import Prioridades from './Prioridades.js';

export default class Principal extends Component {
  constructor(props){
    super(props);
    this.state = {ingreso:false}
  }

  updateIngreso = (ingresoState) => {
    this.setState({ingreso:ingresoState})
    console.log('Cambio estado: '+ingresoState)
  }

  render() {
    var login = <Login key='2001' updateIngreso={this.updateIngreso} 
                 ingreso={this.state.ingreso}></Login>
    var perfil = <Perfil ingreso={true} formName='Registro Personal' 
                  input1='Primer Nombre' input2='Apellido'
                  input3='Correo Electrónico' input4='Contraseña' input5='Dirección' input6='Ciudad' 
                  input7='País' buttonName='Guardar'></Perfil>
    var mensaje = <Mensaje ingreso={true}></Mensaje>
    var prioridades = <Prioridades ingreso={true} data={['Tarea 1', 'Tarea 2','Tarea 3', 'Tarea 4']}></Prioridades>

    var tabs = [
      {nombre:'Inicio',
      icono:'fa-home',
      contenido:login},
      {nombre:'Perfil',
      icono:'fa-user',
      contenido:perfil},
      {nombre:'Mensaje',
      icono:'fa-envelope',
      contenido:mensaje},
      {nombre:'Tareas',
      icono:'fa-cog',
      contenido:prioridades}]

    return (
      <App tabIndexActive={3} tabs={tabs}/>
    )
  }
}
