import React from 'react';
import PropTypes from 'prop-types';

const NavbarDivider = ({ children, ...rest }) => {
  return <span className="pt-navbar-divider" {...rest} />;
};

/**
 * NavbarDivider property types.
 */
NavbarDivider.propTypes = {
  /**
   * Primary content.
   */
  children: PropTypes.node,
};

/**
 * NavbarDivider default properties.
 */
NavbarDivider.defaultProps = {
  children: null,
};

export default NavbarDivider;
