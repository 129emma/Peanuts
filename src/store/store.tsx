import {applyMiddleware, combineReducers, createStore} from "redux";
import {loginReducer} from "./LoginStore/LoginReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer= combineReducers({
    login: loginReducer
});

export type MainState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;