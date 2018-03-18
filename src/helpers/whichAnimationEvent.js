let alreadyCalled = false;
let animation = null;
let t;
const el = document.createElement('fakeelement');
const animations = {
  animation: 'animationend',
  Oanimation: 'oanimationEnd',
  Mozanimation: 'animationend',
  Webkitanimation: 'webkitanimationEnd',
};

/**
 * Detect which animation event name should be used
 * @return {string} the animation event name
 * @example
 * const whichAnimationEvent = require('helpers/whichAnimationEvent');
 *
 * const anim = whichAnimationEvent();
 * document.getElementsByClassName('fake-element')[0]
 * .addEventListener(anim, () => 'I\'m animated !')
 */
export default function () {
  if (!alreadyCalled) {
    for (t in animations) {
      if (el.style[t] !== undefined) {
        animation = animations[t];
      }
    }

    alreadyCalled = true;
  }

  return animation;
}
