import React from "react";
import Button from "material-ui/Button";
import AddIcon from "@material-ui/icons/Add";
import BudgetModal from "./BudgetModal";
import BudgetCard from "./BudgetCard";

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
      justifyContent: "center",
      padding: "12px"
    }}
  >
    <div
      style={{
        height: "100%",
        maxWidth: "1296px",
        display: "flex",
        flexWrap: "wrap",
        margin: "0 auto"
      }}
    >
      {budgets.map((b, i) => (
        <BudgetCard
          key={`${b.name}-${i}`}
          name={`${b.name}-${i}`}
          description={b.description}
          amount={b.amount}
        />
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
