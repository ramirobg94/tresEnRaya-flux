import { Button } from 'react-bootstrap';
var React = require('react');
var ReactDOM = require('react-dom');
var Bootstrap = require('react-bootstrap');

var TresEnRayaActions = require('../actions/TresEnRayaActions');

const boton = {
	marginTop: '40px',
	width: '29%'
};

let BtnReinicio = React.createClass({
	btnClick: function(){
			//console.log("toca hacer esta mierda" + this.props.resultado);
			TresEnRayaActions.guardarHistoria(this.props.resultado);
			TresEnRayaActions.resetear();
	},
	render: function(){
		return (
				<div className="col-xs-12">
					<Button style={boton} bsStyle="primary btn btn-lg" onClick={this.btnClick}> Reiniciar <span className="glyphicon glyphicon-refresh" ></span> </Button>
				</div>
			)
	}
});

module.exports = BtnReinicio;