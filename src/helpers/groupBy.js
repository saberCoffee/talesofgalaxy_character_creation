/**
 * @typedef {Function} groupByCallback
 * @param {Object} item - the current item being parsed
 * @return{Array} - An array of values by which you want your objects to be sorted
 */

/**
 * From an array of objects,
 * create an array of arrays of objects that are grouped
 * by specific parameters defined in a callback function.
 * @param  {Array} array
 * @param  {groupByCallback} groupByCallback
 * @return {Array}
 */
export default function (array, groupByCallback) {
  const groups = {};

  array.forEach((item) => {
    const group = JSON.stringify(groupByCallback(item));
    groups[group] = groups[group] || [];
    groups[group].push(item);
  });

  return Object.keys(groups).map(group => groups[group]);
}

