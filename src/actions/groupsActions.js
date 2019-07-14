import { ACTIONS_NAMES } from ".";

export const getGroupsOnPeriod = (period, isActualOnly = false) => {
  return {
    type: ACTIONS_NAMES.GROUPS_GET_ON_PERIOD,
    period,
    isActualOnly
  }
}

export const saveGroup = group => {
  return {
    type: ACTIONS_NAMES.GROUPS_SAVE,
    group
  }
}
