import React from 'react';
import PropTypes from 'prop-types';

import SubredditsTableRow from './SubredditsTableRow';

SubredditsTable.propTypes = {
  subreddits: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function SubredditsTable(props) {
  return (
    <table className="hover">
      <tbody>
        {props.subreddits.map(subreddit => (
          <SubredditsTableRow key={subreddit} subreddit={subreddit} />
        ))}
      </tbody>
    </table>
  );
}

export default SubredditsTable;
