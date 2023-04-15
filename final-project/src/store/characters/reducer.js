import {
  GET_CHARACTERS,
  GET_CHARACTERS_OK,
  GET_CHARACTERS_FAIL,
} from "./actionTypes";

const initialState = {
  characters: [],
  loadingCharacters: false,
  error: {
    message: "",
  },
};

export default function CharactersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      state = { ...state, loadingCharacters: true };
      break;
    case GET_CHARACTERS_OK:
      state = {
        ...state,
        loadingCharacters: false,
        characters: action.payload,
      };
      break;
    case GET_CHARACTERS_FAIL:
      state = {
        ...state,
        loadingCharacters: false,
        characters: [],
        error: { message: action.payload },
      };
      break;
    default:
      break;
  }
  return state
}
