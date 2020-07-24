import React, { Component } from 'react'
import App from './App.js'
import Login from './Login.js';
import Perfil from './Perfil.js'
import Mensaje from './Mensaje.js'
import Configuracion from './Configuracion.js'

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
    var mensaje = <Mensaje ingreso={this.state.ingreso}></Mensaje>
    var configuracion = <Configuracion ingreso={this.state.ingreso}></Configuracion>

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
      {nombre:'Configuración',
      icono:'fa-cog',
      contenido:configuracion}]

    return (
      <App tabIndexActive={1} tabs={tabs}/>
    )
  }
}
