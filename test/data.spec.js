import { searchMoviesByDirector } from "../src/data";

describe("searchMoviesByDirector", () => {
  it("debería ser un objeto", () => {
    expect(typeof searchMoviesByDirector).toBe("object");
  });

  //   it("returns `example`", () => {
  //     expect(example()).toBe("example");
  //   });
  // });

  // describe("anotherExample", () => {
  //   it("is a function", () => {
  //     expect(typeof anotherExample).toBe("function");
  //   });

  //   it("returns `anotherExample`", () => {
  //     expect(anotherExample()).toBe("OMG");
  //   });
});
