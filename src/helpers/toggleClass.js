import hasClass from 'helpers/hasClass';
import addClass from 'helpers/addClass';
import removeClass from 'helpers/removeClass';

/**
 * Add or remove a class
 *
 * @param    {HTMLElement}    el           The targeted element
 * @param    {string}         className    The class we want to add or remove
 *
 * @return void
 */
export default function (el, className)
{
    if (hasClass(el, className)) {
        removeClass(el, className);
    } else {
        addClass(el, className);
    }
}
