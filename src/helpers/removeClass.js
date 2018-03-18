/**
 * Remove className from a node
 * @param  {HTMLElement} el
 * @param  {String} className
 */
export default function (el, className) {
  const newClass = ` ${className}`;
  const regex = new RegExp(newClass, 'g');
  el.className = el.className.replace(regex, ''); // eslint-disable-line no-param-reassign
}
