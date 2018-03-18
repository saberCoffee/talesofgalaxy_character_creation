const path = PUBLICPATH;
/**
 * Return path to specific ressource
 * @param  {String} type img, cursor, etc.
 * @return {String} url
 */
export default function (type) {
  return `${path}${type}/`;
}
