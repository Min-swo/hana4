export function deepCopy(obj) {
  function isObject(obj) {
    return !obj || typeof obj == "object";
  }

  if (!isObject(obj)) return obj;

  const newObj = {};
  for (const k of Reflect.ownKeys(obj)) {
    newObj[k] = deepCopy(obj[k]);
  }

  return newObj;
}
