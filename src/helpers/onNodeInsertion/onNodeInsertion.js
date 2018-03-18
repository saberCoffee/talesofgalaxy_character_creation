import styles from './sass/onNodeInsertion.scss';
import getAnimation from 'helpers/whichAnimationEvent';

const animation = getAnimation();

export default function (node, then) {
  node.style.animationDuration = '0.001s'; // eslint-disable-line no-param-reassign
  node.style.animationName = styles.nodeInserted; // eslint-disable-line no-param-reassign

  node.addEventListener(animation, (event) => {
    if (event.animationName === styles.nodeInserted) {
      then();
    }
  });
}
