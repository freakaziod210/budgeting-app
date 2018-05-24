import createActions from "./createActions";

const actionNames = [
  "SET_CURRENT_BUDGET",
  "CLEAR_CURRENT_BUDGET",
  "ADD_BUDGET",
  "EDIT_BUDGET"
];

export const types = createActions(actionNames);

export const setCurrentBudget = budgetId => (dispatch, getState) => {
  const { budgets } = getState().budget;
  const selectedBudget = budgets.filter(b => b.id === budgetId)[0];

  return dispatch({
    type: types.SET_CURRENT_BUDGET,
    selectedBudget
  });
};

export const clearCurrentBudget = () => ({
  type: types.CLEAR_CURRENT_BUDGET
});

export const addBudget = () => (dispatch, getState) => {
  const { values: budget } = getState().form.budgetForm;
  const id = Date.now();

  return dispatch({
    type: types.ADD_BUDGET,
    budget: { id, ...budget }
  });
};

export const editBudget = () => (dispatch, getState) => {
  const {
    budget: { currentBudget, budgets }
  } = getState();
  console.log(currentBudget, budgets);
  return dispatch({
    type: types.ADD_BUDGET
    // budget: { id, ...budget }
  });
};
