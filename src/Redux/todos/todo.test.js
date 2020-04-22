import {
  filterByCompleted,
  filterByParentId,
  filterByUnCompleted,
} from "./todosSelector";

const id = 5;
const list = [
  { name: "playchess", completed: false, parentId: 2 },
  { name: "go home", completed: true, parentId: 5 },
  { name: "do work", completed: false, parentId: 4 },
  { name: "practice", completed: true, parentId: 6 },
];

describe("todo tests", () => {
  it("filterByCompleted", () => {
    expect(filterByCompleted(list)[1].name).toBe("practice");
  });
  it("filterByUnCompleted", () => {
    expect(filterByUnCompleted(list)[1].name).toBe("do work");
  });
  it("filterByParentId", () => {
    expect(filterByParentId(id)(list)[0].name).toBe("go home");
  });
});
