import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={pestanaActiva:props.activa};
  }

  manejoOnClick = (e) => {
    this.setState({
      pestanaActiva:Number(e.target.id)
    });
  }

  shouldComponentUpdate(nextProps, nextState){
    return (this.state.pestanaActiva !== nextState.pestanaActiva)
  }

  render() {
    const pestanas = this.props.pestanas.map((pestana, index) => {
      const activa= index === this.state.pestanaActiva ? 'active text-primary' : 'text-secondary'
      return (<li className="nav-item " key={index} >
        <button className={"nav-link bg-white "+activa} href="#" id={index}
          onClick={this.manejoOnClick.bind()}>
          {pestana.nombre}</button>
      </li>)
    })

    const contenido = this.props.pestanas[this.state.pestanaActiva].contenido

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Navegación por pestañas</h1>
        </header>
        <div className='container-fluid' >
          <div className='row mt-2 mx-1'>
            <ul className="nav nav-tabs">
              {pestanas}
            </ul>
          </div>
          <div className='row border mx-1 text-primary p-2'>
            <br/>
            {contenido}
            <br/>
            <br/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
