import React from 'react';
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store';
import Vehicle from './Vehicle';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

const middlewares = [thunk];
const initialState = {};
const mockStore = configureStore(middlewares);

describe('Vehicle', () => {
  let wrapper, store;
  
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<Vehicle store={store} />).dive();
  });

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});