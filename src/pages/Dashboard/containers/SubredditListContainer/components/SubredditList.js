import React from 'react';
import PropTypes from 'prop-types';

function SubredditList(props) {
  return (
    <div>
      {props.subreddits.map(subreddit =>
        <p key={subreddit}>{subreddit}</p>)}
    </div>
  );
}

export default SubredditList;
