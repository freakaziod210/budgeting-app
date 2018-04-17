import React, { Component } from "react";
import PropTypes from "prop-types";
import Dialog from "material-ui/Dialog";
import Button from "material-ui/Button";
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

  handleOnClose = () => {
    this.props.onClose();
  };

  render() {
    const actions = [
      <Button label="Cancel" primary onClick={() => this.props.onClose()} />,
      <Button
        label="Submit"
        primary
        disabled={this.state.isDisabled}
        onClick={() => this.props.onClose()}
      />
    ];
    return (
      <Dialog
        actions={actions}
        open={this.props.isOpen}
        onEscapeKeyDown={this.handleOnClose}
        onBackdropClick={this.handleOnClose}
      >
        <h2>{this.props.values ? "Edit Budget" : "Create a new Budget"}</h2>
        <div style={{ display: "flex", flexDirection: "column", margin: 20 }}>
          <TextField
            fullWidth
            placeholder="example: Awesome Budget"
            label="Name"
            value={this.state.budgetName}
            onChange={this.handleBudgetNameChange}
            onKeyUp={this.handleKeyup}
          />
          <TextField
            fullWidth
            placeholder="example: Awesome Budget Description"
            label="Description"
            value={this.state.budgetDescription}
            onChange={this.handleBudgetDescriptionChange}
            onKeyUp={this.handleKeyup}
          />
          <TextField
            fullWidth
            placeholder="example: 940"
            label="Amount"
            value={this.state.budgetAmount}
            onChange={this.handleBudgetAmountChange}
            onKeyUp={this.handleKeyup}
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
