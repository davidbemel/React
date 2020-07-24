import React, { Component } from 'react';
import './draganddrop.css';

export default class DragandDrop extends React.Component {
  constructor(props){
    super(props);
    const min=9;
    const max=32;
    const numMensajes = Math.floor(Math.random() * (max - min + 1)) + min;
    const categorias = ['nuevos','aceptados','rechazados']
    var mensajesInit = []
    for (let index = 1; index <= numMensajes; index++) {
      mensajesInit.push({name:'Mensaje '+index,category:categorias[Math.floor(Math.random() * (3))]})
    }
    this.state = {mensajes: mensajesInit}
  }

  onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  }

  onDragOver = (ev) => {
    ev.preventDefault();
  }

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let mensajes = this.state.mensajes.filter((mensaje) => {
      if (mensaje.name == id) {
        mensaje.category = cat;
      }
      return mensaje;
    });

    this.setState({
      ...this.state,
      mensajes
    });
  }

  render() {
    var mensajes = {
      nuevos: [],
      aceptados: [],
      rechazados: []
    }

    this.state.mensajes.forEach ((mensaje) => {
      mensajes[mensaje.category].push(
        <div key={mensaje.name} 
          onDragStart = {(e) => this.onDragStart(e, mensaje.name)}
          draggable
          className='card bg-light m-1'>
          <small>{mensaje.name}</small>
        </div>
      );
    });

    return (
      <div className="container-drag">
        <h3><small className='text-primary'>Mensajes</small></h3>
        <div className='container'>
          <div className='row'>
            <div className='border col-sm px-0'
              onDragOver={this.onDragOver}
              onDrop={(e)=>{this.onDrop(e, "nuevos")}}>
              <p className="bg-primary text-white my-0 py-0">Nuevos</p>
              {mensajes.nuevos}
            </div>
            <div className="border col-sm px-0" 
              onDragOver={this.onDragOver}
              onDrop={(e)=>this.onDrop(e, "aceptados")}>
              <p className="bg-success text-white my-0 py-0">Aceptados</p>
              {mensajes.aceptados}
            </div>
            <div className="border col-sm px-0" 
              onDragOver={this.onDragOver}
              onDrop={(e)=>this.onDrop(e, "rechazados")}>
              <p className="bg-danger text-white my-0 py-0">Rechazados</p>
              {mensajes.rechazados}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
