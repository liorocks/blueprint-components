import React from 'react';
import PropTypes from 'prop-types';

const NavbarHeading = ({ children, ...rest }) => {
  return (
    <div className="pt-navbar-heading" {...rest}>
      {children}
    </div>
  );
};

/**
 * NavbarHeading property types.
 */
NavbarHeading.propTypes = {
  /**
   * Primary content.
   */
  children: PropTypes.node,
};

/**
 * NavbarHeading default properties.
 */
NavbarHeading.defaultProps = {
  children: null,
};

export default NavbarHeading;
