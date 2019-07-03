import { ACTIONS_NAMES } from ".";

export const changeLocation = (name, param = null) => {
  return {
    type: ACTIONS_NAMES.LOCATION_CHANGE_TO,
    name,
    param
  }
}

export const goBack = (param = null) => {
  return {
    type: ACTIONS_NAMES.LOCATION_GO_BACK,
    param
  }
}
