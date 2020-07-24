import React from 'react'
import Tareas from "./Tareas";
import './draganddrop2.css'


export default class App2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			colors: ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Orange']
		}
	}
	render() {
		return (
			<div>
        <Tareas colors={this.state.colors} />	
			</div>
		)
	}
}