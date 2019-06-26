import { ACTIONS_NAMES } from "../actions";

export const setPeriod = period => {
  return {
    type: ACTIONS_NAMES.PERIOD_SET,
    payload: period
  }
}
