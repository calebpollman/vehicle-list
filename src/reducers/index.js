import {combineReducers} from 'redux';
import {vehicles, vehiclesHasError, vehiclesIsLoading} from './vehicles';
import {vehicle, vehicleHasError, vehicleIsLoading} from './vehicle';

export default combineReducers({
  vehicles, 
  vehiclesHasError, 
  vehiclesIsLoading,
  vehicle, 
  vehicleHasError, 
  vehicleIsLoading,
});