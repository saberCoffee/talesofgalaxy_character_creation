import request from 'superagent/lib/client';
import Promise from 'bluebird';

import emptyPromise from 'helpers/emptyPromise';

/**
 * since we are working from an iframe
 * we need to get the parent window to acces SP context
 * @return {Object} the parent window
 */
function getWindow() {
  return parent.window;
}

/**
 * Return information from the sharepoint context
 * @return {Object}
 */
function getContext() {
  // eslint-disable-next-line no-underscore-dangle
  return getWindow()._spPageContextInfo;
}

/**
 * Return the current request digest from the SP page
 * @return {String}
 * @todo Provide an ajax fallback
 */
function getToken() {
  return getWindow().document.getElementById('__REQUESTDIGEST').value;
}

/**
 * Return the absolute url of the current page
 * @return {String}
 */
function getAbsoluteUrl() {
  return getContext().webAbsoluteUrl;
}

/**
 * Return the id of the current user
 * @return {Number}
 */
function getUserId() {
  return getContext().userId;
}

/**
 * Return the absolute url to use the REST api
 * @return {String}
 */
function getWebApiUrl() {
  return `${getAbsoluteUrl()}/_api/web/`;
}

/**
 * Format a request string and append the absolute path necessary
 * to make the request
 * @param  {String} req A formatted query string
 * @return {String}
 */
function formatUrl(req) {
  return `${getWebApiUrl()}${req}`;
}

/**
 * Return the url necessary to acces a sharepoint list
 * @param  {String} listName
 * @return {String}
 */
function listUrl(listName) {
  return `${getWebApiUrl()}lists/getbytitle('${listName}')`;
}

/**
 * Return the url necessary to access a sharepoint folder
 * @param  {String} folderName
 * @return {String}
 */
function folderUrl(folderName) {
  return `${getWebApiUrl()}getfolderbyserverrelativeurl('${folderName}')`;
}

/**
 * Parse the usual sharepoint response and return the result
 * @param  {Sharepoint Response} res
 * @return {Array|Object}
 */
function parseResponse(res) {
  let result = res && res.body && res.body.d;

  // if it is an array of results
  // directly return the array
  if (result && result.results) {
    result = result.results;
  }

  return result;
}

/**
 * Simple get request
 * @param  {String} url
 * @return {Promise} resolved with a parsed response
 */
export function get(url) {
  return new Promise((resolve) => {
    request
    .get(url)
    .set('Accept', 'application/json;odata=verbose')
    .end((err, res) => {
      if (!err) {
        resolve(parseResponse(res));
      }
    });
  });
}

/**
 * Return all items from a list.
 * The request cna be optimized via select, expand and filter.
 * @param  {Object} options
 * @param  {String} options.listName
 * @param  {Array}  [options.select] list of field you want to be returned
 * @param  {Array}  [options.expand] list of fields that need to be expanded (lookup, ...)
 * @param  {Array}  [options.filter] list of filters to apply to the request
 * @return {Promise}
 */
export function getListItems({
  listName,
  select = [],
  expand = [],
  filter = [],
}) {
  const selectStr = select.length ? `$select=${select.join(',')}` : '';
  const expandStr = expand.length ? `$expand=${expand.join(',')}` : '';
  const filterStr = filter.length ? `$filter=${filter.join(' and ')}` : '';

  const allStr = [
    selectStr,
    expandStr,
    filterStr,
  ];
  const query = `?${allStr.filter(str => str).join('&')}`;
  const url = `${listUrl(listName)}/items${query}`;
  return get(url);
}

export function getListItem({
  listName,
  filterBy = [],
}) {
  const filter = `$filter=${filterBy.join(' and ')}`;
  const url = `${listUrl(listName)}/items?${filter}`;
  return get(url);
}

export function getUser(id) {
  if (id) {
    const url = formatUrl(`getuserbyid(${id})`);
    return get(url);
  }

  return emptyPromise();
}

export function addListItem({
  listName,
  data,
}) {
  return new Promise((resolve) => {
    const url = `${listUrl(listName)}/items`;
    request
    .post(url)
    .send(data)
    .set('Accept', 'application/json;odata=verbose')
    .set('Content-Type', 'application/json;odata=verbose')
    .set('X-RequestDigest', getToken())
    .end((err, res) => {
      resolve(res);
    });
  });
}

export function deleteListItem({
  listName,
  item,
}) {
  return new Promise((resolve) => {
    const url = `${listUrl(listName)}/items(${item.Id})`;
    request
    .delete(url)
    .set('Accept', 'application/json;odata=verbose')
    .set('X-RequestDigest', getToken())
    // eslint-disable-next-line no-underscore-dangle
    .set('If-Match', item.__metadata.etag)
    .end((err, res) => {
      resolve(res);
    });
  });
}

export function updateListItem({
  listName,
  id,
  data,
}) {
  return new Promise((resolve) => {
    const url = `${listUrl(listName)}/items(${id})`;
    request
    .patch(url)
    .send(data)
    .set('Accept', 'application/json;odata=verbose')
    .set('X-RequestDigest', getToken())
    .set('Content-Type', 'application/json;odata=verbose')
    .set('If-Match', '*')
    .end(() => {
      resolve();
    });
  });
}

export function addFileToList({
  fullName,
  listName,
  blob,
}) {
  return new Promise((resolve) => {
    const url = `${folderUrl(listName)}/files/add(overwrite=true, url='${fullName}')`;
    request
    .post(url)
    .send(blob)
    .set('Accept', 'application/json;odata=verbose')
    .set('X-RequestDigest', getToken())
    .end((err, res) => {
      // eslint-disable-next-line no-underscore-dangle
      resolve(parseResponse(res));
    });
  });
}

// get info on current user
// need the context, and peoplemanager to be available
export function getUserWithManager() {
  const context = getContext();

  if (context && context.userId) {
    const url = `${getAbsoluteUrl()}/_api/sp.userprofiles.peoplemanager/getmyproperties/`;
    return get(url);
  }

  return emptyPromise();
}

export function getCurrentUser() {
  return getUser(getUserId());
}

// function getListInternalNames(listName) {
//   get(`${listUrl(listName)}/Fields?$select=Title,InternalName&$filter=ReadOnlyField eq false`)
//   .then((res) => {
//     console.log(res);
//   });
// }

// function getListItemType(listName) {
//   return new Promise((resolve) => {
//     const url = `${listUrl(listName)}?$select=ListItemEntityTypeFullName`;
//     get(url)
//     .then((res) => {
//       resolve(res && res.ListItemEntityTypeFullName);
//     });
//   });
// }
