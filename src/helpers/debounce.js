/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered.
 * The function will be called after it stops being called for
 * n milliseconds.
 * @param {Function} func the function to debounce
 * @param {number} wait debounce time in ms
 * @param {boolean} [immediate=false] trigger the function on the
 * leading edge, instead of the trailing
 * @return {Function} original function
 */
export default function (func, wait, immediate) {
  let timeout;

  return (...args) => {
    const context = this;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
}

