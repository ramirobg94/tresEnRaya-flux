
var React = require('react');
var ReactDOM = require('react-dom');

const contadorStyle = {
	height: '100%',
	marginRight: 'auto',
	marginLeft: 'auto',
	fontSize: '3em',
	borderRadius: '5em',
	background: '#9fff0f',
	color: '#6f0fff'
};

var Contador = React.createClass({
	render: function(){
		return (
			<div style={contadorStyle}className="contadorTamaño text-center">
				{this.props.nmovimientos}
			</div>
		)
	}
});

module.exports = Contador;