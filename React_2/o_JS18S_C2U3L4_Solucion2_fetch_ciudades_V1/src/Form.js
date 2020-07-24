import React, { Component } from 'react'
import Paises from './Paises'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import Ciudades from './Ciudades';

export default class Form extends Component {
  constructor(props){
    super(props);
    this.state={buscarPais:'',
                buscarCiudad:''}
 }

  manejoOnChange = (e) => {
    if(e.target.id==='pais'){
        const nombrePais = e.target.value;
        if (nombrePais.length > 2){
        this.setState({buscarPais:nombrePais});
        }
    }
    else if (e.target.id==='ciudad'){
        const nombreCiudad = e.target.value;
        if (nombreCiudad.length > 2){
            this.setState({buscarCiudad:nombreCiudad});
        }
        console.log('Ciudades: '+nombreCiudad)
    }
  }

  colocarPais = (nombrePais, geonameId) => {
    document.getElementById('pais').value=nombrePais;
    this.setState({buscarPais:''})
    console.log('geonameId: '+geonameId)
    fetch('http://api.geonames.org/childrenJSON?geonameId='+geonameId+'&lang=es&username=react_example')
      .then((response) => {
        return  response.json();
      })
      .then((ciudadesJson) => {
          this.setState({ciudades:ciudadesJson})
      })
  }

  colocarCiudad = (nombreCiudad, geonameId) => {
    document.getElementById('ciudad').value=nombreCiudad;
    this.setState({buscarCiudad:''})
    console.log('geonameId: '+geonameId)
  }

  componentDidMount(){
    fetch('http://api.geonames.org/countryInfoJSON?lang=es&username=react_example')
      .then((response) => {
        return  response.json();
      })
      .then((paisesJson) => {
          this.setState({paises:paisesJson})
      })
  }

  componentDidUpdate(){
    if (this.state.ciudades)
      console.log(this.state.ciudades.geonames[0].name)
  }

  render() {
    var paises = ''
    var ciudades = ''
    if (this.state.buscarPais) {
      paises = <Paises buscarPais={this.state.buscarPais} colocarPais={this.colocarPais} 
                paises={this.state.paises} />;
    }
    if (this.state.ciudades) {
        ciudades = <Ciudades buscarCiudad={this.state.buscarCiudad} colocarCiudad={this.colocarCiudad} 
                  ciudades={this.state.ciudades} />;
      }
    return (
        <div className='border m-3 p-3'>
        <h2>{this.props.formName}</h2>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label >{this.props.input1}</label>
                    <div className='input-group'>
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-user fa-fw"></i></span>
                        </div>
                        <input type="text" className="form-control" id="inputFirstName" placeholder={this.props.input1}/>
                    </div>
                </div>
                <div className="form-group col-md-6">
                    <label >{this.props.input2}</label>
                    <div className='input-group'>
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-user fa-fw"></i></span>
                        </div>
                        <input type="text" className="form-control" id="inputLastName" placeholder={this.props.input2}/>
                    </div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label >{this.props.input3}</label>
                    <div className='input-group'>
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-envelope-o fa-fw"></i></span>
                        </div>
                        <input type="email" className="form-control" id="inputEmail4" placeholder={this.props.input3}/>
                    </div>
                </div>
                <div className="form-group col-md-6">
                    <label >{this.props.input4}</label>
                    <div className='input-group'>
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-key fa-fw"></i></span>
                        </div>
                        <input type="password" className="form-control" id="inputPassword4" placeholder={this.props.input4}/>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label >{this.props.input5}</label>
                <div className='input-group'>
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-home fa-fw"></i></span>
                    </div>
                    <input type="text" className="form-control" id="inputAddress" placeholder={this.props.input5}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label >{this.props.input6}</label>
                    <input className="form-control"  type='text' placeholder='País' id='pais'
                      onChange={this.manejoOnChange}/>
                    <div className='row'>
                      <div className='col-md-12'>
                        {paises}
                      </div>
                    </div>
                </div>
                <div className="form-group col-md-6">
                    <label >Estado</label>
                    <input type="text" className="form-control" id="ciudad"
                     onChange={this.manejoOnChange}/>
                    <div className='row'>
                      <div className='col-md-12'>
                        {ciudades}
                      </div>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" >
                        Estoy de acuerdo con el registro de mis datos personales
                    </label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">{this.props.buttonName}</button>
        </div>
    )
  }
}
