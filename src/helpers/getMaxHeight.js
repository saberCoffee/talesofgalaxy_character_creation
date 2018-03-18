import is from 'is_js';
/**
 * Take a node as parameter and return the max possible height
 * @param {HTMLelement} node
 * @return {number} the max possible height
 */

export default function (node) {
  const heights = [
    node.offsetHeight,
    node.clientHeight,
    node.scrollHeight,
  ].filter(value => !is.nan(Number(value)));

  return Math.max(...heights);
}
