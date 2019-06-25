import { isType } from "./";

it("TestObject должен правильно определять объекты", () => {
  expect(isType(new Date(), "date")).toBeTruthy();
  expect(isType(new Date(), "object")).toBeFalsy();
  expect(isType("testing", "string")).toBeTruthy();
  expect(isType(undefined, "undefined")).toBeTruthy();
  expect(isType(NaN, "number")).toBeTruthy();
});