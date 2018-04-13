import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Card } from "material-ui/Card";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
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
      <MuiThemeProvider>
        <div>
          <Card
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
          <FloatingActionButton
            onClick={this.handleOpen}
            style={{ position: "fixed", right: 30, bottom: 30 }}
          >
            <ContentAdd />
          </FloatingActionButton>
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
      </MuiThemeProvider>
    );
  }
}

export default App;
