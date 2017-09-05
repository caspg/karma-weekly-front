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

        <script dangerouslySetInnerHTML={{ __html: `
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-105904910-1', 'auto');
          ga('send', 'pageview');
          ` }}
        />
      </Head>
    </div>
  );
}

export default AppHead;
