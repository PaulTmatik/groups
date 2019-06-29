import { ACTIONS_NAMES } from ".";

export const getGroupsOnPeriiod = (period, groups) => {
  return {
    type: ACTIONS_NAMES.GROUPS_GET_ON_PERIOD,
    payload: {
      period,
      groups
    }
  }
}
