export const vehiclesHasError = (state=false, action) => {
	switch (action.type) {
		case 'VEHICLES_HAS_ERRORED':
			return action.hasErrored;

		default:
			return state;
	}
}

export const vehiclesIsLoading = (state=false, action) => {
	switch (action.type) {
		case 'VEHICLES_IS_LOADING':
			return action.isLoading;

		default:
			return state;
	}
}

export const vehicles = (state=[], action) => {
	switch (action.type) {
		case 'VEHICLES_GET_DATA_SUCCESS':
			return action.vehicles;

	default:
		return state;
	}
}