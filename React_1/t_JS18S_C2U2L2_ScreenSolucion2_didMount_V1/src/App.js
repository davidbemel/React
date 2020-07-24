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
        fa_spin:'fa-spin'
      }
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

    componentDidMount(){
      this.interval = setInterval(() => this.tick(),1000)
    }

    render() {
      return(
      <div className='border border-primary m-3 p-3'> 
        <p className='font-weight-light'>Segundos a Esperar: {this.state.tiempo}</p>
        <p className='font-weight-light'>Segundos trancurridos: {this.state.contador}</p>
        <div className="progress m-3">
          <p className='pr-2'><i className={"fa fa-spinner size "+this.state.fa_spin}></i></p>
          <div class="progress-bar" role="progressbar"  
          aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
          style={{width:this.state.avance+'%'}}>{this.state.avance.toFixed(2)}%</div>
        </div>
      </div>
      );
    }
    
  }

export default App;
