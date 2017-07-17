import React from 'react';
import PropTypes from 'prop-types';

SubredditsTable.propTypes = {
  subreddits: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function SubredditsTable(props) {
  return (
    <div>
      {props.subreddits.map(subreddit =>
        <p key={subreddit}>{subreddit}</p>)}
    </div>
  );
}

export default SubredditsTable;
