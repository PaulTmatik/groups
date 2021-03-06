import Group from "../structures/Group";
import { ACTIONS_NAMES } from "../actions";
import { uuidGen } from "../helpers";

const groupsList = [
  new Group(
    "57f4b9fd-6222-4b2d-8328-2917681f608d",
    "%№+1%01", new Date(2016, 8, 1), new Date(2019, 6, 1), 23),
  new Group(
    "02b864fb-d116-4952-b74b-6852ee37d117",
    "%№%02", new Date(2015, 8, 1), new Date(2019, 6, 1), 16),
  new Group(
    "e5f7a7ee-7527-4393-93e6-5b2d36615052",
    "%№%01", new Date(2018, 8, 1), new Date(2022, 6, 1), 15),
  new Group(
    "b33f9dd9-a186-469f-96f9-93acca9d9f7c",
    "%№%11", new Date(2018, 8, 1), new Date(2022, 6, 1), 11)
];

const groupsReducer = (state = groupsList, action) => {
  switch (action.type) {
    case ACTIONS_NAMES.GROUPS_GET_ON_PERIOD:
      return groupsList.filter(group => {
        const { period, isActualOnly } = action;
        if (!isActualOnly)
          return true;
        else if (getIsActual(isActualOnly, group, period))
          return true;
        else
          return false;
      });
    case ACTIONS_NAMES.GROUPS_SAVE:
      action.group.guid = uuidGen();
      groupsList.push(action.group);
      return groupsList;
    default:
      return state;
  }
}

function getIsActual(isActualOnly, group, period) {
  return isActualOnly 
    && group.endedIn.getTime() > period.end.getTime() 
    && period.end.getTime() >= group.startedAt.getTime();
}

export default groupsReducer;


