import { createStore } from "redux";
import { moviesReducer } from "../reducer/moviesReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
export const store = createStore(moviesReducer, applyMiddleware(thunk))