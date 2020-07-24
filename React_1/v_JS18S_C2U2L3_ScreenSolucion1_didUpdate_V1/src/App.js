import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      contador:0,
      tiempo:this.props.tiempo,
      avance:0,
      fa_spin:''
    }
  }

  start = () =>{
    clearInterval(this.interval)
    this.interval = setInterval(() => this.tick(),1000)
    this.setState({
      start:true,
      tiempo:this.tiempo.value,
      contador:0,
      avance:0
    })
  }

  tick(){
    this.setState((prevState) => ({
      contador: prevState.contador + 1,
      avance: ((prevState.contador + 1)/prevState.tiempo)*100
    }))
    if (this.state.avance>=100)
    {
      this.setState({
        fa_spin:''
      })
      clearInterval(this.interval)
    }
  }

  componentDidUpdate(){
    if (this.state.avance>=100)
      this.spinner.className='fa fa-spinner font-size'
    else 
    this.spinner.className='fa fa-spinner font-size fa-spin'
  }

  render() {
    return(
    <div className='border border-primary m-3 p-3'> 
      
      <div>
          <div className="input-group pb-3 size">
            <div className="input-group-prepend">
              <span className="input-group-text">Segundos a esperar
              <i className="fa fa-clock-o fa-fw"></i></span>
              <input id='tiempo' className="form-control"
            type="text" placeholder=""
            ref={input => this.tiempo = input}/>
            </div>
          </div>
          <div className='btn-group pb-3 position' ref = {div => this.boton_start = div}>
            <a className="btn btn-primary" onClick={this.start}>
            <i className="fa fa-play-circle fa-fw"></i>Iniciar</a>
          </div>
      </div>
      <p className='font-weight-light'>Segundos trancurridos: {this.state.contador}</p>
      <div className="progress m-3">
        <p className='pr-2'><i className={"fa fa-spinner font-size "+this.state.fa_spin}
        ref ={i => this.spinner = i}></i></p>
        <div class="progress-bar" role="progressbar"  
        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
        style={{width:this.state.avance+'%'}}>{this.state.avance.toFixed(2)}%</div>
      </div>
    </div>
    );
  }
  
  }

export default App;
