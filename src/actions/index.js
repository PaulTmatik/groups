export * from "./periodActions";
export * from "./groupsActions";
export * from "./locationActions";
export * from "./studentsAction";
export * from "./appStateActions";

export const ACTIONS_NAMES = {
  PERIOD_SET: 0,
  GROUPS_GET_ON_PERIOD: 1,
  GROUPS_SAVE: 2,
  GROUPS_TOGGLE_IS_ACTUAL: 3,
  LOCATION_CHANGE_TO: 10,
  LOCATION_GO_BACK: 11,
  STUDENTS_GET_ACTUAL: 20
}