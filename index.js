import mergeRight from "@unction/mergeright"
import reduceValues from "@unction/reducevalues"
import objectFrom from "@unction/objectfrom"
import get from "@unction/get"
import fresh from "@unction/fresh"

import type {ArrayType} from "types"
import type {KeyType} from "types"
import type {UnaryFunctionType} from "types"
import type {KeyedEnumerableType} from "types"

export default function onlyKeys (keys: ArrayType<KeyType>): UnaryFunctionType {
  return function onlyKeysKeys (keyedEnumerable: KeyedEnumerableType): KeyedEnumerableType {
    return reduceValues(
      (accumulated: KeyedEnumerableType): UnaryFunctionType =>
        (key: KeyType): KeyedEnumerableType => mergeRight(
          accumulated
        )(
          objectFrom(
            [key]
          )(
            get(
              key
            )(
              keyedEnumerable
            )
          )
        )
    )(
      fresh(keyedEnumerable)
    )(
      keys
    )
  }
}
