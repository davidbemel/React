import React, { Component } from 'react'
import App from './App.js'
import Login from './Login.js';

export default class Principal extends Component {

  login = <Login key='2001'></Login>

  tabs = [
    {nombre:'Inicio',
    icono:'fa-home',
    contenido:this.login},
    {nombre:'Perfil',
    icono:'fa-user',
    contenido:'....1'},
    {nombre:'Mensaje',
    icono:'fa-envelope',
    contenido:'....2'},
    {nombre:'Configuración',
    icono:'fa-cog',
    contenido:'....3'}]

  render() {
    return (
      <App tabIndexActive={0} tabs={this.tabs}/>
    )
  }
}
