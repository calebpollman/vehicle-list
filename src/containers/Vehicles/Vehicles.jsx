import React, {Component} from 'react';
import {connect} from 'react-redux';
import {vehiclesGetData} from '../../actions/vehicles';
import SearchBar from '../../components/SearchBar/SearchBar';
import SortBar from '../../components/SortBar/SortBar';
import List from '../../components/List/List';
import './Vehicles.css';

class Vehicles extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchActive: false,
      searchTerm: '',
      sortSelection: 'year',
      vehicles: [],
    }

    this.toggleSearchActive = this.toggleSearchActive.bind(this);
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.updateSortSelection = this.updateSortSelection.bind(this);
  }

  componentDidMount() {
    const {vehicles} = this.props;
    
    if (vehicles && vehicles.length === 0) this.props.vehiclesGetData();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.vehicles !== nextProps.vehicles) {
      this.setState({vehicles: nextProps.vehicles});
    }
  }

  toggleSearchActive(event) {
    event.preventDefault();
    
    this.setState(({searchActive}) => ({searchActive: !searchActive}));
  }

  updateSearchTerm(event) {
    this.setState({searchTerm: event.target.value});
  }

  updateSortSelection(event, value) {
    event.preventDefault();
  
    this.setState(({sortSelection}) => ({sortSelection: value}));
  }

  render() {
    let {searchActive, sortSelection, vehicles} = this.state;
    
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
        {/* <List vehicles={vehicles} /> */}
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