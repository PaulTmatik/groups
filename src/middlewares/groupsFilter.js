import { ACTIONS_NAMES, getGroupsOnPeriod } from "../actions";

export const groupsFilter = store => next => action => {
  let result = next(action);
  const { period } = store.getState();
  if (action.type === ACTIONS_NAMES.PERIOD_SET || 
      action.type === ACTIONS_NAMES.GROUPS_SAVE) {
    store.dispatch(getGroupsOnPeriod(period));
  }

  return result;
}