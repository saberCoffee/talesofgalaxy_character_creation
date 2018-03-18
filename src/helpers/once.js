/**
 * Make sure a function can only be executed once
 * @param  {Function} fn
 * @return {*}      result of the first call
 */
export default function (fn) {
  let result = null;
  let isExecuted = false;

  return (...args) => {
    if (!isExecuted) {
      result = fn(args);
      isExecuted = true;
    }
    return result;
  };
}
