import React, { Component } from 'react';
//import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'


class App extends Component {
  constructor(){
    super();
    this.state={
      contadorH:0,
      contadorM:0,
      contadorS:0,
      contadorm:0
    };
    this.interval = setInterval(this.contar,10)
  }

  contar = () => {

    this.setState((prevState) => {
      var tempContm = prevState.contadorm+1
      var tempContS = prevState.contadorS
      var tempContM = prevState.contadorM
      var tempContH = prevState.contadorH
      if (tempContm === 100) {
        tempContm = 0
        tempContS = tempContS + 1
      }
      if (tempContS === 60){
        tempContS=0
        tempContM = tempContM+1
      }
      if (tempContM === 60){
        tempContM=0
        tempContH=tempContH+1
      }
      return {
        contadorm: tempContm,
        contadorS: tempContS,
        contadorM: tempContM,
        contadorH: tempContH
      }
    })
  }

  render() {
    return (
      <div className='container border rounded m-5' style={{width:'450px'}} >
        <div className='row' >
          <div className='col-sm-12 text-center h3' >
            <strong>Cronómetro</strong>
          </div>
        </div>
        <div className='row h1 text-center m-0 p-0 border rounded my-3' >
          <div className='col-sm-2' id='horas'>
          {this.state.contadorH}
          </div>
          <div className='col-sm-1' >
            :
          </div>
          <div className='col-sm-2'>
          {this.state.contadorM}
          </div>
          <div className='col-sm-1' >
            :
          </div>
          <div className='col-sm-2'>
          {this.state.contadorS}
          </div>
          <div className='col-sm-1' >
            :
          </div>
          <div className='col-sm-2' >
           {this.state.contadorm}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
