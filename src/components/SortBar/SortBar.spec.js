import React from 'react';
import {shallow} from 'enzyme';
import SortBar from './SortBar';

describe('SortBar', () => {
  let wrapper;
  const sortOptions = ['Year', 'Make', 'Model'];

  beforeEach(() => {
    wrapper = shallow(
      <SortBar 
        sortSelection="Year"
        sortOptions={sortOptions}
      />
    );
  });

  it('should render a wrapper <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render an instance of <SortButton /> for each index of sortOptions', () => {
    expect(wrapper.find('SortButton').length).toEqual(sortOptions.length);
  });
});