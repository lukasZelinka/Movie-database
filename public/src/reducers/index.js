//redux
import { combineReducers } from "redux";
//reducers
import inputReducer from "./inputReducer";

const rootReducer = combineReducers({
  movies: inputReducer,
});

export default rootReducer;
