import Promise from 'bluebird';

export default function (result = null) {
  return new Promise((resolve) => {
    resolve(result);
  });
}
