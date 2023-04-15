import {
  GET_EPISODES,
  GET_EPISODES_OK,
  GET_EPISODES_FAIL,
} from "./actionTypes";

const initialState = {
  episodes: [],
  loadingEpisodes: false,
  error: {
    message: "",
  },
};

export default function EpisodesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EPISODES:
      state = { ...state, loadingEpisodes: true };
      break;
    case GET_EPISODES_OK:
      state = { ...state, loadingEpisodes: false, episodes: action.payload };
      break;
    case GET_EPISODES_FAIL:
      state = {
        ...state,
        loadingEpisodes: false,
        episodes: [],
        error: { message: action.payload },
      };
      break;
    default:
      break;
  }
  return state;
}
