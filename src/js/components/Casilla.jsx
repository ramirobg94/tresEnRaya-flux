import { Button } from 'react-bootstrap';
var React = require('react');
var ReactDOM = require('react-dom');
var Bootstrap = require('react-bootstrap');

var TresEnRayaActions = require('../actions/TresEnRayaActions');

const casillaStyle = {
	width: '100%',
	height: '100%',
	marginTop: '3%',
	marginBottom: '3%',
	fontSize: '3em',
	padding: '0'
};
const casillasTamaño = {
	padding: '3%'
};
const azul = {
	background: '#0f9fff',
	color: '#ffe70f'

}
const rojo = {
	background: '#ff0f27',
	color: '#FFF'
}
/*
let Casilla = React.createClass({
		casillaClick: function(){	
			if(this.props.valor==="-"){
				this.props.manejadorClick(this.props.indiceFila,this.props.indiceColumna);
		}	
		},
		render: function() { ... }
});
*/

let Casilla = React.createClass({
	casillaClick: function(){
		if(this.props.valor==="-"){
			TresEnRayaActions.jugarPosicion(this.props.indiceFila, this.props.indiceColumna);
			//TresEnRayaActions.comprobarGanador(this.props.indiceFila, this.props.indiceColumna);
		}
	},
	render: function(){
		var styloA = {};
			switch(this.props.valor){
				case "X":
					for(var atrr in casillaStyle){ rojo[atrr] = casillaStyle[atrr]}
					styloA = rojo;
					break;
				case "0":
					for(var atrr in casillaStyle){ azul[atrr] = casillaStyle[atrr]}
					styloA = azul;
					break;
				default:
					styloA = casillaStyle;
			}

		return (
			<div className="col-xs-4 casillasTamaño" style={casillasTamaño}>
				<Button style={styloA} bsStyle="primary btn btn-lg" className={this.props.valor==="-" ? "clickable":"no_clickable"} onClick={this.casillaClick}>
					{this.props.valor}
				</Button>
			</div>
			)
	}
});

module.exports = Casilla;