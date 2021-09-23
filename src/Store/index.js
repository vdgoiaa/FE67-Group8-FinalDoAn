import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import movie from "./reducers/movie";
import cinema from "./reducers/cinema";
import account from "./reducers/account";

const reducer = combineReducers({
  movie,
  cinema,
  account,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
