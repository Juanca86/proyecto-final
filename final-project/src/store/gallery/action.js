import axios from "axios";
import {
  GET_MOTOS,
  GET_MOTOS_OK,
  GET_MOTOS_FAIL,
  GET_MOTO,
  GET_MOTO_OK,
  GET_MOTO_FAIL,
  EDIT_MOTO,
  EDIT_MOTO_OK,
  EDIT_MOTO_FAIL,
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

export function actionGetMoto(id) {
  return {
    type: GET_MOTO,
    payload: id
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
export function actionEditMoto() {
  return {
    type: EDIT_MOTO,
    
  };
}
export function actionEditMotoOk(motoId) {
  return {
    type: EDIT_MOTO_OK,
    payload: motoId,
  };
}
export function actionEditMotoFail(error) {
  return {
    type: EDIT_MOTO_FAIL,
    payload: error,
  };
}

export function EditMoto(id, comment  ) {
  return async (dispatch) => {
    dispatch(actionEditMoto());
    try {
      const response = await axios.patch(`http://localhost:3000/motos/${id}`, {comentario: comment } );
      dispatch(actionEditMotoOk(response.data));
      // console.log(motoId, 'motoid');
      // console.log(response.data);
    } catch (error) {
      dispatch(actionEditMotoFail(error));
    }
  };
}

// export function actionDeleteMotos(id) {
//   return {
//     type: DELETE_MOTOS, payload: id,
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

// export function DeleteMotos(id) {
//   return async (dispatch) => {
//     dispatch(actionDeleteMotos(id));
//     try {
//       const response = await axios.delete("http://localhost:3000/motos").then(()=> {
//         dispatch(actionDeleteMotosOk(id))
//       })
//       // console.log(response);
//       // dispatch(actionDeleteMotosOk(response.data));
//       // console.log(response.data);
//     } catch (error) {
//       dispatch(actionDeleteMotosFail(error));
//     }
//   };
// }


export const API = axios.create({
  baseURL: "http://localhost:3000"
})