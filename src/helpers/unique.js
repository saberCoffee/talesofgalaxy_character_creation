/**
 * Return an array with unique value
 * @param  {Array} arr
 * @return {Array}
 */
export default function (arr) {
  return arr.filter((item, i, self) => self.indexOf(item) === i);
}
