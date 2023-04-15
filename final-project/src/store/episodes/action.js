import axios from "axios";
import {
  GET_EPISODES,
  GET_EPISODES_OK,
  GET_EPISODES_FAIL,
} from "./actionTypes";

export function actionGetEpisodes() {
  return {
    type: GET_EPISODES,
  };
}
export function actionGetEpisodesOk(episodes) {
  return {
    type: GET_EPISODES_OK,
    payload: episodes,
  };
}
export function actionGetEpisodesFail(error) {
  return {
    type: GET_EPISODES_FAIL,
    payload: error,
  };
}
export function getEpisodes() {
  return async (dispatch) => {
    dispatch(actionGetEpisodes());
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/episode"
      );
      dispatch(actionGetEpisodesOk(response.data.results));
    } catch (error) {
      dispatch(actionGetEpisodesFail(error));
    }
  };
}
