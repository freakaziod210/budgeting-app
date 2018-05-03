import { connect } from "react-redux";
import { openModal, closeModal } from "../actions/appActions";
import { setCurrentBudget, clearCurrentBudget } from "../actions/budgetActions";
import App from "./App";

const mapStateToProps = state => ({
  isModalOpen: state.app.isModalOpen,
  budgetValues: (state.form.currentBudget &&
    state.form.currentBudget.values) || {
    budgetName: "",
    budgetDescription: "",
    budgetAmount: ""
  }
});

const mapDispatchToProps = dispatch => ({
  onModalOpen: () => dispatch(openModal()),
  onModalClose: () => dispatch(closeModal()),
  onBudgetSelect: budget => dispatch(setCurrentBudget(budget)),
  onBudgetClear: () => dispatch(clearCurrentBudget(null))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
