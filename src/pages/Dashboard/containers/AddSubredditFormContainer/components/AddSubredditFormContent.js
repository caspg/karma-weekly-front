import React from 'react';
import PropTpyes from 'prop-types';

import Callout from 'src/components/Callout';
import ButtonWithSpinner from 'src/components/ButtonWithSpinner';

AddSubredditFormContent.propTypes = {
  onSubmit: PropTpyes.func.isRequired,
  onChange: PropTpyes.func.isRequired,
  isSubmitting: PropTpyes.bool.isRequired,
  subreddit: PropTpyes.string,
  error: PropTpyes.string,
};

AddSubredditFormContent.defaultProps = {
  subreddit: '',
  error: '',
};

function AddSubredditFormContent(props) {
  return (
    <div>
      <Callout type="alert" body={props.error} />

      <form onSubmit={props.onSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="input-group-field"
            placeholder="Type subreddit name..."
            onChange={props.onChange}
            value={props.subreddit}
            disabled={props.isSubmitting}
          />

          <div className="input-group-button">
            <ButtonWithSpinner
              type="submit"
              className="button add-subreddit-button"
              isLoading={props.isSubmitting}
              customStyle={{ height: '2.5em', minWidth: 70 }}
              spinnerColor="#fff"
              disabled={!!props.error}
            >
              Add
            </ButtonWithSpinner>
          </div>
        </div>
      </form>

      <style jsx>{`
        .input-group-field {
          height: 2.5em;
          padding-left: 1.5rem;
        }
      `}</style>
    </div>
  );
}

export default AddSubredditFormContent;
