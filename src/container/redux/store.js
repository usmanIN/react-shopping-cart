import { createStore, combineReducers } from "redux";
import { dataRecord, dataCategories, dataCart } from "./reducer";


const rootReducers = combineReducers({
    dataCategories,
    dataRecord,
    dataCart
});

export const store =  createStore(rootReducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
