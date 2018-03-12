import React from 'react';
import {shallow, mount} from 'enzyme';
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

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render a <ListDetail /> component', () => {
    expect(wrapper.find('ListDetail').length).toEqual(1);
  });
});