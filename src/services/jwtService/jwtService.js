const ITEM_KEY = 'karma_weekly_jwt';

/**
 * Save jwToken in localStorage.
 * @param {string} jwToken
 */
function saveInLocal(jwToken) {
  localStorage.setItem(ITEM_KEY, jwToken);
}

/**
 * Get jwToken from the localStorage.
 * @returns {string} jwToken
 */
function getFromLocal() {
  return localStorage.getItem(ITEM_KEY);
}

/**
 * Remove jwToken from the localStorage.
 */
function removeFromLocal() {
  localStorage.removeItem(ITEM_KEY);
}

export default {
  saveInLocal,
  getFromLocal,
  removeFromLocal,
};
