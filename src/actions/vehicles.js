import axios from 'axios';

export const vehiclesHasError = bool => {
  return {
    type: 'VEHICLES_HAS_ERROR',
    hasError: bool
  };
}

export const vehiclesIsLoading = bool => {
  return {
      type: 'VEHICLES_IS_LOADING',
      isLoading: bool
  };
}

export const vehiclesGetDataSuccess = vehicles => {
  return {
      type: 'VEHICLES_GET_DATA_SUCCESS',
      isLoading: false,
      vehicles
  };
}

export const vehiclesGetData = () => {
  return (dispatch) => {
    dispatch(vehiclesIsLoading(true));
    const url = 'https://gist.githubusercontent.com/creatifyme/2a334c00a117097bfdb47f031edf292c/raw/efb52ecf1cf92e2261f504ec7639c68b5ff390bd/cars.json'

    return axios({
      url: url,
      timeout: 10000,
      method: 'get',
      responseType: 'json',
    })
    .then(response => {
      dispatch(vehiclesGetDataSuccess(response.data));
    })
    .catch(response => {
      dispatch(vehiclesHasError(response.data));
    });
  }
}