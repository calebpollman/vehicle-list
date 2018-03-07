import React, {Component} from 'react';
import {connect} from 'react-redux';
import {vehicleGetData} from '../actions/vehicle';

class Vehicle extends Component {
  constructor(props) {
    super(props);
    
    this.state = {}
  }

  componentDidMount() {
    const id = 1;
    this.props.vehicleGetData(id);
  }

  render() {
    console.log(this.props);
    return (
      <div>Vehicle</div>
    );
  }
};

const mapStateToProps = state => {
  return {
    vehicle: state.vehicle,
    vehicleHasError: state.vehicleHasError,
    vehicleIsLoading: state.vehicleIsLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    vehicleGetData: (id) => dispatch(vehicleGetData(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vehicle);