/**
 * Parse specified url and look for queries
 * @param  {String} name the query
 * @param  {String} [url=window.location.href]  the url to parse, as string
 * @return {String}  the result of the query, or undefined if no query matched
 */
export default function (name, url = window.location.href) {
  const cleanName = name.replace(/[\[\]]/g, '\\$&');

  const regex = new RegExp(`[?&]${cleanName}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);

  if (!results) {
    return undefined;
  }

  if (!results[2]) {
    return '';
  }

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
