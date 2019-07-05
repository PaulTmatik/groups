import { dateDiff } from "../helpers";

class Student {
  constructor(guid, lastName, firstName, secondName, gender, birthAt, startedAt, endingIn) {
    this._guid = guid;
    this._lastName = lastName;
    this._firstName = firstName;
    this._secondName = secondName;
    this._gender = gender;
    this._birthAt = birthAt;
    this._startedAt = startedAt;
    this._endingIn = endingIn;
  }

  get guid() {
    return this._guid;
  }

  get lastName() {
    return this._lastName;
  }

  get firstName() {
    return this._firstName;
  }

  get secondName() {
    return this._secondName;
  }

  get gender() {
    return this._gender;
  }

  get birthAt() {
    return this._birthAt;
  }

  get startedAt() {
    return this._startedAt;
  }

  get endingIn() {
    return this._endingIn;
  }

  get fullName() {
    return [this.lastName, this.firstName, this.secondName].join(" ");
  }

  get age() {
    return dateDiff(this.birthAt, new Date());
  }
}

export default Student;
