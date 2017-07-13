import React from 'react';
import PropTpyes from 'prop-types';

Callout.propTypes = {
  title: PropTpyes.string,
  body: PropTpyes.string,
};

Callout.defaultProps = {
  title: null,
  body: null,
};

function Callout(props) {
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

export default Callout;
