import { types } from "../actions/budgetActions";

const budgetReducer = (state = {}, action) => {
  console.log(state);
  switch (action.type) {
    case types.SET_CURRENT_BUDGET:
      return { ...state, currentBudget: action.currentBudget };
    case types.CLEAR_CURRENT_BUDGET:
      return { ...state, currentBudget: null };
    case types.ADD_BUDGET:
      return { ...state, budgets: [...state.budgets, action.budget] };
    default:
      return state;
  }
};

export default budgetReducer;
