import { applyMiddleware, compose, createStore } from "redux";
import TodoReducer from "./TodoReducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(TodoReducer, composeEnhancers(applyMiddleware()))


export default store;