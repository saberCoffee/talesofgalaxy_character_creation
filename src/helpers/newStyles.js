/**
* Dynamically create new CSS to append to the <head> of the document
*
* @param {Object}  styles          imported styles from the page
* @param {Array}   newSelectors    the selectors to apply to the CSS
*
* @return {Styles}
*/
export default function (styles, newSelectors)
{
    const newStyles = document.createElement('style');

    newSelectors.forEach((selector) => {
        newStyles.innerHTML += selector.name + " {";
        Object.getOwnPropertyNames(selector.properties).forEach(
            function(val, idx, array) {
                newStyles.innerHTML += val + ': ' + selector.properties[val] + ';';
            }
        );
        newStyles.innerHTML += "}\n";
    });

    document.head.appendChild(newStyles);

    return newStyles;
}
