import isType from "./TestObjects";
import Period from "../structures/Period";

it("TestObject должен правильно определять объекты", () => {
  expect(isType(new Date(), "date")).toBeTruthy();
  expect(isType(new Period(2018, 2019), "object")).toBeTruthy();
  expect(isType(new Date(), "object")).toBeFalsy();
  expect(isType("testing", "string")).toBeTruthy();
  expect(isType(undefined, "undefined")).toBeTruthy();
  expect(isType(NaN, "number")).toBeTruthy();
});