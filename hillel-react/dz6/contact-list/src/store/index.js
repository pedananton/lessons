import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

export default createStore(rootReducer, applyMiddleware(thunk, logger));
