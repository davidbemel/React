import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<div>Nuevo Nodo Html</div>, document.getElementById("html"));
const element = (<div>Son las {new Date().toLocaleTimeString()}</div>);
ReactDOM.render(element,document.getElementById("time"));
const element1 = React.createElement('p',{align:'center'},'Nuevo Párrafo');
ReactDOM.render(element1,document.getElementById('parrafo'));
registerServiceWorker();
