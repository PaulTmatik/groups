import { isType, dateDiff } from "../helpers";

class Group {
  constructor(guid, formatedName, startedAt, endedIn) {
    if (!isType(startedAt, "date") || !isType(endedIn, "date"))
      throw new Error("Для аргументов startedAt и endedIn тип данных должен быть Date");
    this._guid = guid;
    this._formatedName = formatedName;
    this._startedAt = startedAt;
    this._endedIn = endedIn;
  }

  get cource() {
    const {years} = dateDiff(this._startedAt, this._endedIn);
    return years +1;
  }

  get name() {
    return this._formatedName.replace(/\{0\}|%n/, this.cource);
  }
}

export default Group;
