import React from 'react';
import PropTpyes from 'prop-types';

Callout.propTypes = {
  title: PropTpyes.string,
  body: PropTpyes.string,
  type: PropTpyes.oneOf(['alert', 'success', 'secondary', 'primary']).isRequired,
  onCloseClick: PropTpyes.func,
};

Callout.defaultProps = {
  title: null,
  body: null,
  onCloseClick: null,
};

function Callout(props) {
  if (!props.body && !props.title) {
    return null;
  }

  return (
    <div>
      <div className={`callout ${props.type}`}>
        <div style={{ marginRight: props.onCloseClick ? 30 : '' }}>
          <h5>{props.title}</h5>
          <p dangerouslySetInnerHTML={{ __html: props.body }} />
        </div>

        {props.onCloseClick && (
          <button
            className="close-button"
            type="button"
            onClick={props.onCloseClick}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        )}
      </div>

      <style jsx>{`
        .callout {
          text-align: left;
        }
      `}</style>
    </div>
  );
}

export default Callout;
