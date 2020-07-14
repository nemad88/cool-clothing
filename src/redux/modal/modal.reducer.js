import { ModalActionTypes } from "./modal.types";

const INITIAL_STATE = {
  modalMessage: "",
  show: false,
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ModalActionTypes.SHOW_MODAL_MESSAGE:
      return {
        ...state,
        modalMessage: action.payload,
        show: true,
      };
    case ModalActionTypes.HIDE_MODAL_MESSAGE:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
