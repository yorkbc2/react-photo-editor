import {
	createStore,
	applyMiddlewares
} from "redux"
// Import reducer
import filterReducer from "./reducers/filterReducer.js";
// Import redux middlewares
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
// Apply middlewares
const middlewares = applyMiddlewares(thunk, createLogger());
const store = createStore(filterReducer, middlewares);
export default store;