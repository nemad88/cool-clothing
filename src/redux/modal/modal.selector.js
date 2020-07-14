import { createSelector } from "reselect";

export const selectModal = (state) => state.modal;

export const selectModalMessage = createSelector(
  [selectModal],
  (modal) => modal.modalMessage
);

export const selectIsModelVisible = createSelector(
  [selectModal],
  (modal) => modal.show
);
