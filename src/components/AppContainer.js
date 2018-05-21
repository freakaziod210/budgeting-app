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
    currentBudget: state.budget.currentBudget || null,
    budgets: state.budget.budgets || [],
  }
});

const mapDispatchToProps = dispatch => ({
  onModalOpen: () => dispatch(openModal()),
  onModalClose: () => dispatch(closeModal()),
  onBudgetSelect: id => {
    dispatch(setCurrentBudget(id));
    dispatch(openModal());
  },
  onBudgetClear: () => dispatch(clearCurrentBudget()),
  onAddBudget: budget => dispatch(addBudget(budget))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
