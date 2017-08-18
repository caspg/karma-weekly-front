import React from 'react';

function NoscriptAlert() {
  return (
    <noscript>
      <div className="callout alert" style={{ margin: 0 }}>
        <strong>JavaScript is required to run this website correctly.</strong>{' '}
        Please enable it in your browser settings.
      </div>
    </noscript>
  );
}

export default NoscriptAlert;
