import React, { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div class='border rounded login m-5 container'>
      <h2>Ingreso</h2>
      <form>
        <div class="input-group pb-3">
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fa fa-envelope-o fa-fw"></i></span>
          </div>
          <input class="form-control" type="text" placeholder="Correo Electrónico"/>
        </div>
        <div class="input-group pb-3">
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fa fa-key fa-fw"></i></span>
          </div>
          <input class="form-control" type="password" placeholder="Contraseña"/>
        </div>
      </form>
      </div>
    );
  }
}

export default App;
