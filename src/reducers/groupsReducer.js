import Group from "../structures/Group";
import { ACTIONS_NAMES } from "../actions";

const groupsList = [
  new Group(
    "57f4b9fd-6222-4b2d-8328-2917681f608d",
    "%n01", new Date(2016, 8, 1), new Date(2019, 6, 1), 23),
  new Group(
    "02b864fb-d116-4952-b74b-6852ee37d117",
    "%n02", new Date(2015, 8, 1), new Date(2019, 6, 1), 16),
  new Group(
    "e5f7a7ee-7527-4393-93e6-5b2d36615052",
    "%n01", new Date(2018, 8, 1), new Date(2022, 6, 1), 15),
  new Group(
    "b33f9dd9-a186-469f-96f9-93acca9d9f7c",
    "%n11", new Date(2018, 8, 1), new Date(2022, 6, 1), 11)
];

const groupsReducer = (state = groupsList, action) => {
  switch(action.type) {
    case ACTIONS_NAMES.GROUPS_GET_ON_PERIOD:
      return groupsList.filter(group => {
        const {period} = action.payload;
        if (period.end.getTime() >= group.startedAt.getTime())
          return true;
        return false;
      });
    default:
      return state;
  }
}

export default groupsReducer;
