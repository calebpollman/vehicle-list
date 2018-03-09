import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {vehiclesGetData} from '../../actions/vehicles';

class Vehicle extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      redirect: false,
      vehicle: {},
    }
  }

  componentDidMount() {
    const {vehicles} = this.props;
    const id = this.props.match.params.id;
    
    vehicles.length !== 0 ? this.setState({vehicle: vehicles[id]}) : this.props.vehiclesGetData();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.vehicles !== nextProps.vehicles) {
      let {redirect, vehicle} = this.state;
      const id = this.props.match.params.id;
      
      nextProps.vehicles[id] === undefined ? redirect = true : vehicle = nextProps.vehicles[id];
    
      this.setState({redirect, vehicle});
    }
  }

  render() {
    const {redirect, vehicle} = this.state;
    console.log(vehicle)

    if (redirect) return <Redirect to="/" />;

    return (
      <div>Vehicle</div>
    );
  }
};

const mapStateToProps = state => {
  return {
    vehicle: state.vehicle,
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

export default connect(mapStateToProps, mapDispatchToProps)(Vehicle);