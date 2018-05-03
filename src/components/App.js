import React from "react";
import Card from "material-ui/Card";
import Button from "material-ui/Button";
import AddIcon from "@material-ui/icons/Add";
import BudgetModal from "./BudgetModal";

const App = ({
  onModalOpen,
  onModalClose,
  isModalOpen,
  budgetValues,
  onBudgetSelect,
  onBudgetClear
}) => (
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
      onClick={() => onModalOpen()}
      style={{ position: "fixed", right: 30, bottom: 30 }}
    >
      <AddIcon />
    </Button>
    <BudgetModal
      budgetValues={budgetValues}
      isOpen={isModalOpen}
      onClose={() => onModalClose()}
    />
  </div>
);

export default App;
