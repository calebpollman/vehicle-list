export const vehicleHasError = (state=false, action) => {
  switch (action.type) {
      case 'VEHICLE_HAS_ERRORED':
          return action.hasErrored;

      default:
          return state;
  }
}

export const vehicleIsLoading = (state=false, action) => {
  switch (action.type) {
      case 'VEHICLE_IS_LOADING':
          return action.isLoading;

      default:
          return state;
  }
}

export const vehicle = (state=[], action) => {
  switch (action.type) {
      case 'VEHICLE_GET_DATA_SUCCESS':
          return action.vehicle;

      default:
          return state;
  }
}