/**
 * @typedef {object} mouseEvent
 */

/**
 * @typedef {object} coordinates
 * @param {number} x horizontal coordinate
 * @param {number} y verical coordinate
 */

/**
 * Determine the mouse position on mouse event
 * @param {mouseEvent} event the mouse event
 * @return {coordinates} the set of coordinates, relative to the window
 */
export default function (event) {
  let eventDoc;
  let doc;
  let body;
  const position = {};

  if (event.pageX == null && event.clientX != null) {
    eventDoc = (event.target && event.target.ownerDocument) || document;
    doc = eventDoc.documentElement;
    body = eventDoc.body;

    position.x = event.clientX +
    (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
    (doc && doc.clientLeft || body && body.clientLeft || 0);

    position.y = event.clientY +
    (doc && doc.scrollTop || body && body.scrollTop || 0) -
    (doc && doc.clientTop || body && body.clientTop || 0);
  } else {
    position.x = event.pageX;
    position.y = event.pageY;
  }

  return position;
}

