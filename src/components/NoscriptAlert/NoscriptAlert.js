import React from 'react';
import ReactDOMServer from 'react-dom/lib/ReactDOMServer';

function NoscriptAlert() {
  const staticMarkup = ReactDOMServer.renderToStaticMarkup(
    <div className="callout alert" style={{ margin: 0 }}>
      <strong>JavaScript is required to run this website correctly.</strong>{' '}
      Please enable it in your browser settings.
    </div>
  );

  return (
    <noscript dangerouslySetInnerHTML={{ __html: staticMarkup }} />
  );
}

export default NoscriptAlert;
