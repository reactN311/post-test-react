// const restMy = require("../src/exml");
import { restMy } from "../src/exml";

describe("func restMy", () => {
  it("func restMy params equel params", () => {
    let res = restMy("mA", "mR");
    expect(res).toBe("mAmR");
  });

  test("func restMy one param equel params", () => {
    let res = restMy("mA");
    expect(res).toContain("mA");
  });
});

///////////////////////////////

// function fib(n:number): number {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// fib(10); // returns 55

///////////////////////////////
// function restMy(a: string, ...res: Array<string>) {
//   // console.log(a, ...res);
//   return res[0] ? a + res[0] : a;
// }

// restMy("aMy", "resMy1", "resMy2");
///////////////////////////////
