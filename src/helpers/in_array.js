/**
 * Test if some value exists in an array
 *
 * @param {Mixed}   value   The value you want to test
 * @param {Array}   array   The array you want to test
 *
 * @return {Boolean} 
 */
export default function (value, array) {
    return array.indexOf(value) > -1;
}
