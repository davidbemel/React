import React, { Component } from 'react';
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
      if (tempContH===24){
        clearInterval(this.interval)
      }
      return {
        contadorm: tempContm,
        contadorS: tempContS,
        contadorM: tempContM,
        contadorH: tempContH
      }
    })
  }

  componentDidUpdate(){
    const valors = Number(document.getElementById('segundos').innerHTML)
    const valorM = Number(document.getElementById('minutos').innerHTML)
    const valorH = Number(document.getElementById('horas').innerHTML)
    if (valors < 10)
      document.getElementById('segundos').innerHTML='0'+valors
    if (valorM < 10)
      document.getElementById('minutos').innerHTML='0'+valorM
    if (valorH < 10)
      document.getElementById('horas').innerHTML='0'+valorH
  }

  render() {
    return (
      <div className='container border rounded m-5 bg-primary' style={{width:'450px'}} >
        <div className='row'>
          <div className='col-sm-3 border-right' >
          <span className='fa fa-clock-o my-3' style={{fontSize:'100px', color:'white'}} ></span>
          </div>
          <div className='col-sm-9' >
        <div className='row' >
          <div className='col-sm-12 text-center text-primary h3 mt-1' >
            <strong className='text-white'>Cronómetro</strong>
          </div>
        </div>
        <div className='row text-white h1 text-center m-0 p-0 border rounded my-3 bg-info' >
          <div className='col-sm-2' id='horas'>
          {this.state.contadorH}
          </div>
          <div className='col-sm-1' >
            :
          </div>
          <div className='col-sm-2' id='minutos' >
          {this.state.contadorM}
          </div>
          <div className='col-sm-1' >
            :
          </div>
          <div className='col-sm-2' id='segundos'>
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
        </div>
      </div>
    );
  }
}

export default App;
