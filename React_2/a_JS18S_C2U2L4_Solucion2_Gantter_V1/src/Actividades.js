import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css';

export default class Actividades extends Component {

  actividades = (cantidad) => {
    let actividades = []
    for (let index = 1; index <= cantidad; index++) {
      const avance = (Math.random()*100).toFixed(0);
      const esperado = (Math.random()*100).toFixed(0);
      var estilo='';
      if (avance-esperado < -10){
        console.log('Menor -10')
        estilo = 'bg-danger';
      } else if (avance-esperado <= -5){
        estilo='bg-warning';
      } else if (avance-esperado < 0){
        console.log('Mayor -5')
        estilo='bg-info';
      } else if (avance-esperado >= 5) {
        estilo='bg-success';
      }
      actividades.push(
        <div className='row mx-0' key={index} >
          <div className='col-3 border-bottom text-primary font-weight-light'>{'Actividad '+index}</div>
          <div className='col-1 border-bottom text-primary font-weight-light'>{esperado+'%'}</div>
          <div className='col-1 border-bottom text-primary font-weight-light'>{avance+'%'}</div>
          <div className='col-7 border-left mt-1'>
            <div className="progress">
              <div className={"progress-bar "+estilo} role="progressbar" aria-valuenow="70"
              aria-valuemin="0" aria-valuemax="100" style={{width:avance+'%'}}>
                {avance+'%'}
              </div>
            </div>
          </div>
        </div>
      )
    }
    return (
      actividades
    )
  }

  render() {
    return (
      <div>
        {this.actividades(this.props.cantidad)}
      </div>
    )
  }
}
