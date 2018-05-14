import React, { PureComponent } from 'react';
import { connect } from 'react-redux';


import TradingWidget from './../TradingWidget';
import Loader from './../../components/Loader';

import {
	getRate,
	getLoading,
	getError
} from './../../selectors';
import { fetchBtcUsdRate } from './../../actions';

import './styles.css';

class Page extends PureComponent {

	componentDidMount() {
		this.props.fetchBtcUsdRate();
	}

	render() {

		const { rate, loading, error } = this.props;

		if(loading || error)
			return (
				<div className='page-container'>
					<div className='not-loaded'>
						{loading && <Loader />}
						{error && 'Error. Try reloading.'}
					</div>
				</div>
			);

		return (
			<div className='page-container'>
				<TradingWidget />
			</div>
		);
	}

}

const mapStateToProps = (state) => {
	return {
		rate: getRate(state),
		loading: getLoading(state),
		error: getError(state)
	};
};

export default connect(mapStateToProps, { fetchBtcUsdRate })(Page);