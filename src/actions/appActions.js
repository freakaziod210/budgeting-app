import createActions from "./createActions";

const actionNames = ["OPEN_MODAL", "CLOSE_MODAL"];

export const types = createActions(actionNames);

export const openModal = () => ({
  type: types.OPEN_MODAL
});

export const closeModal = () => ({
  type: types.CLOSE_MODAL
});
