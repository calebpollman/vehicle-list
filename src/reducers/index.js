import {combineReducers} from 'redux';
import {vehicles, vehiclesHasError, vehiclesIsLoading} from './vehicles';

export default combineReducers({
  vehicles, 
  vehiclesHasError, 
  vehiclesIsLoading,
});