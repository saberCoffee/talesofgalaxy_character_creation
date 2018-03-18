const heightMessage = HEIGHTMESSAGE;

/**
 * Post message form the iframe to the parent window
 * The window will change the iframe height to the specified height
 * @param  {Number} height
 */
export default function (height) {
  const href = parent.window.location.href;
  parent.postMessage(`${heightMessage}${height}`, href);
}
