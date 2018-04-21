import React from "react";
import Card from "material-ui/Card";
import Button from "material-ui/Button";
import AddIcon from "@material-ui/icons/Add";
import BudgetModal from "./BudgetModal";

const App = ({ onModalOpen, onModalClose, isModalOpen }) => {
  const handleOpen = () => {
    onModalOpen();
  };

  const handleClose = () => {
    onModalClose();
  };

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
        onClick={handleOpen}
        style={{ position: "fixed", right: 30, bottom: 30 }}
      >
        <AddIcon />
      </Button>
      <BudgetModal
        isOpen={isModalOpen}
        onClose={handleClose}
        values={{
          name: " Budget Name",
          description: "Budget Description",
          amount: "123456789"
        }}
      />
    </div>
  );
};

export default App;
