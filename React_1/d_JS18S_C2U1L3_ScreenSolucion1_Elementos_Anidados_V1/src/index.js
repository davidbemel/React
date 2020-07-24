import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

var listElement1 = React.createElement('li',{id:'item1',type:'circle'},'Uno');
var listElement2 = React.createElement('li',{id:'item2',type:'disc'},'Dos');
var listElement3 = React.createElement('li',{id:'item3',type:'square'},'Tres');
var listElement4 = React.createElement('li',{id:'item4',type:'1'},'Cuatro');
var listElement5 = React.createElement('li',{id:'item5',type:'a'},'Cinco');
var listElement6 = React.createElement('li',{id:'item6',type:'A'},'Seis');

var elements = [listElement1,listElement2,listElement3,
            listElement4,listElement5, listElement6];

var listOfElements = React.createElement('lu','',elements);

ReactDOM.render(listOfElements,document.getElementById('list'));

serviceWorker.unregister();
