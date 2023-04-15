import axios from "axios";
import {
  GET_CHARACTERS,
  GET_CHARACTERS_OK,
  GET_CHARACTERS_FAIL,
} from "./actionTypes";

export function actionGetCharacters() {
  return {
    type: GET_CHARACTERS,
  };
}
export function actionGetCharactersOk(characters) {
  return {
    type: GET_CHARACTERS_OK,
    payload: characters
  };
}
export function actionGetCharactersFail(error) {
  return {
    type: GET_CHARACTERS_FAIL,
    payload: error
  };
}
export function getCharacters() {
  return async (dispatch) => {
    dispatch(actionGetCharacters());
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
        );
        // console.log(response);
      dispatch(actionGetCharactersOk(response.data.results));
        // console.log(response.data);
    } catch (error) {
      dispatch(actionGetCharactersFail(error));
    }
  };
}
