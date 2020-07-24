import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FB_Login from './FB_Login';

class App extends Component {
  constructor(props){
    super(props);
    this.state={logged:false};
  }

  loginStatus = (login) =>{
    this.setState({logged:login})
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
          <FB_Login loginStatus={this.loginStatus} logged={true}/>
        </div>
      );
    else
      return (
        <FB_Login loginStatus={this.loginStatus}/>
      )
  }
}

export default App;
