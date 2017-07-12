import React from 'react';
import PropTpyes from 'prop-types';

AddSubredditForm.propTypes = {
  onSubmit: PropTpyes.func.isRequired,
  onChange: PropTpyes.func.isRequired,
  subreddit: PropTpyes.string,
};

AddSubredditForm.defaultProps = {
  subreddit: '',
};

function AddSubredditForm(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="input-group-field"
            placeholder="Type subreddit name..."
            onChange={props.onChange}
            value={props.subreddit}
          />

          <div className="input-group-button">
            <input type="submit" className="input-button button" value="Add" />
          </div>
        </div>
      </form>

      <style jsx>{`
        .input-group-field {
          height: 2.5em;
        }

        .input-button {
          height: 2.5em;
        }
      `}</style>
    </div>
  );
}

export default AddSubredditForm;
