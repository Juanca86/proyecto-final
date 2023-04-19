import {
    GET_MOTOS,
    GET_MOTOS_OK,
    GET_MOTOS_FAIL,
    GET_MOTO,
    GET_MOTO_OK,
    GET_MOTO_FAIL
  } from "./actionType";
  
  const initialState = {
    motos: [],
    moto: {},
    loadingMoto: false,
    loadingMotos: false,
    error: {
      message: "",
    },
  };
  
  export default function MotosReducer(state = initialState, action) {
    switch (action.type) {
      case GET_MOTOS:
        state = { ...state, loadingMotos: true };
        break;
      case GET_MOTOS_OK:
        state = {
          ...state,
          loadingMotos: false,
          motos: action.payload,
        };
        break;
      case GET_MOTOS_FAIL:
        state = {
          ...state,
          loadingMotos: false,
          motos: {},
          error: { message: action.payload },
        };
        break;

        case GET_MOTO:
        state = { ...state, loadingMoto: true };
        break;
      case GET_MOTO_OK:
        state = {
          ...state,
          loadingMoto: false,
          moto: action.payload,
        };
        break;
      case GET_MOTO_FAIL:
        state = {
          ...state,
          loadingMoto: false,
          moto: {},
          error: { message: action.payload },
        };
        break;

      default:
        break;
    }
    return state
  }
  