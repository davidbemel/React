import React, { Component } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

export default class App extends Component{
  constructor(props){
    super(props);
    const min=6, max=16;
    const cantElemento = Math.floor(Math.random()*(max-min))+min;
    const elementoIni = []
    for (let index = 0; index < cantElemento; index++) {
      elementoIni.push('Elemento '+index)
    }
    this.state={elementos:elementoIni};
    this.mover = null;
    this.sobre = null;
    this.colocaraqui = document.createElement("li");
    this.colocaraqui.className = "colocaraqui bg-warning text-white";
  }

  dragStart = (e) => {
    this.mover = e.currentTarget;
    e.dataTransfer.setData('text/html', e.currentTarget);
  }

  dragEnd = (e) => {
    this.mover.style.display = "block";
    this.mover.parentNode.removeChild(this.colocaraqui);
    var elementosTemp = this.state.elementos;
    var from = Number(this.mover.dataset.id);
    var to = Number(this.sobre.dataset.id);
    if (from < to) to--;
    if (this.dondeColocar == "after") to++;
    elementosTemp.splice(to, 0, elementosTemp.splice(from, 1)[0]);
    this.setState({elementos: elementosTemp});
  }

  dragOver = (e) => {
    e.preventDefault();
    this.mover.style.display = "none";
    if (e.target.className == "colocaraqui") 
      return;
    if (e.target.dataset.id) 
      this.sobre = e.target;
    var relY = e.clientY - this.sobre.offsetTop;
    var height = this.sobre.offsetHeight / 2;
    var parent = e.target.parentNode;
    
    if (relY > height) {
      this.dondeColocar = "after";
      parent.insertBefore(this.colocaraqui, e.target.nextElementSibling);
    }
    else if (relY < height) {
      this.dondeColocar = "before"
      parent.insertBefore(this.colocaraqui, e.target);
    }
  }

  render() {
    var listItems = this.state.elementos.map(((item, i) => {
      return (
        <li className='mb-1 bg-primary text-white'
            data-id={i}
            value={i}
            key={i}
            draggable="true"
            onDragEnd={this.dragEnd}
            onDragStart={this.dragStart}>
          {item}
        </li>
      );
    }).bind(this));

    return (
      <div className="container mt-3 border rounded">
        <div className='row mb-3'>
          <div className='col-12 text-center bg-success'>
            <h3><small className='text-white'>Elementos</small></h3>
          </div>
        </div>
        <div className='mx-5 px-5 text-center'>
            <ul onDragOver={this.dragOver}>{listItems}</ul>
        </div>      
      </div>
    )
  }
};