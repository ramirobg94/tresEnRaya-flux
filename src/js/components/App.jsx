const Tablero = require('./Tablero.jsx');
const Cabecera = require('./Cabecera.jsx');
const BtnReinicio = require('./BtnReinicio.jsx');
const Contador = require('./Contador.jsx');
const Historial = require('./Historial.jsx');
//const JUGADORX = "jugador 1 - las X";
//const JUGADORO = "jugador 2 - las O";
var TresEnRayaStore = require('../stores/TresEnRayaStores');
var HistoriaStore = require('../stores/HistoriaStores');
var TresEnRayaActions = require('../actions/TresEnRayaActions');

import { Button } from 'react-bootstrap';
var React = require('react');
var ReactDOM = require('react-dom');
var Bootstrap = require('react-bootstrap');
//require('bootstrap/css/bootstrap.css');

const boton = {
	marginTop: '40px',
	width: '29%'
};

function getAppStateFromStore(){
	return {
		turno: TresEnRayaStore.getTurno(),
		valores: TresEnRayaStore.getValores(),
		nmovimientos: TresEnRayaStore.getNMovs(),
		partidas: HistoriaStore.getPartidas(),
		resultado: TresEnRayaStore.getResultado()
	};
}

var App = React.createClass({
	getInitialState: function(){
		return getAppStateFromStore();
	},
	componentDidMount(){
		TresEnRayaStore.addChangeListener(this._onChange);
	},
	componentWillUnmount() {
		TresEnRayaStore.removeChangeListener(this._onChange);
	},
	//componentWillUpdate(){
	//	TresEnRayaActions.guardarHistoria();
	//},
	componentDidUpdate(){
		TresEnRayaActions.comprobarGanador()
	},
	_onChange: function() {
		this.setState(getAppStateFromStore());
	},
	render: function(){
		var texto = "Turno del " + this.state.turno;
		return (
			<div>
				<div className="col-xs-12"><Cabecera texto={texto}/></div>
				<div className="col-xs-12"><Contador nmovimientos={this.state.nmovimientos}/></div>
				<div className="col-xs-12"><Tablero valores={this.state.valores}/></div>
				<div className="col-xs-12">
				<BtnReinicio resultado={this.state.resultado}/>
				</div>
				<div className="col-xs-12">
				<Historial partidas={this.state.partidas}/>
				</div>
			</div>
		)
	}
});
module.exports = App;	