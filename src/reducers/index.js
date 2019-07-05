import { combineReducers } from "redux";
import periodReducer from "./periodsReducer";
import groupsReducer from "./groupsReducer";
import locationReducer from "./locationReducer";
import studentsReducer from "./studentsReducer";

export default combineReducers({
  period: periodReducer,
  groups: groupsReducer,
  location: locationReducer,
  students: studentsReducer
});
