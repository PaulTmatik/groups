import {dateDiff} from ".";

it("Разница между датами 01.09.2016 и 30.06.2019 должна составлять 2 года 9 месяцев 29 дней", () => {
  expect(
    dateDiff(new Date(2016, 8, 1), new Date(2019, 5, 30))
  )
  .toEqual({years: 2, months: 9, days: 29});
});

it("Разница между датами 22.09.2016 и 02.07.2019 должна составлять 2 года 9 месяцев 10 дней", () => {
  expect(
    dateDiff(new Date(2016, 8, 22), new Date(2019, 6, 2))
  )
  .toEqual({years: 2, months: 9, days: 10});
});

it("Разница между датами 22.09.2016 и 02.01.2019 должна составлять 2 года 3 месяца 11 дней", () => {
  expect(
    dateDiff(new Date(2016, 8, 22), new Date(2019, 0, 2))
  )
  .toEqual({years: 2, months: 3, days: 11});
});