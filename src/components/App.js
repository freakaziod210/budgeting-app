import React from "react";
import Card from "material-ui/Card";
import Grid from 'material-ui/Grid';
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
            }}
        >
            <div style={{ flex: 1 }} />
            <div
                style={{ flex: 8, display: 'flex', flexWrap: 'wrap' }}
            >
                {budgets.map((b, i) => (
                    <div
                        key={`${b.name}-${i}`}
                    >
                        <Card
                            raised
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                height: 150,
                                width: 300,
                                borderRadius: 4,
                                margin: 15
                            }}
                        >
                            <div>{`${b.name}-${i}`}</div>
                            <div>{b.description}</div>
                            <div>{b.amount}</div>
                        </Card>
                    </div>
                ))}
            </div>
            <div style={{ flex: 1 }} />
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
