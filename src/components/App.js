import React from "react";
import Card from "material-ui/Card";
import Button from "material-ui/Button";
import AddIcon from "@material-ui/icons/Add";
import BudgetModal from "./BudgetModal";

const App = ({
  onModalOpen,
  onModalClose,
  isModalOpen,
  budgetFormValues,
  onBudgetSelect,
  onBudgetClear,
  onAddBudget,
  budget: { budgets, currentBudget }
}) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center"
    }}
  >
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexWrap: "wrap"
      }}
    >
      {budgets.map((b, i) => (
        <Card
          key={`${b.name}-${i}`}
          raised
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: 150,
            width: 300,
            borderRadius: 4,
            margin: 10
          }}
        >
          <div>{`${b.name}-${i}`}</div>
          <div>{b.description}</div>
          <div>{b.amount}</div>
        </Card>
      ))}
    </div>
    <Button
      variant="fab"
      color="primary"
      onClick={() => onModalOpen()}
      style={{ position: "fixed", right: 30, bottom: 30 }}
    >
      <AddIcon />
    </Button>
    <BudgetModal
      onSubmit={onAddBudget}
      budgetFormValues={budgetFormValues}
      isOpen={isModalOpen}
      onClose={() => onModalClose()}
    />
  </div>
);

export default App;
