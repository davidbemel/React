import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={pestanaActiva:props.activa};
  }

  manejoOnClick(e){
    alert('Hizo click en la pestaña: '+e.target.innerHTML);
  }

  render() {
    const pestanas = this.props.pestanas.map((pestana, index) => {
      const activa= index === this.state.pestanaActiva ? 'active text-primary' : ''
      return (<li className="nav-item " key={index} onClick={this.manejoOnClick.bind()}>
        <button className={"nav-link bg-white "+activa} href="#"
           >{pestana.nombre}</button>
      </li>)
    })

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
            Texto de la pestaña
          </div>
        </div>
      </div>
    );
  }
}

export default App;
