import React, { Component } from 'react'

export default class Paises extends Component {
  constructor(props){
      super(props)
      this.state={paises:[]}
  }

  componentWillMount(){
    fetch('https://restcountries.eu/rest/v2/all?fields=name;alpha2Code')
      .then((response) => {
        return  response.json();
      })
      .then((paisesJson) => {
          this.setState({paises:paisesJson})
      })
  }

  render() {
    return (
        <select class="form-control" id="sel1">
            {this.state.paises.map((pais) =>
                <option value={pais.alpha2Code}>{pais.name}</option>
            )}
        </select>
    )
  }
}
