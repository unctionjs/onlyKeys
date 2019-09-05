import mergeRight from "@unction/mergeright";
import reduceValues from "@unction/reducevalues";
import objectFrom from "@unction/objectfrom";
import get from "@unction/get";
import fresh from "@unction/fresh";
import {KeyedEnumerableType} from "./types";
import {ListType} from "./types";

export default function onlyKeys<A, B> (keys: ListType<A>) {
  return function onlyKeysKeys (keyedEnumerable: KeyedEnumerableType<B, A>): KeyedEnumerableType<B, A> {
    return reduceValues((accumulated: KeyedEnumerableType<B, A>) => (value: A) => mergeRight(accumulated)(objectFrom([value])(get(value)(keyedEnumerable))))(fresh(keyedEnumerable))(keys);
  };
}
