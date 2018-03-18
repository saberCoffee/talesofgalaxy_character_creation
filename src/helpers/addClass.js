import hasClass from 'helpers/hasClass';

/**
 * Add a className to a node. Won't do anything if the node already have the same className
 * @param {HTMLelement} el the node you want to add the className to
 * @param {string} className the className as string
 */
export default function (el, className) {
  if (!hasClass(el, className)) {
    el.className = `${el.className} ${className}`; // eslint-disable-line no-param-reassign
  }
}
