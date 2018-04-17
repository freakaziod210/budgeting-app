import React, { Component } from "react";
import Card from "material-ui/Card";
import Button from "material-ui/Button";
import AddIcon from "@material-ui/icons/Add";
import BudgetModal from "./BudgetModal";

class App extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Card
          raised
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 100,
            width: 200,
            borderRadius: 8
          }}
        >
          <div className="App">This app is working</div>
        </Card>
        <Button
          variant="fab"
          color="primary"
          onClick={this.handleOpen}
          style={{ position: "fixed", right: 30, bottom: 30 }}
        >
          <AddIcon />
        </Button>
        <BudgetModal
          isOpen={this.state.open}
          onClose={this.handleClose}
          values={{
            name: " Budget Name",
            description: "Budget Description",
            amount: "123456789"
          }}
        />
      </div>
    );
  }
}

export default App;
