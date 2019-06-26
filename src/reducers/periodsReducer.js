import Period from "../structures/Period";
import {ACTIONS_NAMES} from "../actions";

const currentPeriod = new Period(new Date());

const periodReducer = (state = currentPeriod, action) => {
  switch (action.type) {
    case ACTIONS_NAMES.PERIOD_SET:
      return action.payload;
    default:
      return state;
  }
}

export default periodReducer;
