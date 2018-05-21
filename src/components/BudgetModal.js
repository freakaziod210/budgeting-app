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
  state = {
    isEditing: false,
  };

  handleOnClose = () => {
    this.props.onClose();
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit();

    // this.props.handleSubmit(e);
    // this.props.onClose();
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { currentBudget } = nextProps;
    if (currentBudget) {
      return {
        isEditing: true,
      };
    }
    return null;
  }

  render() {
    // const { currentBudget } = this.state;
    const { currentBudget } = this.props;

    return (
      <Dialog
        fullWidth
        open={this.props.isOpen}
        onEscapeKeyDown={this.handleOnClose}
        onBackdropClick={this.handleOnClose}
      >
        <DialogTitle>
          {currentBudget ? "Edit Budget" : "Create a new Budget"}
        </DialogTitle>
        <Form
          onSubmit={this.handleSubmit}
          style={{ display: "flex", flexDirection: "column", margin: 20 }}
        >
          <Field
            type="text"
            component={RenderTextField}
            name="name"
            fullWidth
            placeholder="example: Awesome Budget"
            label="Name"
          />
          <Field
            type="text"
            component={RenderTextField}
            name="description"
            fullWidth
            placeholder="example: Awesome Budget Description"
            label="Description"
          />
          <Field
            type="text"
            component={RenderTextField}
            name="amount"
            fullWidth
            placeholder="example: 940"
            label="Amount"
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
  budgetFormValues:
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      description: PropTypes.string
    }) || null
};

export default reduxForm({ form: "budgetForm", enableReinitialize: true })(BudgetModal);
