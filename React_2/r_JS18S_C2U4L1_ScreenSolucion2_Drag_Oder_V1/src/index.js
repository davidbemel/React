import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import registerServiceWorker from './registerServiceWorker';
import Principal from './Principal';
//import App2 from './App2';
import './draganddrop2.css'
//import Tareas from './Tareas';

ReactDOM.render(<Principal/>, document.getElementById('root'));
//ReactDOM.render(<App2 />,document.getElementById('root'));
//var colors = ["Red","Green","Blue","Yellow","Black","White","Orange"];

//ReactDOM.render(<Principal />, document.body);
registerServiceWorker();