import { combineReducers } from 'redux';
import {  
	FETCH_RATES_FROM_API_LOADING,
	FETCH_RATES_FROM_API_ERROR,
	FETCH_RATES_FROM_API_SUCCESS,
	SET_USD,
	SET_BTC,
	SET_AMOUNT
} from './action-types';


const initialStateApi = {
	loading: true,
	error: false,
	result: {}
};

const apiReducer = (state = initialStateApi, action) => {
	switch(action.type) {
		case FETCH_RATES_FROM_API_LOADING:
			return {
				...state,
				result: {},
				loading: true,
				error: false
			};
		case FETCH_RATES_FROM_API_ERROR:
			return {
				...state,
				result: {},
				loading: false,
				error: true
			};
		case FETCH_RATES_FROM_API_SUCCESS:
			return {
				...state,
				result: action.result,
				loading: false,
				error: false
			};
		default:
			return state;
	}
};


const initialStateFunds = {
	usd: 156.12,
	btc: 0
};

const fundsReducer = (state = initialStateFunds, action) => {
	switch(action.type) {
		case SET_USD:
			return {
				...state,
				usd: action.value
			};
		case SET_BTC:
			return {
				...state,
				btc: action.value
			};
		default:
			return state;
	}
};


const initialStateAmount = '';

const amountReducer = (state = initialStateAmount, action) => {
	switch(action.type) {
		case SET_AMOUNT:
			return action.amount;
		default:
			return state;
	}
};


export default combineReducers({
	api: apiReducer,
	funds: fundsReducer,
	amount: amountReducer
});
