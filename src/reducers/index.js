import { combineReducers } from "redux";
import periodReducer from "./periodsReducer";
import groupsReducer from "./groupsReducer";

export default combineReducers({
  period: periodReducer,
  groups: groupsReducer
});
