import {pluralize} from ".";
const studentWord = "студент|студента|студентов";
it("Для значения 1, слово студент должно быть \"студент\"", () => {
    expect(pluralize(1, studentWord)).toEqual("1 студент");
});

it("Для значения 2, слово студент должно быть \"студента\"", () => {
    expect(pluralize(2, studentWord)).toEqual("2 студента");
});

it("Для значения 5, слово студент должно быть \"студентов\"", () => {
    expect(pluralize(5, studentWord)).toEqual("5 студентов");
});

it("Для значения 0, слово студент должно быть \"студентов\"", () => {
    expect(pluralize(0, studentWord)).toEqual("Нет студентов");
});

it("Для значения 101, слово студент должно быть \"студент\"", () => {
    expect(pluralize(101, studentWord)).toEqual("101 студент");
});
