import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

AppHead.propTypes = {
  title: PropTypes.string.isRequired,
};

function AppHead(props) {
  return (
    <Head>
      <title>{props.title}</title>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.1/css/foundation.min.css" crossOrigin="anonymous" />
    </Head>
  );
}

export default AppHead;
