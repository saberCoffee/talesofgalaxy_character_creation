/**
* Load a SVG file asynchronously, then append it
* @param  {string}   path     the path of the SVG
* @param  {HTMLnode} appendTo [description]
* @param  {function} callback [description]
* @return {void}
*/
export default function ({
  path,
  appendTo,
  callback
} = {}) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", path, true);
  if (xhr.overrideMimeType) {xhr.overrideMimeType("image/svg+xml")}
  xhr.onload = function(e) {
    console.log(appendTo)
    appendTo.appendChild(xhr.responseXML.documentElement);
    console.log('we did it')

    if (callback) {
      callback();
    }
  }

  xhr.send();
}
