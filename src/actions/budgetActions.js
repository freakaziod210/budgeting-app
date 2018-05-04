import createActions from "./createActions";

const actionNames = ["SET_CURRENT_BUDGET", "CLEAR_CURRENT_BUDGET", "ADD_BUDGET"];

export const types = createActions(actionNames);

export const setCurrentBudget = currentBudget => ({
  type: types.SET_CURRENT_BUDGET,
  currentBudget
});

export const clearCurrentBudget = () => ({
  type: types.CLEAR_CURRENT_BUDGET
});

export const addBudget = (budget) => ({
  type: types.ADD_BUDGET,
  budget
});
