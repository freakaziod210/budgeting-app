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
        justifyContent: "center",
        padding: '12px'
      }}
    >
      <div
        style={{
          height: "100%",
          maxWidth: "1296px",
          display: "flex",
          flexWrap: "wrap",
          margin: '0 auto'
        }}
      >
        {budgets.map((b, i) => (
          <Card
            key={`${b.name}-${i}`}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: 230,
              width: 300,
              borderRadius: 3,
              margin: 12
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
