import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./reducers";

const makeStore = () =>
  createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper(makeStore);
