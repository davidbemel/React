import React, { Component } from 'react'

export default class TabName extends Component {
  render() {
    return (
      <a className={"border nav-link py-4 "+this.props.active} id={'tabName-'+this.props.tabIndex}
      data-toggle="pill" href='#' role="tab" aria-controls="v-pills-home" name='tabName'
      aria-selected="true" align='center' ><span className={'fa pr-2 '+this.props.icon}></span>
      <br/>{this.props.children}</a>
    )
  }
}
