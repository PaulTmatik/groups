import { ACTIONS_NAMES, getGroupsOnPeriod } from "../actions";

export const groupsFilter = store => next => action => {
  let result = next(action);
  const { period, appstate } = store.getState();
  if (action.type === ACTIONS_NAMES.PERIOD_SET || 
      action.type === ACTIONS_NAMES.GROUPS_SAVE ||
      action.type === ACTIONS_NAMES.GROUPS_TOGGLE_IS_ACTUAL) {
    store.dispatch(getGroupsOnPeriod(period, appstate.isActualGroupOnly));
  }

  return result;
}