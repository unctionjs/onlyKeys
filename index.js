import mergeRight from "@unction/mergeright";
import reduceValues from "@unction/reducevalues";
import objectFrom from "@unction/objectfrom";
import get from "@unction/get";
import fresh from "@unction/fresh";
export default function onlyKeys(keys) {
  return function onlyKeysKeys(keyedEnumerable) {
    return reduceValues(accumulated => key => mergeRight(accumulated)(objectFrom([key])(get(key)(keyedEnumerable))))(fresh(keyedEnumerable))(keys);
  };
}
