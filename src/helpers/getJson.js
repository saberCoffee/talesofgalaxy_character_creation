import request from 'superagent/lib/client';

/**
 * 
 * @param {*} url 
 * @param {*} callback 
 */
export default function(url, callback) {
	request
	.get(url)
	.set('Accept', 'application/json')
	.end((err, result) => {
		callback(JSON.parse(result.text));
	});
};