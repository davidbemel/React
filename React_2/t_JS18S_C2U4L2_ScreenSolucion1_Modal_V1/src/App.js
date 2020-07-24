import React, { Component } from 'react';
import Modal from './Modal.js';
import './Modal.css'

const mainStyle = {
	app: {
		margin: "120px 0"
	}};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false,
			isInnerModalOpen: false};
		this.closeModal = this.closeModal.bind(this);
		this.openModal = this.openModal.bind(this);
	}

	closeModal() {
		this.setState({
			isModalOpen: false
    });
    document.body.className='normalPage'
    document.getElementById('boton').className='btn bton-lg btn-primary ml-5'
	}


	openModal() {
		this.setState({
			isModalOpen: true
    });
    document.body.className='overlay'
    document.getElementById('boton').className='btn bton-lg btn-primary ml-5 disabled'
	}

	render() {
		return (
			<div style={mainStyle.app}>
				<div className='btn bton-lg btn-primary ml-5' onClick={this.openModal}
        id='boton'>
					Abril ventana modal
				</div>
				<Modal
					isModalOpen={this.state.isModalOpen}
					closeModal={this.closeModal}>
					<p><strong>Ventana Modal</strong></p>
				</Modal>
			</div>
		);
	}
}

export default App;
