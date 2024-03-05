import { combineReducers } from "redux";
import amtReducer from "./amtReducer"; // Add missing import statement for amtReducer

const reducers = combineReducers({
    amount: amtReducer
});

export { reducers }; // Add export statement for 'reducers'

