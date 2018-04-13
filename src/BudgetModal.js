import React, { Component } from "react";
import PropTypes from "prop-types";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";

class BudgetModal extends Component {
  state = {
    budgetName: (this.props.values && this.props.values.name) || "",
    budgetDescription:
      (this.props.values && this.props.values.description) || "",
    budgetAmount: (this.props.values && this.props.values.amount) || "",
    isDisabled: true
  };

  handleBudgetNameChange = e => {
    this.setState({ budgetName: e.target.value });
    this.shouldDisableSubmit();
  };

  handleBudgetDescriptionChange = e => {
    this.setState({ budgetDescription: e.target.value });
  };

  handleBudgetAmountChange = e => {
    this.setState({ budgetAmount: e.target.value });
    this.shouldDisableSubmit();
  };

  shouldDisableSubmit = () => {
    const { budgetAmount, budgetName } = this.state;
    if (budgetAmount === "" || budgetName === "") {
      this.setState({ isDisabled: true });
    } else {
      this.setState({ isDisabled: false });
    }
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onClick={() => this.props.onClose()}
      />,
      <FlatButton
        label="Submit"
        primary
        disabled={this.state.isDisabled}
        onClick={() => this.props.onClose()}
      />
    ];
    return (
      <Dialog actions={actions} modal={true} open={this.props.isOpen}>
        <h2>{this.props.values ? "Edit Budget" : "Create a new Budget"}</h2>
        <div style={{ display: "flex", flexDirection: "column", margin: 20 }}>
          <TextField
            fullWidth
            hintText="example: Awesome Budget"
            floatingLabelText="Name"
            value={this.state.budgetName}
            onChange={this.handleBudgetNameChange}
          />
          <TextField
            fullWidth
            hintText="example: Awesome Budget Description"
            floatingLabelText="Description"
            value={this.state.budgetDescription}
            onChange={this.handleBudgetDescriptionChange}
          />
          <TextField
            fullWidth
            hintText="example: 940"
            floatingLabelText="Amount"
            value={this.state.budgetAmount}
            onChange={this.handleBudgetAmountChange}
          />
        </div>
      </Dialog>
    );
  }
}

BudgetModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  values:
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      description: PropTypes.string
    }) || null
};

export default BudgetModal;
