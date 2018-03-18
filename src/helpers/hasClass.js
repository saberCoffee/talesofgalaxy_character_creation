/**
 * Check if an element has a specified className
 * @param  {HTMLelement} el
 * @param  {String} className
 * @return {Boolean}
 */
export default function (el, className) {
  const curClass = el.className;
  const regex = new RegExp(className);
  return regex.test(curClass);
}

