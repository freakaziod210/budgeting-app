import React, { Component } from "react";
import PropTypes from "prop-types";
import Dialog, { DialogActions, DialogTitle } from "material-ui/Dialog";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import { Field, Form, reduxForm } from "redux-form";

const RenderTextField = ({
  input,
  meta,
  fullWidth,
  type,
  label,
  placeholder
}) => (
  <TextField
    {...input}
    label={label}
    fullWidth
    type={type}
    placeholder={placeholder}
  />
);

class BudgetModal extends Component {
  handleOnClose = () => {
    this.props.onClose();
  };

  handleSubmit = e => {
    e.preventDefault();

    // this.props.handleSubmit(e);
    // this.props.onClose();
  };

  render() {
    return (
      <Dialog
        fullWidth
        open={this.props.isOpen}
        onEscapeKeyDown={this.handleOnClose}
      >
        <DialogTitle>
          {this.props.values ? "Edit Budget" : "Create a new Budget"}
        </DialogTitle>
        <Form
          onSubmit={this.handleSubmit}
          style={{ display: "flex", flexDirection: "column", margin: 20 }}
        >
          <Field
            type="text"
            component={RenderTextField}
            name="budgetName"
            fullWidth
            placeholder="example: Awesome Budget"
            label="Name"
            value={this.props.budgetValues.budgetName}
          />
          <Field
            type="text"
            component={RenderTextField}
            name="budgetDescription"
            fullWidth
            placeholder="example: Awesome Budget Description"
            label="Description"
            value={this.props.budgetValues.budgetDescription}
          />
          <Field
            type="text"
            component={RenderTextField}
            name="budgetAmount"
            fullWidth
            placeholder="example: 940"
            label="Amount"
            value={this.props.budgetValues.budgetAmount}
          />
          <DialogActions>
            <Button color="primary" onClick={() => this.props.onClose()}>
              Cancel
            </Button>
            <Button color="primary" type="submit">
              Submit
            </Button>
          </DialogActions>
        </Form>
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

export default reduxForm({ form: "currentBudget" })(BudgetModal);
