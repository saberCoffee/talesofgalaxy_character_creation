/**
 * Escape a string to be used in a new RegExp
 * @param {string} str the string
 * @return {string} the escaped string
 */
export default function (str) {
  return str.replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\/<\>\|\:])/gi, '\\$1')
}
