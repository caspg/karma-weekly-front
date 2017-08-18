import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import NoscriptAlert from 'src/components/NoscriptAlert';

AppHead.propTypes = {
  title: PropTypes.string.isRequired,
};

function AppHead(props) {
  return (
    <div>
      <NoscriptAlert />

      <Head>
        <title>{props.title}</title>

        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.1/css/foundation.min.css" crossOrigin="anonymous" />
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
    </div>
  );
}

export default AppHead;
