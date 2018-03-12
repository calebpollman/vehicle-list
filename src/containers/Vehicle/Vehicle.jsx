import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {vehiclesGetData} from '../../actions/vehicles';
import ListDetail from '../../components/ListDetail/ListDetail';

class Vehicle extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      redirect: false,
      vehicle: {},
    }
  }

  componentDidMount() {
    let {vehicles} = this.props;

    if (vehicles !== undefined && vehicles.length > 0) {
      const id = this.props.match.params.id;
      const vehicle = vehicles.find(vehicle => vehicle.id.toString() === id)
      this.setState({vehicle});
    } else {
      this.props.vehiclesGetData();
    }
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
    
    if (redirect) return <Redirect to="/" />;
    
    return (
      <div className="view-container">
        <ListDetail vehicle={vehicle} />
      </div>
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