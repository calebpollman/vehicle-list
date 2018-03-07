import React from 'react';
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store';
import Vehicles from './Vehicles';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const initialState = {};
const mockStore = configureStore(middlewares);

describe('Vehicles', () => {
  let wrapper, store;
  
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<Vehicles store={store} />).dive();
  });

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});