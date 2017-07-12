/**
 * Check if subreddit exists. Client side only service.
 * @param {string} subredditName
 * @returns {promise.<boolean>}
 */
async function verifySubreddit(subredditName) {
  if (typeof window === 'undefined') {
    return Promise.resolve();
  }

  require('reddit.js'); // eslint-disable-line global-require
  return new Promise((resolve) => {
    reddit.about(subredditName).fetch( // eslint-disable-line no-undef
      () => resolve(true),
      () => resolve(false)
    );
  });
}

export default { verifySubreddit };
