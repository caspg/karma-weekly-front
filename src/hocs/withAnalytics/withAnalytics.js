import React, { Component } from 'react';

import getComponentDisplayName from 'src/utils/getComponentDisplayName';
import { initGA, logPageView } from 'src/utils/analytics';

function withAnalytics(ComposedComponent) {
  class ComponentWithAnalytics extends Component {
    static displayName = (
      `${getComponentDisplayName(ComposedComponent)}WithAnalytics`
    )

    componentDidMount() {
      if (!window.GA_INITIALIZED) {
        initGA();
        window.GA_INITIALIZED = true;
      }

      logPageView();
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  return ComponentWithAnalytics;
}

export default withAnalytics;
