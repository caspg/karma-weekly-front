import React from 'react';
import PropTpyes from 'prop-types';

import ErrorCallout from 'src/components/ErrorCallout';

AddSubredditForm.propTypes = {
  onSubmit: PropTpyes.func.isRequired,
  onChange: PropTpyes.func.isRequired,
  isSubmitting: PropTpyes.bool.isRequired,
  subreddit: PropTpyes.string,
  error: PropTpyes.string,
};

AddSubredditForm.defaultProps = {
  subreddit: '',
  error: '',
};

function AddSubredditForm(props) {
  return (
    <div>
      <ErrorCallout body={props.error} />

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
