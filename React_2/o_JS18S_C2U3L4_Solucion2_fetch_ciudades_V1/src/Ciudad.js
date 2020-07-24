import React, { Component } from 'react'

export default class Ciudad extends Component {
  manejoOnClick = (e,name) => {
    this.props.colocarCiudad(name,this.props.geonameId);
  }
  render() {
    return (
        <button type="button" className="list-group-item list-group-item-action"
        id={this.props.geonameId} onClick={(e) => this.manejoOnClick(e,this.props.name)}>
        {this.props.name}</button>
    )
  }
}