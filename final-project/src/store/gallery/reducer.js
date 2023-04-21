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

const initialState = {
  motos: [],
  loadingMoto: false,
  moto: {},
  loadingMotos: false,
  comentario: "",
  loadingComentario: false,
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
      case EDIT_MOTO:
      state = { ...state, loadingComentario: false };
      break;
    case EDIT_MOTO_OK:
      state = {
        ...state,
        loadingComentario: true,
        comentario: action.payload,
      };
      break;
    case EDIT_MOTO_FAIL:
      state = {
        ...state,
        loadingComentario: false,
        comentario: '',
        error: { message: action.payload },
      };
      break;
    // case DELETE_MOTOS:
    //   state = { ...state, loadingMoto: true };
    //   break;
    // case DELETE_MOTOS_OK:
    //   state = {
    //     ...state,
    //     loadingMoto: false,
    //     moto: action.payload,
    //   };
    //   break;
    // case DELETE_MOTOS_FAIL:
    //   state = {
    //     ...state,
    //     loadingMoto: false,
    //     moto: {},
    //     error: { message: action.payload },
    //   };
    //   break

    default:
      break;
  }
  return state;
}
