/**
 * Take an array of arrays as parameter, and return a flattened array
 * @param  {Array} array
 * @return {Array}
 *
 * @example
 *
 * import flatten from 'helpers/flatten';
 * const myArr = [[1,2,3],[4,5,6]];
 * const flattenedArray = flatten(myArr);
 * // [1,2,3,4,5,6]
 */
export default function flatten(array) {
  return Array.isArray(array) ? [].concat(...array.map(flatten)) : array;
}
