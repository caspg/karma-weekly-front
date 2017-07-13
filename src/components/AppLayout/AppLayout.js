import React, { Children } from 'react';
import PropTypes from 'prop-types';
import AppHead from 'src/components/AppHead';

AppLayout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.oneOfType(
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ).isRequired,
};

function AppLayout(props) {
  const childrenArray = Children.toArray(props.children);

  return (
    <div>
      <AppHead title={props.pageTitle} />

      <div className="row sections-container">
        <div className="col-xs-12 col-md-4">
          {childrenArray[0]}
        </div>

        <div className="col-xs-12 col-md-8">
          {childrenArray[1]}
        </div>
      </div>

      <style jsx>{`
        .sections-container {
          height: 100vh;
        }
      `}</style>
    </div>
  );
}

export default AppLayout;
