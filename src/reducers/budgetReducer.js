import { types } from "../actions/budgetActions";

const budgetReducer = (state = {}, action) => {
  const { selectedBudget, budget, values } = action;
  const { budgets } = state;

  switch (action.type) {
    case types.SET_CURRENT_BUDGET:
      return { ...state, currentBudget: selectedBudget };
    case types.CLEAR_CURRENT_BUDGET:
      return { ...state, currentBudget: null };
    case types.ADD_BUDGET:
      return { ...state, budgets: [budget, ...budgets] };
    case types.EDIT_BUDGET:
      const idx = budgets.findIndex((item) => item.id === values.id);

      return {
        ...state,
        budgets: [
          ...budgets.slice(0, idx),
          action.values,
          ...budgets.slice(idx + 1)
        ]
      };
    default:
      return state;
  }
};

export default budgetReducer;
