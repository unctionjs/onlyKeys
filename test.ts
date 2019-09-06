/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-undefined */

import onlyKeys from "./index.ts"

test("onlyKeys with present keys", () => {
  expect(onlyKeys(["alpha", "beta", "delta"])({
    alpha: "1",
    beta: "2",
    delta: "3",
    feta: "0",
  }))
    .toEqual({
      alpha: "1",
      beta: "2",
      delta: "3",
    })
})
test("onlyKeys with some missing keys", () => {
  expect(onlyKeys(["alpha", "beta", "omega"])({
    alpha: "1",
    beta: "2",
    delta: "2",
    feta: "0",
  }))
    .toEqual({
      alpha: "1",
      beta: "2",
      omega: undefined,
    })
})
