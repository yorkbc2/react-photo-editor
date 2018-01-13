import {
	createStore,
	applyMiddleware,
	combineReducers
} from "redux"
// Import reducer
import filterReducer from "./reducers/filterReducer.js";
// Import redux middlewares
import thunk from "redux-thunk";
import {createLogger as logger} from "redux-logger";
// Apply middlewares
const middlewares = applyMiddleware(thunk, logger());
const store = createStore(combineReducers({
	filter: filterReducer
}), middlewares);
export default store;