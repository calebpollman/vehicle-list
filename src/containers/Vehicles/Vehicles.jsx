import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import search from '../../utils/search';
import {vehiclesGetData} from '../../actions/vehicles';
import SearchBar from '../../components/SearchBar/SearchBar';
import SortBar from '../../components/SortBar/SortBar';
import List from '../../components/List/List';
import './Vehicles.css';

class Vehicles extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      listLoading: true,
      searchActive: false,
      searchTerm: '',
      sortSelection: 'year',
      vehicles: [],
      searchResults: [],
    }

    this.toggleSearchActive = this.toggleSearchActive.bind(this);
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.updateSortSelection = this.updateSortSelection.bind(this);
    this.updateVehicleList = this.updateVehicleList.bind(this);
  }

  componentDidMount() {
    const {vehicles} = this.props;
    
    if (vehicles && vehicles.length === 0) this.props.vehiclesGetData();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.vehicles !== nextProps.vehicles) {
      this.setState({
        vehicles: nextProps.vehicles,
        listLoading: false
      });
    }
  }

  toggleSearchActive(event) {
    event.preventDefault();
    this.setState(({searchActive}) => ({searchActive: !searchActive}));
  }

  updateSearchTerm(event) {
    this.setState({searchTerm: event.target.value}, _.debounce(() => {this.updateVehicleList()}, 300));
  }

  updateVehicleList() {
    let {searchTerm, vehicles, searchResults} = this.state;
    searchResults = search(vehicles, searchTerm);
    this.setState({searchResults});
  }

  updateSortSelection(event, value) {
    event.preventDefault();
    this.setState(({sortSelection}) => ({sortSelection: value}));
  }

  render() {
    let {listLoading, searchActive, searchResults, sortSelection, vehicles} = this.state;
    
    vehicles = vehicles.sort((vehicleOne, vehicleTwo) => {
      vehicleOne = vehicleOne[sortSelection]; 
      vehicleTwo = vehicleTwo[sortSelection];
      return ((vehicleOne < vehicleTwo) ? -1 : ((vehicleOne > vehicleTwo) ? 1 : 0));
    });

    return (
      <div className="view-container">
        <SearchBar 
          searchActive={searchActive}
          toggleSearchActive={this.toggleSearchActive}
          updateSearchTerm={this.updateSearchTerm} 
        />
        <SortBar
          sortOptions={['Year', 'Make', 'Model']}
          sortSelection={sortSelection}
          updateSortSelection={this.updateSortSelection}
        />
        <List
          listLoading={listLoading}
          searchActive={searchActive}
          searchResults={searchResults}
          vehicles={vehicles}
        />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    vehicles: state.vehicles,
    vehiclesHasError: state.vehiclesHasError,
    vehiclesIsLoading: state.vehiclesIsLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    vehiclesGetData: () => dispatch(vehiclesGetData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vehicles);