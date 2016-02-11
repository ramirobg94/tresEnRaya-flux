const EventEmitter = require('events').EventEmitter;
var TresEnRayaDispatcher = require('../dispatchers/TresEnRayaDispatcher');
var Constants = require('../constants/TresEnRayaConstants');

var historiaPartidas = [];
var id = 0;
var reverse = 1;

var HistoriaStore = Object.assign({},EventEmitter.prototype, {
	getPartidas: function (){
		return historiaPartidas;
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
		case Constants.ActionTypes.GUARDAR_HISTORIA:
			//console.log(historiaPartidas);

			//splice(1,10) dejar las ultimas 10
			historiaPartidas = historiaPartidas.reverse();
			historiaPartidas[historiaPartidas.length] = [id , payload.resultado ];
			historiaPartidas = historiaPartidas.reverse();
			id = id +1;
		break;
		case Constants.ActionTypes.MOSTRAR_HISTORIA:
		break;
	}
});

module.exports = HistoriaStore;