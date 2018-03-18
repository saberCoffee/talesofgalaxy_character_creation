/**
 * Check an array of string to see of any element match the specified string.
 * @param  {String} str
 * @param  {Array} arr
 * @return {Boolean}
 */
export default function (str, arr) {
  arr.some((item) => {
    const reg = new RegExp(item, 'g');
    return reg.test(str);
  });
}

