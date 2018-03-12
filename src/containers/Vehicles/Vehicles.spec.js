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

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should render a wrapper <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should contain the <SearchBar />', () => {
    expect(wrapper.find('SearchBar').length).toEqual(1);
  });
});

describe('search', () => {
  let wrapper, store;
  
  const vehicles = [
    {
      "year" : "2013",
      "make" : "Kia",
      "model" : "Optima",
    },
    {
      "year" : "2013",
      "make" : "Hyundai",
      "model" : "Accent",
    },
    {
      "year" : "2016",
      "make" : "Lincoln",
      "model" : "MKX",
    },
  ];

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<Vehicles store={store} />).dive();
    wrapper.setState({vehicles});
  });

  it('returns an array of objects', () => {
    wrapper.instance().updateVehicleList();
    const searchResults = wrapper.state('searchResults');
    expect(Array.isArray(searchResults)).toBe(true);
    expect(searchResults[0]).toBeTruthy();
    expect(typeof searchResults[0]).toBe('object');
  });

  it('returns an array of vehicles based on make', () => {
    wrapper.setState({searchTerm: 'Kia'});
    wrapper.instance().updateVehicleList();
    const searchResults = wrapper.state('searchResults');
    expect(searchResults).toEqual([{
      "year" : "2013",
      "make" : "Kia",
      "model" : "Optima",
    }]);
  });

  it('returns an array of vehicles based on model', () => {
    wrapper.setState({searchTerm: 'Optima'});
    wrapper.instance().updateVehicleList();
    const searchResults = wrapper.state('searchResults');
    expect(searchResults).toEqual([{
      "year" : "2013",
      "make" : "Kia",
      "model" : "Optima",
    }]);
  });

  it('returns an array of vehicles based on year', () => {
    wrapper.setState({searchTerm: '2013'});
    wrapper.instance().updateVehicleList();
    const searchResults = wrapper.state('searchResults');
    expect(searchResults).toEqual([
      {
        "year" : "2013",
        "make" : "Kia",
        "model" : "Optima",
      },
      {
        "year" : "2013",
        "make" : "Hyundai",
        "model" : "Accent",
      },
    ]);
  });

  it('search terms can be in any order', () => {
    wrapper.setState({searchTerm: 'Hyundai 2013 Accent'});
    wrapper.instance().updateVehicleList();
    const searchResults = wrapper.state('searchResults');
    expect(searchResults).toEqual([
      {
        "year" : "2013",
        "make" : "Hyundai",
        "model" : "Accent",
      },
    ]);
  });

  it('will return vehicles with a partial value', () => {
    wrapper.setState({searchTerm: 'Hyu'});
    wrapper.instance().updateVehicleList();
    const searchResults = wrapper.state('searchResults');
    expect(searchResults).toEqual([
      {
        "year" : "2013",
        "make" : "Hyundai",
        "model" : "Accent",
      },
    ]);
  });

  it('returns an empty array if no results', () => {
    wrapper.setState({searchTerm: 'Hyuz'});
    wrapper.instance().updateVehicleList();
    const searchResults = wrapper.state('searchResults');
    expect(searchResults.length).toEqual(0);
  });

  it('works with uppercase search terms', () => {
    wrapper.setState({searchTerm: 'HYUNDAI'});
    wrapper.instance().updateVehicleList();
    const searchResults = wrapper.state('searchResults');
    expect(searchResults).toEqual([
      {
        "year" : "2013",
        "make" : "Hyundai",
        "model" : "Accent",
      },
    ]);
  });

  it('works with lowercase search terms', () => {
    wrapper.setState({searchTerm: 'hyundai'});
    wrapper.instance().updateVehicleList();
    const searchResults = wrapper.state('searchResults');
    expect(searchResults).toEqual([
      {
        "year" : "2013",
        "make" : "Hyundai",
        "model" : "Accent",
      },
    ]);
  });
});
