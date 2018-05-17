import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppContainer from "./components/AppContainer";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import appReducer from "./reducers/appReducer";
import budgetReducer from "./reducers/budgetReducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  app: appReducer,
  form: formReducer,
  budget: budgetReducer
});

const initialState = {
  app: { isModalOpen: false },
  form: {
    budgetForm: {
      values: {
        name: "",
        description: "",
        amount: ""
      }
    }
  },
  budget: {
    currentBudget: {},
    currentBudgetId: null,
    budgets: [
      {
        id: 1,
        amount: "12345",
        description: "New Description",
        name: "New Name"
      },
      {
        id: 2,
        amount: "12345",
        description: "New Description",
        name: "New Name"
      },
      {
        id: 3,
        amount: "12345",
        description: "New Description",
        name: "New Name"
      },
      {
        id: 5,
        amount: "12345",
        description: "New Description",
        name: "New Name"
      },
      {
        id: 6,
        amount: "12345",
        description: "New Description",
        name: "New Name"
      },
      {
        id: 7,
        amount: "12345",
        description: "New Description",
        name: "New Name"
      },
      {
        id: 8,
        amount: "12345",
        description: "New Description",
        name: "New Name"
      },
      {
        id: 9,
        amount: "12345",
        description: "New Description",
        name: "New Name"
      },
      {
        id: 10,
        amount: "12345",
        description: "New Description",
        name: "New Name"
      },
      {
        id: 11,
        amount: "12345",
        description: "New Description",
        name: "New Name"
      },
      {
        id: 12,
        amount: "12345",
        description: "New Description",
        name: "New Name"
      },
      {
        id: 13,
        amount: "12345",
        description: "New Description",
        name: "New Name"
      },
      {
        id: 14,
        amount: "12345",
        description: "New Description",
        name: "New Name"
      },
      {
        id: 15,
        amount: "12345",
        description: "New Description",
        name: "New Name"
      },
      {
        id: 16,
        amount: "12345",
        description: "New Description",
        name: "New Name"
      },
      {
        id: 17,
        amount: "12345",
        description: "New Description",
        name: "New Name"
      },
      {
        id: 18,
        amount: "12345",
        description: "New Description",
        name: "New Name"
      },
      {
        id: 19,
        amount: "12345",
        description: "New Description",
        name: "New Name"
      },
      {
        id: 20,
        amount: "12345",
        description: "New Description",
        name: "New Name"
      },
      {
        id: 21,
        amount: "12345",
        description: "New Description",
        name: "New Name"
      },
      {
        id: 22,
        amount: "12345",
        description: "New Description",
        name: "New Name"
      },
      {
        id: 23,
        amount: "12345",
        description: "New Description",
        name: "New Name"
      },
      {
        id: 24,
        amount: "12345",
        description: "New Description",
        name: "New Name"
      },
      {
        id: 25,
        amount: "12345",
        description: "New Description",
        name: "New Name"
      },
      {
        id: 26,
        amount: "12345",
        description: "New Description",
        name: "New Name"
      },
      {
        id: 27,
        amount: "12345",
        description: "New Description",
        name: "New Name"
      },

      {
        id: 28,
        amount: "12345",
        description: "New Description",
        name: "New Name"
      }
    ]
  }
};

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
