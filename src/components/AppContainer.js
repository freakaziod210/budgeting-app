import { connect } from "react-redux";
import { openModal, closeModal } from "../actions/appActions";
import {
  setCurrentBudget,
  clearCurrentBudget,
  addBudget
} from "../actions/budgetActions";
import App from "./App";

const mapStateToProps = state => ({
  isModalOpen: state.app.isModalOpen,
  budget: {
    currentBudgetId: state.budget.currentBudgetId || null,
    budgets: state.budget.budgets || [],
    budgetFormValues: (state.form.budgetForm &&
      state.form.budgetForm.values) || {
      name: "",
      description: "",
      amount: ""
    }
  }
});

const mapDispatchToProps = dispatch => ({
  onModalOpen: () => dispatch(openModal()),
  onModalClose: () => dispatch(closeModal()),
  onBudgetSelect: budgetId => dispatch(setCurrentBudget(budgetId)),
  onBudgetClear: () => dispatch(clearCurrentBudget(null)),
  onAddBudget: budget => dispatch(addBudget(budget))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
