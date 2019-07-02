import { isType, dateDiff } from "../helpers";

class Group {
  constructor(guid, formatedName, startedAt, endedIn, studentsCount = 0) {
    if (!isType(startedAt, "date") || !isType(endedIn, "date"))
      throw new Error("Для аргументов startedAt и endedIn тип данных должен быть Date");
    this._guid = guid;
    this._formatedName = formatedName;
    this._startedAt = startedAt;
    this._endedIn = endedIn;
    this._studentsCount = studentsCount;
  }

  get guid() {
    return this._guid;
  }

  get startedAt() {
    return this._startedAt;
  }

  get endedIn() {
    return this._endedIn;
  }

  get maxCource() {
    const {years} = dateDiff(this._startedAt, this._endedIn);
    return years +1;
  }

  get studentsCount() {
    return this._studentsCount;
  }

  get currentCource() {
    const {years} = dateDiff(new Date(), this._endedIn);
    return this.maxCource - years;
  }

  getNameFromDate(date) {
    if (!isType(date, "date"))
      throw new Error("Аргумент должен иметь тип данных Date");
    const regEx = /\{0\}|%n/;
    if (date.getTime() > this._endedIn.getTime())
      return this._formatedName.replace(regEx, this.maxCource);
    const {years} = dateDiff(date, this._endedIn);
    return this._formatedName.replace(regEx, this.maxCource - years);
  }

  get isEnded() {
    return (new Date()).getFullYear() > this._endedIn.getFullYear();
  }
}

export default Group;
