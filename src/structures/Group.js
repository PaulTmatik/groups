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

  get isEnded() {
    return (new Date()).getFullYear() > this._endedIn.getFullYear();
  }

  getNameFromDate(date) {
    if (!isType(date, "date"))
      throw new Error("Аргумент должен иметь тип данных Date");

    if (date.getTime() < this.startedAt.getTime()) date = this.startedAt;
    if (date.getTime() > this.endedIn.getTime()) date = this.endedIn;

    const {years} = dateDiff(date, this.endedIn);
    const { regEx, calcedMaxCource } = this.getMinMaxCourceReplacer();
    return this._formatedName.replace(regEx, calcedMaxCource - years);
  }

  getMinMaxCourceReplacer() {
    const regEx = /(\{0|%№)(\+[0-9])?(\}|%)/;
    const found = this._formatedName.match(regEx);
    const addition = found[2] ? Number(found[2].substring(1)) : 0;
    const calcedMaxCource = this.maxCource + addition;
    return { regEx, calcedMaxCource };
  }
}

export default Group;
