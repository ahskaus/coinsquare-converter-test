
import React from 'react';
import { mount } from 'enzyme';
import BorderedText from './index';


describe('Bordered Text Component', () => {

	const wrapper = mount(<BorderedText text='test text'/>);

	it('should render', () => {
		expect(wrapper.find('.bordered-text-component').length).toEqual(1)
	});
});