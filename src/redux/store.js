import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk)); // No changes needed here

export default store;
