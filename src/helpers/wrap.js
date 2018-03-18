import escapeForRegex from './escapeForRegex';

/**
 * Wrap part of a string with the specified tag
 * @param  {Object} options
 * @param  {string} options.str       The full string
 * @param  {String} options.search    Part of the string you want to wrap
 * @param  {String} [options.tag='span']       Tag name
 * @param  {String} [options.className] A className for the tag
 * @return {String} Modified string
 */
export default function ({
  str,
  search,
  tag = 'span',
  className = '',
}) {
  const escapedString = escapeForRegex(search || str);
  return str.replace(new RegExp(`(${escapedString})`, 'gi'), `<${tag} class="${className}">$1</${tag}>`);
}
