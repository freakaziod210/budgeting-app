import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppContainer from "./components/AppContainer";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import appReducer from "./reducers/appReducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  app: appReducer,
  form: formReducer
});

const initialState = {
  app: { isModalOpen: false },
  form: {
    currentBudget: {
      values: {
        budgetName: "",
        budgetDescription: "",
        budgetAmount: ""
      }
    }
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
