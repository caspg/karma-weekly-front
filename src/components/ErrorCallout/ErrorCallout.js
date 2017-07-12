import React from 'react';
import PropTpyes from 'prop-types';

ErrorCallout.propTypes = {
  title: PropTpyes.string,
  body: PropTpyes.string,
};

ErrorCallout.defaultProps = {
  title: null,
  body: null,
};

function ErrorCallout(props) {
  if (!props.body && !props.title) {
    return null;
  }

  return (
    <div>
      <div className="callout alert">
        <h5>{props.title}</h5>
        <p dangerouslySetInnerHTML={{ __html: props.body }} />
      </div>


      <style jsx>{`
        .callout {
          text-align: left;
        }
      `}</style>
    </div>
  );
}

export default ErrorCallout;
