import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const tasks = [
    {actividad:'Tarea 1', fechaIni:'19/08/2018', fechaFin:'20/08/2018',complete:false},
    {actividad:'Tarea 2', fechaIni:'16/08/2018', fechaFin:'20/08/2018',complete:false},
    {actividad:'Tarea 3', fechaIni:'01/08/2018', fechaFin:'08/08/2018',complete:false},
    {actividad:'Tarea 4', fechaIni:'19/07/2018', fechaFin:'29/07/2018',complete:false}
]

ReactDOM.render(<App tasks={tasks}/>, document.getElementById('root'));
registerServiceWorker();
