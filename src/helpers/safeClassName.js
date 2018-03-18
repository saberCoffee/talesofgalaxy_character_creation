/**
 * Make a valid className from a specified string
 * @param  {String} name
 * @return {String}
 */
export default function (name) {
  return name.replace(/[^a-z0-9]/g, (s) => {
    const c = s.charCodeAt(0);
    if (c == 32) return '-';
    if (c >= 65 && c <= 90) return `_${s.toLowerCase()}`;
    const hashBase = `000${c.toString(16)}`;
    return `__${hashBase.slice(-4)}`;
  });
}
