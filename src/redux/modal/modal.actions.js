import { ModalActionTypes } from "./modal.types";

export const showModal = (message) => ({
  type: ModalActionTypes.SHOW_MODAL_MESSAGE,
  payload: message,
});

export const hideModal = () => ({
  type: ModalActionTypes.HIDE_MODAL_MESSAGE,
});
