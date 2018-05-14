import { createSelector } from 'reselect';

const selectApi = (state) => state.api;
const selectFunds = (state) => state.funds;
const getAmount = (state) => state.amount;

const getRate = createSelector(
	selectApi,
	(api) => (api.result.last_price ? (1/(parseFloat(api.result.last_price))) : 0)
);

const getLoading = createSelector(
	selectApi,
	(selectApi) => selectApi.loading
);

const getError = createSelector(
	selectApi,
	(selectApi) => selectApi.error
);

const getUsd = createSelector(
	selectFunds,
	(selectFunds) => selectFunds.usd
);

const getBtc = createSelector(
	selectFunds,
	(selectFunds) => selectFunds.btc
);

const getDisableTrading = createSelector(
	[ getAmount, getUsd ],
	(amount, usd) => (amount <= 0 || amount > usd)
);

const getQuote = createSelector(
	[ getDisableTrading, getRate, getAmount ],
	(disabled, rate, amount) => (disabled ? '' : (String(rate * amount)).substr(0,15))
);

export {
	getRate,
	getLoading,
	getError,
	getUsd,
	getBtc,
	getAmount,
	getDisableTrading,
	getQuote
};