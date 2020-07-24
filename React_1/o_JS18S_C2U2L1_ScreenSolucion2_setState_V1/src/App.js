import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {esOculto:props.esOculto};
  }

  ocultarHeader = () =>
  {
    this.setState({
      esOculto: true
    })
  }

  mostrarHeader = () =>
  {
    this.setState({
      esOculto:false
    })
  }

  render() {
    if (this.state.esOculto)
      return(
        <div>
          <button type='button' onClick={this.mostrarHeader}>Mostrar Header</button>
        </div>
      );

    return (
      <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <div>
        <button type='button' onClick={this.ocultarHeader}>Ocultar Header</button>
      </div>
      </div>
    );
  }
}

export default App;
