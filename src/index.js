import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppContainer from "./components/AppContainer";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import appReducer from "./reducers/appReducer";
import budgetReducer from "./reducers/budgetReducer";
import { reducer as formReducer } from "redux-form";
import initialState from './initialState';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer = combineReducers({
  app: appReducer,
  form: formReducer,
  budget: budgetReducer
});

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
