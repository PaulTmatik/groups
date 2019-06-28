import Group from "./Group";

it("Группа созданная 01.09.2016 и заканчивающая 01.07.2019 должна иметь имя 301", () => {
    expect(new Group("", "{0}01", new Date(2016, 8, 1), new Date(2019, 6, 1)).name)
        .toEqual("301");
    expect(new Group("", "%n01", new Date(2016, 8, 1), new Date(2019, 6, 1)).name)
        .toEqual("301");
})
