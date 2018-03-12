import React from 'react';
import {shallow} from 'enzyme';
import SearchBarInput from './SearchBarInput';

describe('SearchBarInput', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchBarInput />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it('renders a wrapper <div /> and an <input />', () => {
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('input').length).toEqual(1);
  });
});