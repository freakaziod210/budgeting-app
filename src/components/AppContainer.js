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
  budgetFormValues: (state.form.budgetForm && state.form.budgetForm.values) || {
    name: "",
    description: "",
    amount: ""
  },
  budget: {
    currentBudget: state.budget.currentBudget || {},
    budgets: state.budget.budgets || []
  }
});

const mapDispatchToProps = dispatch => ({
  onModalOpen: () => dispatch(openModal()),
  onModalClose: () => dispatch(closeModal()),
  onBudgetSelect: budget => dispatch(setCurrentBudget(budget)),
  onBudgetClear: () => dispatch(clearCurrentBudget(null)),
  onAddBudget: budget => dispatch(addBudget(budget))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
