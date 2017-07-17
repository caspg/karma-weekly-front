import React from 'react';
import PropTypes from 'prop-types';

SubredditList.propTypes = {
  subreddits: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function SubredditList(props) {
  return (
    <div>
      {props.subreddits.map(subreddit =>
        <p key={subreddit}>{subreddit}</p>)}
    </div>
  );
}

export default SubredditList;
