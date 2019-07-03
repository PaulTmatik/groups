import { ACTIONS_NAMES } from "../actions";

const backStack = [
  {
    name: "list",
    param: null
  }
];

const locationReducer = (state = backStack, action) => {
  switch (action.type) {
    case ACTIONS_NAMES.LOCATION_CHANGE_TO:
      return [...state, {name: action.name, param: action.param}];
    case ACTIONS_NAMES.LOCATION_GO_BACK:
      let newState = state;
      if (state.length > 1)
        newState = state.slice(0, -1);
      if (action.param)
        newState[newState.length -1].param = action.param;
      return newState;
    default:
      return state;
  }
}

export default locationReducer;
