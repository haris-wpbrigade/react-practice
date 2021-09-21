import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import todoReducers from "./reducers/todoreducers";

const rootReducers = combineReducers({
  todoReducers,
});

const middlewares = [thunkMiddleware];

const Store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default Store;
