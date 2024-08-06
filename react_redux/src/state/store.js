import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import reducers from "./reducers";
import { legacy_createStore } from "redux";


export const store = legacy_createStore(reducers,{}, applyMiddleware(thunk))