import { ACTIONS_NAMES } from ".";

export const getActualStudents = (groupGuid, date) => {
  return {
    type: ACTIONS_NAMES.STUDENTS_GET_ACTUAL,
    groupGuid,
    date
  }
}
