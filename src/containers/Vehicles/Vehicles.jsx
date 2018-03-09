import React, {Component} from 'react';
import {connect} from 'react-redux';
import {vehiclesGetData} from '../../actions/vehicles';
import SearchBar from '../../components/SearchBar/SearchBar';
import SortBar from '../../components/SortBar/SortBar';
import List from '../../components/List/List';

class Vehicles extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchTerm: '',
      sortSelection: 'year',
      vehicles: [],
    }

    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.updateSortSelection = this.updateSortSelection.bind(this);
  }

  componentDidMount() {
    this.props.vehiclesGetData();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.vehicles !== nextProps.vehicles) {
      this.setState({vehicles: nextProps.vehicles});
    }
  }

  updateSearchTerm(event) {
    let {searchTerm} = this.state;
    searchTerm = event.target.value;
    
    this.setState({searchTerm});
  }

  updateSortSelection(event, value) {
    event.preventDefault();
    let {sortSelection} = this.state;
    sortSelection = value;
    
    this.setState({sortSelection});
  }

  render() {
    let {sortSelection, vehicles} = this.state;
    
    vehicles = vehicles.sort((vehicleOne, vehicleTwo) => {
      vehicleOne = vehicleOne[sortSelection]; 
      vehicleTwo = vehicleTwo[sortSelection];
      return ((vehicleOne < vehicleTwo) ? -1 : ((vehicleOne > vehicleTwo) ? 1 : 0));
    });

    return (
      <div className="vehicles-container">
        <SearchBar updateSearchTerm={this.updateSearchTerm} />
        <SortBar 
          sortOptions={['year', 'make', 'model']}
          sortSelection={sortSelection}
          updateSortSelection={this.updateSortSelection}
        />
        <List vehicles={vehicles} />
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