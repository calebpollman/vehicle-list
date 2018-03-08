import React from 'react';
import {shallow} from 'enzyme';
import SortButton from './SortButton';

describe('SortButton', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SortButton
        isActive={false}
        sortOption="Make"
      />
    );
  });

  it('should render a <Button />', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });
});