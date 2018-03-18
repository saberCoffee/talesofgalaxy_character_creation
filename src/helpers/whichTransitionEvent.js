let alreadyCalled = false;
let transition = null;
let t;
const el = document.createElement('fakeelement');
const transitions = {
  animation: 'transitionend',
  Oanimation: 'otransitionEnd',
  Mozanimation: 'transitionend',
  Webkitanimation: 'webkittransitionEnd',
};

/**
 * Detect which transition event name should be used
 * @return {string} the transition event name
 * @example
 * const whichTransitionEvent = require('helpers/whichTransitionEvent');
 *
 * const transition = whichTransitionEvent();
 * document.getElementsByClassName('fake-element')[0].addEventListener(
 *  transition,
 *  () => 'I\'m transitionning !'
 * )
 */

export default function () {
  if (!alreadyCalled) {
    for (t in transitions) {
      if (el.style[t] !== undefined) {
        transition = transitions[t];
      }
    }
    alreadyCalled = true;
  }
  return transition;
}
