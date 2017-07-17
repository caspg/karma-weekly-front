import React from 'react';
import PropTypes from 'prop-types';

SubredditsTable.propTypes = {
  subreddits: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function SubredditsTable(props) {
  return (
    <table className="hover">
      <tbody>
        {props.subreddits.map(subreddit => (
          <tr key={subreddit}>
            <td className="subreddit-cell">
              {subreddit}
            </td>
          </tr>
        ))}
      </tbody>

      <style jsx>{`
        table {
          text-align: left;
        }

        .subreddit-cell {
          padding-left: 50px;
        }
      `}</style>
    </table>
  );
}

export default SubredditsTable;
