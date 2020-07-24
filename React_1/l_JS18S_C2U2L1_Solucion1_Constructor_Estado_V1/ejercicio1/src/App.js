import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(props){
  super(props);
  this.state={mostrarEstado:true,
              estado:'Este es el estado del componente'};
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{display:this.state.mostrarEstado ? 'block' : 'none'}} >{this.state.estado}</p>
      </div>
    );
  }
}

export default App;
