import { createStore, combineReducers } from "redux";
import { categoryReducer } from "./reducers";

const rootReducer = combineReducers({
      category: categoryReducer
})

export default createStore(rootReducer)



