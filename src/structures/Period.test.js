import Period from "./Period";

it("При попытке создать объект с одним аргументом (не датой) должно появиться исключение", () => {
  const testPeriodError = () => {
    return new Period(2011);
  }
  expect(testPeriodError).toThrow();
});

it("При попытке создать объект с двумя аргументами (один дата) должно появтиться исключение", () => {
  const testPeriodCreateError = () => {
    return new Period(new Date(), 2018);
  }
  expect(testPeriodCreateError).toThrow();
});

it("При попытке передать в качестве аргумента NaN должно появиться исключение", () => {
  const testNaNInput = () => {
    return new Period(NaN);
  }
  expect(testNaNInput).toThrow();
});

it("При попытке передать NaN в качестве двух аргументов должно появиться исключение", () => {
  const doubleNaNInput = () => {
    return new Period(NaN, NaN);
  }
  expect(doubleNaNInput).toThrow();
});

it("Для даты 25.06.2019 период должен быть 2018 – 2019", () => {
  const period = new Period(new Date(2019, 5, 26));

  expect(period.start.getFullYear()).toEqual(2018);
  expect(period.end.getFullYear()).toEqual(2019);
});

it("Для даты 01.09.2019 период должен быть 2019 – 2020", () => {
  const period = new Period(new Date(2019, 8, 1));

  expect(period.start.getFullYear()).toEqual(2019);
  expect(period.end.getFullYear()).toEqual(2020);
});

it("Период для даты 17.03.2019 должен быть такойже для как и для даты 25.06.2019", () => {
  const onePeriod = new Period(new Date(2019, 2, 17));
  const twoPeriod = new Period(new Date(2019, 5, 25));

  expect(onePeriod.isEqual(twoPeriod)).toBeTruthy();
})