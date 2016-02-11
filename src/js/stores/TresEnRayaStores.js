'use strict';

const EventEmitter = require('events').EventEmitter;

var TresEnRayaDispatcher = require('../dispatchers/TresEnRayaDispatcher');
var Constants = require('../constants/TresEnRayaConstants');
var turno = Constants.JUGADORX;

var valoresTablero = [['-','-','-'],['-','-','-'],['-','-','-']];
var jugando = 1;
var nMovs = 0;
var lastX = 0;
var lastY = 0;
var resultado = 'n'; //0-jug0 ; 1-jug1 ; 2-empate

var TresEnRayaStore = Object.assign({},EventEmitter.prototype, {
	getTurno: function (){
		return turno;
	},
	getValores: function(){
		return valoresTablero;
	},
	getNMovs: function(){
		return nMovs;
	},
	getResultado: function(){
		return resultado;
	},
	getLastX: function(){
		return lastX;
	},
	getLastY: function(){
		return lastY;
	},
	addChangeListener(callback){
		this.on(Constants.CHANGE_EVENT, callback);
	},
	removeChangeListener(callback){
		this.removeListener(Constants.CHANGE_EVENT, callback);
	},
	emitChange() {
		this.emit(Constants.CHANGE_EVENT);
	}
});

TresEnRayaDispatcher.register(function (payload) {
	switch(payload.type) {
		case Constants.ActionTypes.JUGAR_POSICION:
			//console.log("A"+turno);
			let nuevoValor = turno === Constants.JUGADORX ? 'X' : '0';
			turno = turno === Constants.JUGADORX ? Constants.JUGADOR0 : Constants.JUGADORX;
			valoresTablero[payload.x][payload.y] = nuevoValor;
			nMovs = nMovs +1;
			lastX = payload.x;
			lastY = payload.y;
			TresEnRayaStore.emitChange();
			break;
		case Constants.ActionTypes.COMPROBAR_GANADOR:
			let valores = valoresTablero;
			var ganador = turno === Constants.JUGADORX ? Constants.JUGADOR0: Constants.JUGADORX;  
			console.log("jugando comprobando" + lastX + '.' + lastY);
			let valorJug = ganador === Constants.JUGADORX ? 'X':'0';
			//console.log(resultado);
			resultado = 'n';
			//console.log("resultado"+ resultado)
		 	var ganado = false;
		 	var numeroFila  = lastX;
		 	var numeroColumna = lastY;
		 	//console.log(numeroFila + ':' + numeroColumna + "?" + nMovs);
			//console.log(jugando);

			if(jugando > 0){
				if(nMovs >= 5 && nMovs <= 9 ){
					if( (valores[0][numeroColumna] == valorJug && valores[1][numeroColumna] == valorJug && valores[2][numeroColumna] == valorJug) || 
						(valores[numeroFila][0] == valorJug && valores[numeroFila][1] == valorJug && valores[numeroFila][2] == valorJug) || 
						(valores[1][1] == valorJug && ( (valores[0][0] == valorJug && valores[2][2] == valorJug ) || (valores[0][2] == valorJug && valores[2][0] == valorJug) ) )
					){
						ganado = true;
						alert("Gana el: "+ ganador);
						resultado = valorJug;
						//console.log("Gana el: "+ ganador);
						for(var i=0;i<3;i++){
							for(var j=0;j<3;j++){
								if(valores[i][j] === '-'){ valores[i][j]='\v';}
							}
						}
							jugando = 0;
							valoresTablero = valores;
							TresEnRayaStore.emitChange();
					}else if(nMovs === 9 ){
							alert("empate");
							jugando = 0;
							resultado = '-';
							TresEnRayaStore.emitChange();
					}
				}else if (nMovs > 9){
					alert("empate");
					jugando= 0;
					resultado = '-';
					TresEnRayaStore.emitChange();
				}
			}
			break;
		case Constants.ActionTypes.RESETEAR:
			console.log("reiniciando");
			turno = Constants.JUGADORX;	
			valoresTablero = [['-','-','-'],['-','-','-'],['-','-','-']];
			jugando = 1;
			nMovs = 0;
			lastX = 0;
			lastY = 0;
			TresEnRayaStore.emitChange();
		break;
	}
});

module.exports = TresEnRayaStore;