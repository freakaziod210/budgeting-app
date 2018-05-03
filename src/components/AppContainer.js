import { connect } from "react-redux";
import { openModal, closeModal } from "../actions/index";
import App from "./App";

const mapStateToProps = state => ({
  isModalOpen: state.app.isModalOpen,
  budgetValues: state.form.currentBudget && state.form.currentBudget.values
});

const mapDispatchToProps = dispatch => ({
  onModalOpen: () => dispatch(openModal()),
  onModalClose: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
