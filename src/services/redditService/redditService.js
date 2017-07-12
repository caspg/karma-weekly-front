const REDDIT_URL = 'https://www.reddit.com';

/**
 * Check if subreddit exists. Client side only service.
 * @param {string} subredditName
 * @returns {promise.<boolean>}
 */
function verifySubreddit(subredditName) {
  if (typeof window === 'undefined') {
    throw Error('redditService should be only used client side');
  }

  return new Promise((resolve) => {
    const url = `${REDDIT_URL}/r/${subredditName}/about.json`;
    const xhr = new XMLHttpRequest();

    xhr.onload = () => resolve(true);
    xhr.onerror = () => resolve(false);

    xhr.open('get', url, true);
    xhr.send();
  });
}

export default { verifySubreddit };
