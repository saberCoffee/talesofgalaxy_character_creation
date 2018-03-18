import hasSVGClass from 'helpers/hasSVGClass';

/**
 * Add a className to a node. Won't do anything if the node already have the same className
 * @param {HTMLelement} el the node you want to add the className to
 * @param {string} className the className as string
 */
export default function (el, className) {
  if (!hasSVGClass(el, className)) {
    const curClassName = el.getAttribute('class');
    const newClassName = curClassName ? `${curClassName} ${className}` : className;
    el.setAttribute('class', newClassName);
  }
}
