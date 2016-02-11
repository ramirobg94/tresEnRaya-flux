var React = require('react');
var ReactDOM = require('react-dom');

const azuld = {
	background: '#0f9fff',
	color: '#ffe70f',
	borderRadius: '0em 2em 2em 0em '
}
const azuli = {
	background: '#0f9fff',
	color: '#ffe70f',
	borderRadius: '2em 0em 0em 2em'
}
const rojod = {
	background: '#ff0f27',
	color: '#fff',
	borderRadius: '0em 2em 2em 0em '
}
const rojoi = {
	background: '#ff0f27',
	color: '#fff',
	borderRadius: '2em 0em 0em 2em'
}
const empi = {
	background: '#9FFF0F',
	color: '#6F0FFF',
	borderRadius: '2em 0em 0em 2em'
}
const empd = {
	background: '#9FFF0F',
	color: '#6F0FFF',
	borderRadius: '0em 2em 2em 0em '
}
const nod = {
	background: '#DDD',
	color: '#333',
	borderRadius: '0em 2em 2em 0em '
}
const noi = {
	background: '#DDD',
	color: '#333',
	borderRadius: '2em 0em 0em 2em'
}

var Historial = React.createClass({
	render: function(){
		//console.log(this.props.partidas);
		var partidas = this.props.partidas;
		console.log(partidas);
		var partidasComponents = partidas.map(function(partida){
			var styloAd = {};
			var styloAi = {};
			var texto = '';
			switch(partida[1]){
				case "X":
					//for(var atrr in casillaStyle){ rojo[atrr] = casillaStyle[atrr]}
					styloAd = rojod;
					styloAi = rojoi;
					texto = 'gana jugador 1 - las X';
					break;
				case "0":
					//for(var atrr in casillaStyle){ azul[atrr] = casillaStyle[atrr]}
					styloAd = azuld;
					styloAi = azuli;
					texto = 'gana jugador 0 - las 0';
					break;
				case "n":
					//for(var atrr in casillaStyle){ azul[atrr] = casillaStyle[atrr]}
					styloAd = nod;
					styloAi = noi;
					texto = 'no acabó';
					break;
				case "-":
					//for(var atrr in casillaStyle){ azul[atrr] = casillaStyle[atrr]}
					styloAd = empd;
					styloAi = empi;
					texto = 'empate';
					break;
				default:
					//styloA = casillaStyle;
			}


			return <div><div  style={styloAi} className="col-xs-3 id">Nª {partida[0]}</div><div style={styloAd} className="col-xs-9 partida">{texto}</div></div>;
		});
		return 	<div className="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4">
				<h1> Historial de partidas </h1>
				{partidasComponents}	
			</div>
	}
});

module.exports = Historial;