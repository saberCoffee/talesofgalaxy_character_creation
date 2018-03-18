// Modules Node
import Promise from 'bluebird';

// Helpers
import getJson from 'helpers/getJson';
import importAll from 'helpers/importAll';

// JSON

const allData = {};

/**
 * Retourne 
 * @param {*} dataName 
 */
export function get(dataName) {
  if (allData[dataName]) {
    return allData[dataName];
  }

  return null;
}

export let getAll;

let dataConfig = {};

const jsonFiles = importAll(require.context('./json/'));

dataConfig = {
  character: {
    'url': jsonFiles['character.json']
  },
  step1: {
    'url': jsonFiles['step1.json']
  },
};

const getData = (dataName) => {
	return new Promise(resolve => {
    const callback = (result) => {
      if (dataConfig[dataName].hasOwnProperty('convert')) {
        allData[dataName] = dataConfig[dataName].convert(result);
      } else {
        allData[dataName] = result;
      }

      resolve();
    }

    if (dataConfig[dataName].hasOwnProperty('spFunction')) {
      spFunction(result => {
        callback(result);
      });
    } else {
      getJson(dataConfig[dataName].url, (result) => {
        callback(result);
      });
    }
	});
};

getAll = () => (
	new Promise(resolve => {
    let promises = [];
    
		for (let k in dataConfig) {
			if (dataConfig.hasOwnProperty(k)) {
				promises.push(getData(k));
			}
    }
    
		Promise.all(promises)
		.then(() => {
			resolve(allData);
		});
	})
);