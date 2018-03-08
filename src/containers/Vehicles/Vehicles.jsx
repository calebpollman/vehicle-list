import React, {Component} from 'react';
import {connect} from 'react-redux';
import {vehiclesGetData} from '../../actions/vehicles';
import SearchBar from '../../components/SearchBar/SearchBar';

class Vehicles extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchTerm: '',
      vehicles: [],
      updateVehicles: this.props.vehicles,
    }

    this.updateSearchTerm = this.updateSearchTerm.bind(this);
  }

  componentDidMount() {
    this.props.vehiclesGetData();
  }

  updateSearchTerm(event) {
    let {searchTerm} = this.state;
    searchTerm = event.target.value;
    
    this.setState({searchTerm});
  }

  render() {
    return (
      <div className="vehicles-container">
        <SearchBar updateSearchTerm={this.updateSearchTerm} />
        <p>Vehicles</p>
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