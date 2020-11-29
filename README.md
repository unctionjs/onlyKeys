# @unction/onlyKeys

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> Array<A> | Set<A> => Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string => Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string

Reduces the keyed enumerable to an object with only the keys provided.

``` javascript
onlyKeys(
  ["alpha", "beta", "delta"]
)(
  {
    feta: "0",
    alpha: "1",
    beta: "2",
    delta: "3",
  }
)

// {
//   alpha: "1",
//   beta: "2",
//   delta: "3",
// }
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/onlyKeys.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/onlyKeys.svg?maxAge=2592000&style=flat-square
