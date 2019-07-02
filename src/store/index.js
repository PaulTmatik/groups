import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";

import { logger, groupsFilter } from "../middlewares";

const store = createStore(
  rootReducer,
  applyMiddleware(
    logger,
    groupsFilter
  )
);

export default store;
