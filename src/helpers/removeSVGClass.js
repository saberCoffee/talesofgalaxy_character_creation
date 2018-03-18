import hasSVGClass from 'helpers/hasSVGClass';
/**
 * Remove className from a node
 * @param  {HTMLElement} el
 * @param  {String} className
 */
export default function (el, className) {
  const removedClass = el.getAttribute('class')
  .replace(new RegExp(`(\\s|^)${className}(\\s|$)`, 'g'), '$2');
  if (hasSVGClass(el, className)) {
    el.setAttribute('class', removedClass);
  }
}
