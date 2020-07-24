import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Actividades from './Actividades.js';

class App extends Component {
  constructor(props){
    super(props);
    this.actividades=[]
  }

  render() {
    return (
      <div className="border m-3" >
        <div className='row my-3'>
          <div className='col-12 text-center h1'>
            Proyecto: Aplicación web de Gestión de Proyectos
          </div>
        </div>
        <div className='row border-top border-bottom mx-0' >
          <div className='col-4 text-center h5 m-0'>
            Actividad
          </div>
          <div className='col-8 text-center border-left h5 m-0'>
            Progreso
          </div>
        </div>
          {<Actividades cantidad={12} />}
      </div>
    );
  }
}

export default App;
