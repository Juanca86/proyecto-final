import axios from "axios";
import {
  GET_MOTOS,
  GET_MOTOS_OK,
  GET_MOTOS_FAIL,
  GET_MOTO,
  GET_MOTO_OK,
  GET_MOTO_FAIL,
  // DELETE_MOTOS,
  // DELETE_MOTOS_OK,
  // DELETE_MOTOS_FAIL,
} from "./actionType";

const url= 'http://localhost:3000/motos'

export function actionGetMotos() {
  return {
    type: GET_MOTOS,
  };
}
export function actionGetMotosOk(motos) {
  return {
    type: GET_MOTOS_OK,
    payload: motos,
  };
}
export function actionGetMotosFail(error) {
  return {
    type: GET_MOTOS_FAIL,
    payload: error,
  };
}
export function getMotos() {
  return async (dispatch) => {
    dispatch(actionGetMotos());
    try {
      const response = await axios.get("http://localhost:3000/motos");
      // console.log(response);
      dispatch(actionGetMotosOk(response.data));
      // console.log(response.data);
    } catch (error) {
      dispatch(actionGetMotosFail(error));
    }
  };
}

export function actionGetMoto() {
  return {
    type: GET_MOTO,
  };
}
export function actionGetMotoOk(motoId) {
  return {
    type: GET_MOTO_OK,
    payload: motoId,
  };
}
export function actionGetMotoFail(error) {
  return {
    type: GET_MOTO_FAIL,
    payload: error,
  };
}

export function getMoto(motoId) {
  return async (dispatch) => {
    dispatch(actionGetMoto(motoId));
    try {
      const response = await axios.get(`http://localhost:3000/motos/${motoId}`);
      dispatch(actionGetMotoOk(response.data));
      // console.log(motoId, 'motoid');
      // console.log(response.data);
    } catch (error) {
      dispatch(actionGetMotoFail(error));
    }
  };
}

// export function actionDeleteMotos() {
//   return {
//     type: DELETE_MOTOS,
//   };
// }
// export function actionDeleteMotosOk(motos) {
//   return {
//     type: DELETE_MOTOS_OK,
//     payload: motos,
//   };
// }
// export function actionDeleteMotosFail(error) {
//   return {
//     type: DELETE_MOTOS_FAIL,
//     payload: error,
//   };
// }

// export function DeleteMotos(motos) {
//   return async (dispatch) => {
//     dispatch(actionDeleteMotos(motos));
//     try {
//       const response = await axios.delete("http://localhost:3000/motos", motos);
//       // console.log(response);
//       dispatch(actionDeleteMotosOk(response.data));
//       // console.log(response.data);
//     } catch (error) {
//       dispatch(actionDeleteMotosFail(error));
//     }
//   };
// }
