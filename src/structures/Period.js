import { isType } from "../helpers";

class Period {
  constructor(start, end = null) {
    this._start = new Date(1, 8, 1);
    this._end = new Date(1, 5, 30);

    if (!end && !isType(start, "number")) {
      this.setPeriodFromDate(start);
    }
    else if (end && (isType(start, "number") && isType(end, "number"))) {
      this._start.setFullYear(start);
      this._end.setFullYear(end)
    }
    else {
      throw new Error("Неверные типы данных, при передаче одного аргумента — только дата, при двух аргументах только числа.");
    }
  }

  get start() {
    return this._start;
  }

  get end() {
    return this._end;
  }

  setPeriodFromDate(controlDate) {
    if (!isType(controlDate, "date")) throw new Error("Значение должно быть датой");

    if (controlDate.getMonth() < 8) {
      this._start.setFullYear(controlDate.getFullYear() - 1);
      this._end.setFullYear(controlDate.getFullYear());
    }
    else {
      this._start.setFullYear(controlDate.getFullYear());
      this._end.setFullYear(controlDate.getFullYear() + 1);
    }
  }

  toString() {
    return `${this.start.getFullYear()} – ${this.end.getFullYear()}`;
  }

  isEqual(period) {
    return this.start.getTime() === period.start.getTime() &&
      this.end.getTime() === period.end.getTime();
  }

  isCurrent() {
    return this.isEqual(new Period(new Date()));
  }
}

export default Period;
