import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

var pan_imagen = React.createElement('img',{src: 'photo.jpg',alt:'Pan',class: 'img_pan'});
var p_ingredientes = React.createElement('p','',
        'A continuación se indican los ingredientes necesario para hacer la receta de pan:');
var ingrediente1 = React.createElement('li',{type: 'circle'},
        <b>15 gr</b>,' levadura fresca');
var ingrediente2 = React.createElement('li',{type: 'circle'},
        <b>1 cda</b>,' azúcar');
var ingrediente3 = React.createElement('li',{type: 'circle'},
        <b>1 cda</b>,' sal');
var ingrediente4 = React.createElement('li',{type: 'circle'},
        <b>3 cdas</b>,' de aceite de oliva');
var ingrediente5 = React.createElement('li',{type: 'circle'},
        <b>300 ml</b>,' agua templada', <i> (1 taza 1/2)</i>);
var ingrediente6 = React.createElement('li',{type: 'circle'},
        <b>500 gr</b>,' harina');

var l_ingredientes = [ingrediente1, ingrediente2, ingrediente3, 
        ingrediente4, ingrediente5, ingrediente6];
var ingredientes = React.createElement('div',
        {class: 'ingredientes'},
        p_ingredientes,
        React.createElement('div',{class: 'l_ingredientes'},
        React.createElement('ul','',l_ingredientes)));

var pasos = <div className='pasos'>
        <p>Ahora que ya tienes los ingredientes medidos 
        y preparados sigue los siguientes pasos para lograr hacer tu pan.</p>
        <div class='l_pasos'>
            <ol>
                <li>
                Primero hay que hidratar la levadura. Ponn la levadura 
                con un poco de agua, el aceite y el azúcar. Revuelve hasta 
                que este todo disuelto.
                </li>
                <li>
                Incorpora 5 cda. De harina y cuando esté todo integrado 
                deja reposar aprox 10 minutos. Tapado con repasador.
                </li>
                <li>
                Termina de incorporar La harina junto con la sal y el agua.
                </li>
                <li>
                Amasa durante unos 2 minutos aprox. Y deja reposar unos 30 minutos.
                </li>
                <li>
                Saca el aire amasando un poco más y forma un bollo que debes colocar
                en la asadera aceitada.
                </li>
                <li>
                Aplica unos cortes y espolvorea con harina.
                </li>
                <li>
                Tapa con un recipiente apto de horno y aceitado. 
                Esto es para conservar la humedad.
                </li>
                <li>
                Por último lleva al horno recién encendido a 200 grados celsius, 
                fuego arriba y abajo, durante 45 minutos aprox.
                </li>
            </ol>
        </div>
        <p>Ya haz hecho tu primer pan, ahora disfrútalo.</p>
    </div>;

ReactDOM.render(pan_imagen,document.getElementById('img_pan'));
ReactDOM.render(<h1 align='center'> Receta de pan, fácil de hacer</h1>,
document.getElementById('titulo'));
ReactDOM.render(ingredientes,document.getElementById('ingredientes'));
ReactDOM.render(pasos,document.getElementById('pasos'));


registerServiceWorker();
