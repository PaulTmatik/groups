import { ACTIONS_NAMES } from ".";

export const getGroupsOnPeriod = period => {
  return {
    type: ACTIONS_NAMES.GROUPS_GET_ON_PERIOD,
    payload: {
      period
    }
  }
}
