import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleLogin from './GoogleLogin'

class App extends Component {
  constructor(props){
    super(props);
    this.state={logged:false};
  }
  
  loginStatus = (loginGoogle) => {
    this.setState({logged:loginGoogle})
  }

  render() {
    if (this.state.logged)
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <GoogleLogin loginStatus={this.loginStatus} logged={true}/>
        </div>
      );
    else
      return (<GoogleLogin loginStatus={this.loginStatus} logged={false}/>);
  }
}

export default App;
