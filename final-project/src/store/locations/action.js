import axios from "axios";
import {
  GET_LOCATIONS,
  GET_LOCATIONS_OK,
  GET_LOCATIONS_FAIL,
} from "./actionTypes";

export function actionGetLocations() {
  return {
    type: GET_LOCATIONS,
  };
}
export function actionGetLocationsOk(characters) {
  return {
    type: GET_LOCATIONS_OK,
    payload: characters,
  };
}
export function actionGetLocationsFail(error) {
  return {
    type: GET_LOCATIONS_FAIL,
    payload: error,
  };
}
export function getLocations() {
  return async (dispatch) => {
    dispatch(actionGetLocations());
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/location"
      );
      dispatch(actionGetLocationsOk(response.data.results));
    } catch (error) {
      dispatch(actionGetLocationsFail(error));
    }
  };
}
