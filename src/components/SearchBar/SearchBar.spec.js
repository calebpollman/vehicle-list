import React from 'react';
import {shallow} from 'enzyme';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchBar />);
  });

  it('renders 2 <div />\'s', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });
});