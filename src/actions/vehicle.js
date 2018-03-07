import axios from 'axios';

export const vehicleHasError = bool => {
  return {
    type: 'VEHICLE_HAS_ERROR',
    hasError: bool
  };
}

export const vehicleIsLoading = bool => {
  return {
      type: 'VEHICLE_IS_LOADING',
      isLoading: bool
  };
}

export const vehicleGetDataSuccess = vehicle => {
  return {
      type: 'VEHICLE_GET_DATA_SUCCESS',
      vehicle
  };
}

export const vehicleGetData = (id) => {
  return (dispatch) => {
    dispatch(vehicleIsLoading(true));
    const url = 'https://gist.githubusercontent.com/creatifyme/2a334c00a117097bfdb47f031edf292c/raw/efb52ecf1cf92e2261f504ec7639c68b5ff390bd/cars.json'

    return axios({
      url: url,
      timeout: 10000,
      method: 'get',
      responseType: 'json',
    })
    .then(response => {
      dispatch(vehicleIsLoading(false));
      dispatch(vehicleGetDataSuccess(response.data[id]));
    })
    .catch(response => {
      dispatch(vehicleHasError(response.data));
    });
  };
}