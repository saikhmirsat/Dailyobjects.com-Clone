import { reducer as AppReducer } from "./App/reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk"

const rootreducer = combineReducers({ AppReducer});
const store = legacy_createStore(rootreducer, applyMiddleware(thunk));
export { store };