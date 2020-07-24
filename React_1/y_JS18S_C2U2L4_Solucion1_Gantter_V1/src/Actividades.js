import React, { Component } from 'react'

export default class Actividades extends Component {

  actividades = (cantidad) => {
    let actividades = []
    for (let index = 1; index <= cantidad; index++) {
      const avance = (Math.random()*100).toFixed(0)+'%';
      actividades.push(
        <div className='row mx-0' >
          <div className='col-4 border-bottom'>{'Actividad '+index}</div>
          <div className='col-8 border-left mt-1'>
            <div class="progress">
              <div class="progress-bar" role="progressbar" aria-valuenow="70"
              aria-valuemin="0" aria-valuemax="100" style={{width:avance}}>
                {avance}
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
