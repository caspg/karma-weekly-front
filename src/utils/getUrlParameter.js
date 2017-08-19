/**
 * Based on https://davidwalsh.name/query-string-javascript
 * @param {String} name
 * @returns {String}
 */
function getUrlParameter(rawName) {
  const name = rawName.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)'); // eslint-disable-line prefer-template
  const results = regex.exec(location.search);

  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export default getUrlParameter;
