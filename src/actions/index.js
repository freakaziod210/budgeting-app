export const types = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL"
};

export const openModal = () => ({
  type: types.OPEN_MODAL
});

export const closeModal = () => ({
  type: types.CLOSE_MODAL
});
