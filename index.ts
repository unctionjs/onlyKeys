import mergeRight from "@unction/mergeright";
import reduceValues from "@unction/reducevalues";
import objectFrom from "@unction/objectfrom";
import get from "@unction/get";
import fresh from "@unction/fresh";

export default function onlyKeys<A, B> (keys: Array<A> | Set<A>) {
  return function onlyKeysKeys (keyedEnumerable: Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string): Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string {
    return reduceValues((accumulated: Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string) => (value: A) => mergeRight(accumulated)(objectFrom([value])(get(value)(keyedEnumerable))))(fresh(keyedEnumerable))(keys);
  };
}
