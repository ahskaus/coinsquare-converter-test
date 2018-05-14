import {  
	FETCH_RATES_FROM_API_LOADING,
	FETCH_RATES_FROM_API_ERROR,
	FETCH_RATES_FROM_API_SUCCESS,
	SET_USD,
	SET_BTC,
	SET_AMOUNT
} from './action-types';


export function fetchBtcUsdRate() {
	return async (dispatch) => {

		dispatch({type:FETCH_RATES_FROM_API_LOADING});

		const url =  'https://cors-anywhere.herokuapp.com/https://api.bitfinex.com/v1/pubticker/btcusd';
		try {
			const result = await fetch(url);
			dispatch({
				type: FETCH_RATES_FROM_API_SUCCESS,
				result: await result.json()
			});
		} catch(e) {
			dispatch({type:FETCH_RATES_FROM_API_ERROR});
		}
	}
}


export function setUsd(value) {
	return {
		type:SET_USD,
		value: Number(value) < 0.01 ? 0 : value
	};
}


export function setBtc(value) {
	return {
		type:SET_BTC,
		value
	};
}


export function setAmount(amount) {
	return {
		type:SET_AMOUNT,
		amount: (Number(amount) || '')
	};
}