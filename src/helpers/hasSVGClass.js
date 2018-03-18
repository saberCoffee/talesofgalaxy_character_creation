/**
 * Check if an element has a specified className
 * @param  {HTMLelement} el
 * @param  {String} className
 * @return {Boolean}
 */
export default function (el, className) {
  const re = new RegExp(`(\\s|^)${className}(\\s|$)`);
  return re.test(el.getAttribute('class'));
}
