/**
 * Help creating HTMLelement faster
 * @param {Object} params
 * @param {string} [params.text='div'] tag name
 * @param {string} [params.className] class name
 * @param {string} [params.text=''] textNode content
 * @return {HTMLelement}
 */
export default function ({
  type = 'div',
  className = '',
  text,
} = {}) {
  const el = document.createElement(type);
  el.className = className;

  if (text) {
    const textNode = document.createTextNode(text);
    el.appendChild(textNode);
  }

  return el;
}
