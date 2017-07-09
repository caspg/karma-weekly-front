const webpack = require('webpack');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config(); // eslint-disable-line global-require
}

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.GRAPHQL_URI': JSON.stringify(process.env.GRAPHQL_URI),
        'process.env.MOCK_APOLLO': JSON.stringify(process.env.MOCK_APOLLO),
      })
    );

    return config;
  },
};
