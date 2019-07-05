import Studnet from "../structures/Student";
import { ACTIONS_NAMES } from "../actions";

class StudentGroup extends Studnet {
  constructor(groupGuid, guid, lastName, firstName, secondName, gender, birthAt, startedAt, endingIn) {
    super(guid, lastName, firstName, secondName, gender, birthAt, startedAt, endingIn);
    this._groupGuid = groupGuid;
  }

  get groupGuid() {
    return this._groupGuid;
  }
}
const students = [
  new StudentGroup(
    "57f4b9fd-6222-4b2d-8328-2917681f608d",
    "edde322b-57c1-4966-a850-11203904d19a",
    "Иваненко", "Валерий", "Викторович",
    "male", new Date(2001, 11, 23), 
    new Date(2016, 8, 1), new Date(2019, 6, 1)
  ),
  new StudentGroup(
    "57f4b9fd-6222-4b2d-8328-2917681f608d",
    "7e1be992-221d-4358-a1fc-2106f465046a",
    "Васильева", "Ксения", "Николаевна",
    "female", new Date(1999, 7, 15), 
    new Date(2016, 8, 1), new Date(2019, 6, 1)
  ),
  new StudentGroup(
    "57f4b9fd-6222-4b2d-8328-2917681f608d",
    "80fcc67b-6166-4683-8ea9-e7645832218c",
    "Урутумаев", "Удыр", "Башкурванунович",
    "male", new Date(2001, 3, 29), 
    new Date(2016, 8, 1), new Date(2019, 6, 1)
  ),
  new StudentGroup(
    "02b864fb-d116-4952-b74b-6852ee37d117",
    "6dafa587-957d-4cd0-8a6c-067602ba42fb",
    "Сергеенко", "Артур", "Мерлинович",
    "male", new Date(1998, 4, 22), 
    new Date(2015, 8, 1), new Date(2019, 6, 1)
  ),
  new StudentGroup(
    "02b864fb-d116-4952-b74b-6852ee37d117",
    "c01cf558-5fa2-4587-b742-a62a4f6dfa02",
    "Кошкина", "Нина", "Собаковна",
    "female", new Date(1999, 7, 14), 
    new Date(2015, 8, 1), new Date(2019, 6, 1)
  ),
]

const studentsReducer = (state = students, action) => {
  switch (action.type) {
    case ACTIONS_NAMES.STUDENTS_GET_ACTUAL:
      const newState = students.filter(student => 
        student.groupGuid === action.groupGuid
      );
      return newState;
    default:
      return state;
  }
}

export default studentsReducer;
