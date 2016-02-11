var TresEnRayaDispatcher = require('../dispatchers/TresEnRayaDispatcher');
var Constants = require('../constants/TresEnRayaConstants')

module.exports = {
	jugarPosicion: function(x,y) {
		TresEnRayaDispatcher.dispatch({
			type : Constants.ActionTypes.JUGAR_POSICION,
			x : x,
			y : y
		});
	},
	comprobarGanador: function(){
		TresEnRayaDispatcher.dispatch({
			type : Constants.ActionTypes.COMPROBAR_GANADOR
		});
	},
	resetear: function(){
		TresEnRayaDispatcher.dispatch({
			type : Constants.ActionTypes.RESETEAR
		});
	},
	guardarHistoria: function(x){
		TresEnRayaDispatcher.dispatch({
			type : Constants.ActionTypes.GUARDAR_HISTORIA,
			resultado: x
		});
	},
	mostrarHistoria: function(){
		TresEnRayaDispatcher.dispatch({
			type : Constants.ActionTypes.MOSTRAR_HISTORIA
		});
	}
};