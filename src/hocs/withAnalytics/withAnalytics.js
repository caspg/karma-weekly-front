import { Component } from 'react';
import PropTypes from 'prop-types';

import getComponentDisplayName from 'src/utils/getComponentDisplayName';
import { initGA, logPageView } from 'src/utils/analytics';

function withAnalytics(ComposedComponent) {
  class ComponentWithAnalytics extends Component {
    static displayName = (
      `${getComponentDisplayName(ComposedComponent)}WithAnalytics`
    )

    static propTypes = {
      children: PropTypes.element.isRequired,
    }

    componentDidMount() {
      if (!window.GA_INITIALIZED) {
        initGA();
        window.GA_INITIALIZED = true;
      }

      logPageView();
    }

    render() {
      return (
        this.props.children
      );
    }
  }

  return ComponentWithAnalytics;
}

export default withAnalytics;
