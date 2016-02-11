'use strict';

jest.dontMock('../TresEnRayaStores');
jest.dontMock('../../constants/TresEnRayaConstants');
jest.dontMock('object-assign');

//var React = require('react');
//var ReactDOM = require('react-dom');
//var Bootstrap = require('react-bootstrap');

describe('TresEnRayaStores', function() {
	var TresEnRayaConstants = require('../../constants/TresEnRayaConstants');
	var TresEnRayaDispatcher;
	var TresEnRayaStores;
	var callback;
	var actionJugarPosicion00 = {
		type: TresEnRayaConstants.ActionTypes.JUGAR_POSICION,
		x: 0,
		y: 0
	};
	var actionJugarPosicion01 = {
		type: TresEnRayaConstants.ActionTypes.JUGAR_POSICION,
		x: 0,
		y: 1
	};
	var actionJugarPosicion02 = {
		type: TresEnRayaConstants.ActionTypes.JUGAR_POSICION,
		x: 0,		y: 2	};
	var actionJugarPosicion10 = {
		type: TresEnRayaConstants.ActionTypes.JUGAR_POSICION,
		x: 1,		y: 0	};
	var actionJugarPosicion11 = {
		type: TresEnRayaConstants.ActionTypes.JUGAR_POSICION,
		x: 1,		y: 1	};
	var actionJugarPosicion12 = {
		type: TresEnRayaConstants.ActionTypes.JUGAR_POSICION,
		x: 1,		y: 2	};
	var actionJugarPosicion20 = {
		type: TresEnRayaConstants.ActionTypes.JUGAR_POSICION,
		x: 2,		y: 0	};
	var actionJugarPosicion21 = {
		type: TresEnRayaConstants.ActionTypes.JUGAR_POSICION,
		x: 2,		y: 1	};
	var actionJugarPosicion22 = {
		type: TresEnRayaConstants.ActionTypes.JUGAR_POSICION,
		x: 2,		y: 2	};

	var reseteo = {
		type : TresEnRayaConstants.ActionTypes.RESETEAR
	};
	var compruebaG = {
		type : TresEnRayaConstants.ActionTypes.COMPROBAR_GANADOR
	};

	beforeEach(function() {
		TresEnRayaDispatcher = require('../../dispatchers/TresEnRayaDispatcher');
		TresEnRayaStores = require('../TresEnRayaStores');
		callback = TresEnRayaDispatcher.register.mock.calls[0][0];
	});
		
		it('registra un callback en el dispatcher', function () {
		expect(TresEnRayaDispatcher.register.mock.calls.length).toBe(1);
	});

		it('inicializa con el tablero vacio y turno de las X', function () {
			var valores = TresEnRayaStores.getValores();
			expect(valores).toEqual([['-','-','-'],['-','-','-'],['-','-','-']]);
		});

		it('juega la posicion 0-0',  function () {
			callback(actionJugarPosicion00);
			var valores = TresEnRayaStores.getValores();
			expect(valores[0][0]).toEqual('X');
		});

		it('juega la posicion 0-1 por O',  function () {
			callback(actionJugarPosicion00);
			callback(actionJugarPosicion01);
			var valores = TresEnRayaStores.getValores();
			expect(valores[0][1]).toEqual('0');
		});
		it('reseteo',  function () {
			callback(reseteo);
			var valores = TresEnRayaStores.getValores();
			expect(valores).toEqual([['-','-','-'],['-','-','-'],['-','-','-']]);
		});
		
		it('victoria ',  function () {
			callback(actionJugarPosicion00);
			callback(actionJugarPosicion10);
			callback(actionJugarPosicion01);
			callback(actionJugarPosicion11);
			callback(actionJugarPosicion02);
			callback(actionJugarPosicion20);
			callback(compruebaG);
			callback(actionJugarPosicion22);
			var nMovs = TresEnRayaStores.getNMovs();
			var lastX = TresEnRayaStores.getLastX();
			var lastY = TresEnRayaStores.getLastY();
			expect(lastX).toEqual(2);
			expect(lastY).toEqual(2);
			expect(nMovs).toEqual(7);
			callback(compruebaG);
			var resultado = TresEnRayaStores.getResultado();
			var valores = TresEnRayaStores.getValores();
			expect(valores).toEqual([['X','X','X'],['0','0','-'],['0','-','X']]);
			//expect(resultado).toEqual('X');
		})
});
