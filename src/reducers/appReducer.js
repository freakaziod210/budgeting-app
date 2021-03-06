import { types } from "../actions/appActions";

const appReducer = (state = {}, action) => {
  switch (action.type) {
    case types.OPEN_MODAL:
      return { ...state, isModalOpen: true };
    case types.CLOSE_MODAL:
      return { ...state, isModalOpen: false };
    default:
      return state;
  }
};

export default appReducer;
