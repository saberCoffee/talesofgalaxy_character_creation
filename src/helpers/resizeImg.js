import Promise from 'bluebird';

export default function ({
    src,
    minWidth,
    minHeight,
}) {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const image = new Image();

    image.onload = () => {
      const initWidth = image.width;
      const initHeight = image.height;
      const initRatio = initWidth / initHeight;
      let width = 0;
      let height = 0;
      const ratio = minWidth / minHeight;

      if (initWidth / initHeight < ratio) {
        width = minWidth;
        height = minWidth / initRatio;
      } else {
        height = minHeight;
        width = minHeight * initRatio;
      }
      canvas.width = width;
      canvas.height = height;
      canvas.getContext('2d').drawImage(image, 0, 0, width, height);
      resolve(canvas.toDataURL('image/jpeg'));
    };

    image.src = src;
  });
}
