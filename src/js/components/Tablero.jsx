const Casilla = require("./Casilla.jsx");

var React = require('react');
var ReactDOM = require('react-dom');

var Tablero = React.createClass({
	render: function(){
		let casillas = this.props.valores.map(function(valoresFila, indiceFila){
			let fila = valoresFila.map(function(valor, indiceColumna){
				let mykey = ""+indiceFila+indiceColumna;
				return (
					<Casilla valor={valor} indiceFila={indiceFila}	indiceColumna={indiceColumna} key={mykey}/>
					)
				}.bind(this));
			return (
				<div key={"fila"+indiceFila}>
					{fila}
				</div>
				)
			}.bind(this));
			return (
				<div className="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4">
					{casillas}
				</div>
			);
		}
});

module.exports = Tablero;