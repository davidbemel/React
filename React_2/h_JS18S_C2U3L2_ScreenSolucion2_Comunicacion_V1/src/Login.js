import React, { Component } from 'react'
import './App.css'

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state= {
        msjError:'',
        ingreso:this.props.ingreso
    }
  }

  validarIngreso(email,clave){
        this.setState({ingreso:'true'})
        this.props.updateIngreso(true)
  }

  validaEmail(email){
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
  }

  onClick = () => {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('clave').value;
    const valido = this.validaEmail(email);
    if (valido && pass){
        this.setState({msjError:''})
        this.validarIngreso()}
    else if(!valido)
        this.setState({msjError:'Correo Electrónico Inválido'})
    else
        this.setState({msjError:'Ingresa la contraseña'})
  }

  componentDidUpdate(){
    if (this.state.msjError)
        alert(this.state.msjError)
  }

  onRegistro(){

  }

  render() {
    if (this.props.ingreso)
        return(
            <div key='1001'>
                <h3 className='text-center text-primary'>
                    Bienvenido a una aplicación basada en menú de pestañas verticales
                </h3><br/>
                <p className='text-secondary text-justify'>Aquí podrás crear o modificar tu perfil de usuario, visualizar los mensajes y 
                    modificar la configuración de la página
                </p>
                <br/>
            </div>
        )
    else
        return (
        <div align='center'>
        <h2 className='text-primary'><small>Sistema con menú de pestañas verticales</small></h2><br/>
        <div className='border rounded login mt-2 p-2'>
        <p><b>Ingreso</b></p>
            <form>
            <div className="input-group pb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">
                <i className="fa fa-envelope-o fa-fw"></i></span>
            </div>
            <input className="form-control" id='email'
            type="email" placeholder="Correo Electrónico"
            ref={input => this.usuario = input}/>
            </div>
            <div className="input-group pb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">
                <i className="fa fa-key fa-fw "></i></span>
            </div>
            <input id='clave'className="form-control"
            type="password" placeholder="Contraseña"
            ref={input => this.clave = input}/>
            </div>
            <a className="btn btn-primary mr-2" onClick={this.onClick}>
            <i className="fa fa-user pr-2"></i>Acceder </a>
            <p className='text-center pb-0 mb-0'>
            <small><a href='#' onClick={this.onRegistro}>Regístrate aquí</a></small></p>
        </form>
        </div>
        </div>
        )
  }
}
