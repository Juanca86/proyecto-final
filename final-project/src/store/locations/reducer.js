import {
  GET_LOCATIONS,
  GET_LOCATIONS_OK,
  GET_LOCATIONS_FAIL,
} from "./actionTypes";

const initialState = {
  locations: [],
  loadingLocations: false,
  error: {
    message: "",
  },
};

export default function LocationsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LOCATIONS:
      state = { ...state, loadingLocations: true };
      break;
    case GET_LOCATIONS_OK:
      state = { ...state, loadingLocations: false, locations: action.payload };
      break;
    case GET_LOCATIONS_FAIL:
      state = {
        ...state,
        loadingLocations: false,
        locations: [],
        error: { message: action.payload },
      };
      break;
    default:
      break;
  }
  return state;
}
