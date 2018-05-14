import React, { PureComponent } from 'react';
import { connect } from 'react-redux';


import CurrencyValue from './../../components/CurrencyValue';
import BorderedText from './../../components/BorderedText';
import Label from './../../components/Label';
import Input from './../../components/Input';
import Button from './../../components/Button';


import { 
	getRate,
	getUsd,
	getBtc,
	getAmount,
	getDisableTrading,
	getQuote
} from './../../selectors';

import { 
	setUsd,
	setBtc,
	setAmount
} from './../../actions';

import './styles.css';

class TradingWidget extends PureComponent {

	updateAmount = (e) => this.props.setAmount(e.target.value);

	trade = () => {
		const {
			rate,
			usd,
			btc,
			amount,
			setUsd,
			setBtc,
			setAmount
		} = this.props;

		setBtc(btc+amount*rate);
		setUsd(usd-amount);
		setAmount('');
	}

	render() {

		const { rate, usd, btc, amount, disableTrading, quote } = this.props;


		return (
			<div className='trading-widget-container'>
				<div className='label'>
					<Label label='account balance' align='top' />
				</div>
				<div>
					<CurrencyValue name='usd' value={usd} />
				</div>
				<div>
					<CurrencyValue name='btc' value={btc} />
				</div>
				<div className='label'>
					<Label label='trade' align='bottom' />
				</div>
				<div className='box'>
					<BorderedText text='USD' borderColor='grey' />
				</div>
				<div className='box'>
					<Input max={usd} value={amount} onChange={this.updateAmount} placeholder='Enter your amount' />
				</div>
				<div className='label'>
					<Label label='for' align='bottom' />
				</div>
				<div className='box'>
					<BorderedText text='BTC' />
				</div>
				<div className='box'>
					<Input value={quote} placeholder='Quote' />
				</div>
				<div className='button'>
					<Button text='trade' onClick={this.trade} disabled={disableTrading} />
				</div>
			</div>
		);
	}

}

const mapStateToProps = (state) => {
	return {
			rate: getRate(state),
			usd:  getUsd(state),
			btc:  getBtc(state),
			amount:  getAmount(state),
			disableTrading:  getDisableTrading(state),
			quote: getQuote(state)
		};
};

export default connect(mapStateToProps, { setUsd, setBtc, setAmount })(TradingWidget);