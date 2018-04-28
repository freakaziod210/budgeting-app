import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppContainer from "./components/AppContainer";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import modalReducer from "./reducers/index";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  modal: modalReducer,
  form: formReducer
});

const store = createStore(
  rootReducer,
  { modal: { isModalOpen: false } },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
