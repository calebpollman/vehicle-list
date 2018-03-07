import React, {Component} from 'react';
import {connect} from 'react-redux';
import {vehiclesGetData} from '../../actions/vehicles';

class Vehicles extends Component {
  constructor(props) {
    super(props);
    
    this.state = {}
  }

  componentDidMount() {
    this.props.vehiclesGetData();
  }

  render() {
    console.log(this.props);
    return (
      <div>Vehicles</div>
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