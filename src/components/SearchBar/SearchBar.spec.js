import React from 'react';
import {shallow} from 'enzyme';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchBar searchActive />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it('renders 2 <div />\'s', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });
});