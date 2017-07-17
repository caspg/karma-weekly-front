import React from 'react';
import PropTypes from 'prop-types';

import SubredditsTableRow from './SubredditsTableRow';

SubredditsTable.propTypes = {
  subreddits: PropTypes.arrayOf(PropTypes.string).isRequired,
  removeSubreddit: PropTypes.func.isRequired,
};

function SubredditsTable(props) {
  return (
    <table className="hover">
      <tbody>
        {props.subreddits.map(subreddit => (
          <SubredditsTableRow
            key={subreddit}
            subreddit={subreddit}
            removeSubreddit={props.removeSubreddit}
          />
        ))}
      </tbody>
    </table>
  );
}

export default SubredditsTable;
