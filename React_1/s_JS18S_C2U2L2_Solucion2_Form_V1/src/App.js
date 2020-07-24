import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'


class App extends Component {
  constructor(props){
    super(props);
    this.state={registrado:false}
  }

  registrar = () => {
    this.setState({
      registrado:true,
      usuario:document.getElementById('nombre').value
    })
  }

  render() {
    if (this.state.registrado)
      return (
        <div>
          Usuario <strong>{this.state.usuario}</strong> registrado
        </div>
      )
    else
    return (
      <div class="container border ounded m-3" style={{width:'350px'}}>
			<div class="row">
				<div class="col-sm-12">
	               <div class="panel-title text-center">
	               		<h1 class="title">Registro de Usuario</h1>
	               		<hr />
	               	</div>
	            </div> 
				<div class="row pl-4 ml-3">
					<form class="col-sm-12" method="post" action="#">
						
						<div class="form-group">
							<label for="nombre" class="cols-sm-2 control-label">Nombre Completo</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-user fa pr-2" aria-hidden="true"></i></span>
									<input type="text" class="form-control" name="nombre" id="nombre"  placeholder="Nombre completo"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="email" class="cols-sm-2 control-label">Correo Electrónico</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-envelope fa pr-2" aria-hidden="true"></i></span>
									<input type="text" class="form-control" name="email" id="email"  placeholder="Correo Electrónico"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="username" class="cols-sm-2 control-label">Nombre de Usuario</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-users fa pr-2" aria-hidden="true"></i></span>
									<input type="text" class="form-control" name="username" id="username"  placeholder="Nombre de usuario"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="password" class="cols-sm-2 control-label">Contraseña</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-lock fa-lg pr-2" aria-hidden="true"></i></span>
									<input type="password" class="form-control" name="password" id="password"  placeholder="Contraseña"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="confirm" class="cols-sm-2 control-label">Confirmar Contraseña</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-lock fa-lg pr-2" aria-hidden="true"></i></span>
									<input type="password" class="form-control" name="confirm" id="confirm"  placeholder="Confirmar Contraseña"/>
								</div>
							</div>
						</div>

						<div class="form-group ">
							<button type="button" class="btn btn-primary btn-lg btn-block login-button"
                onClick={this.registrar}>
                Registrar</button>
						</div>
					</form>
				</div>
			</div>
		</div>
    );
  }
}

export default App;
