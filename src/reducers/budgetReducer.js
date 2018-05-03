import { types } from "../actions/budgetActions";

const budgetReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SET_CURRENT_BUDGET:
      return { ...state, currentBudget: action.currentBudget };
    case types.CLEAR_CURRENT_BUDGET:
      return { ...state, currentBudget: null };
    default:
      return state;
  }
};

export default budgetReducer;
