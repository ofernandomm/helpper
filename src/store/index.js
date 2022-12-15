import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cartReducer, categoryReducer } from "./reducers";

const rootReducer = combineReducers({
      category: categoryReducer,
      cart:cartReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))



