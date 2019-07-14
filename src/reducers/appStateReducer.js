import { ACTIONS_NAMES } from "../actions";

const appState = {
  isActualGroupOnly: true
};

const appStateReducer = (state = appState, action) => {
  switch(action.type) {
    case ACTIONS_NAMES.GROUPS_TOGGLE_IS_ACTUAL:
      state.isActualGroupOnly = !state.isActualGroupOnly;
      return state;
    default:
      return state;
  }
}

export default appStateReducer;
