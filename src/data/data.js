// Modules Node
import Promise from 'bluebird';

// Helpers
import getJson from 'helpers/getJson';
import importAll from 'helpers/importAll';

// Data
import QuestionsList from './Questions/QuestionsList';

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
  // rpInfos: {
  //   'url': window.get_rp_infos_by_ajax_path
  // },
  questionsList: QuestionsList,
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

    if (dataConfig[dataName].hasOwnProperty('getFromDb')) {
      dataConfig[dataName].getFromDb(result => callback(result));
    } else if (dataConfig[dataName].hasOwnProperty('url')) {
      getJson(dataConfig[dataName].url, result => callback(result));
    } else {
      callback(dataConfig[dataName]);
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