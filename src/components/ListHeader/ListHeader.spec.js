import React from 'react';
import {shallow} from 'enzyme';
import ListHeader from './ListHeader';

describe('ListHeader', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<ListHeader />);
  });

  it('should render a wrapper <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});