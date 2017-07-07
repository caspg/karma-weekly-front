import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';

import initApollo from './initApollo';

function getComponentDisplayName(ComposedComponent) {
  return ComposedComponent.displayName || ComposedComponent.name || 'Component';
}

function withApollo(ComposedComponent) {
  class ComponentWithApollo extends Component {
    static displayName = (
      `${getComponentDisplayName(ComposedComponent)}WithApollo`
    )

    static async getInitialProps(ctx) {
      let composedInitialProps = {};

      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx);
      }

      return composedInitialProps;
    }

    constructor(props) {
      super(props);
      this.apolloClient = initApollo();
    }

    render() {
      return (
        <ApolloProvider client={this.apolloClient}>
          <ComposedComponent {...this.props} />
        </ApolloProvider>
      );
    }
  }

  return ComponentWithApollo;
}

export default withApollo;
