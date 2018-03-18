import removeDiacritics from './removeDiacritics';
/**
 * Remove all special characted from a string, transform to lowercase, and trim whitespaces
 * @param  {String} str
 * @return {String}
 */
export default function (str) {
  if (str) {
    return removeDiacritics(str.toLowerCase()).trim();
  }
  return str;
}
