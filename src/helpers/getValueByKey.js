/**
 * @param  {String} key
 * @param  {Object} object
 * @param  {String} separator [title]
 * @return {*}
 * @example
 * const myObj = {
 *   firstKey : {
 *     secondKey: 'myValue',
 *   },
 * };
 *
 * getValueByKey(firstKey/secondKey, myObj, '/'); // 'myValue'
 */
export default function (key, object, separator) {
  return key.split(separator).reduce(
    (a, b) => a && a[b],
    object
  );
}
