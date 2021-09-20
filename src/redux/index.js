import {createStore, applyMiddleware, combineReducers} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import counterReducer from "./reducers/counterReducer";

const rootReducers = combineReducers({
    counterReducer
});

const middlewares = [thunkMiddleware]

const Store = createStore(rootReducers, composeWithDevTools(applyMiddleware(...middlewares)));

export default Store;