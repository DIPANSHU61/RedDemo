import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer/index";

export default function configureStore() {
    let store = createStore(rootReducer, applyMiddleware(thunk))
    return store
}
