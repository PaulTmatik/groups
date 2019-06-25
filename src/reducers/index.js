import { combineReducers } from "redux";
import periodReducer from "./periodsReducer";

export default combineReducers({
  period: periodReducer
});
