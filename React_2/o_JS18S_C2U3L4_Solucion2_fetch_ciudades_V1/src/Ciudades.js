import React, { Component } from 'react'
import Ciudad from './Ciudad';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'


export default class Ciudades extends Component {
  constructor(props){
    super(props);
  }

  colocarCiudad = (nombreCiudad,geonameId) => {
      this.props.colocarCiudad(nombreCiudad,geonameId);
  }

  render() {
    var ciudades = <option>Seleccione una ciudad</option>
    if (this.props.buscarCiudad){
      if (this.props.ciudades) {
        console.log('prop buscar: '+this.props.buscarCiudad+' props ciudad: '+
        this.props.ciudades.geonames[0].name+
        'comparacion: '+this.props.ciudades.geonames[0].name.toUpperCase().indexOf(this.props.buscarCiudad.toUpperCase()))
        ciudades = this.props.ciudades.geonames.map((ciudad, index) => {
          if (ciudad.name.toUpperCase().indexOf(this.props.buscarCiudad.toUpperCase())>=0)
            {
                console.log('Name: '+ciudad.name)
                return <Ciudad name={ciudad.name} key={index}
                colocarCiudad={this.colocarCiudad} geonameId={ciudad.geonameId}/>
            }
        })
      }
    }

    return (
      <div className='list-group' id='lista_paises'>
          {ciudades}
      </div>
    )
  }
}