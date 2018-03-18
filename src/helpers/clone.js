/**
 * Clone objects.
 * Only works with type you would find in a json-like object
 * (array, number, string, ...)
 * @param {Object|Array} object object
 * @return {Object|Array} clone of the initial object
 */
export default function (object) {
  return JSON.parse(JSON.stringify(object));
}
