import React from 'react';
import PropTypes from 'prop-types';

const NavbarGroup = ({ children, align, ...rest }) => {
  return (
    <div className={`pt-navbar-group pt-align-${align}`} {...rest}>
      {children}
    </div>
  );
};

/**
 * NavbarGroup property types.
 */
NavbarGroup.propTypes = {
  /**
   * Primary content.
   */
  children: PropTypes.node,
  align: PropTypes.oneOf(['left', 'right']),
};

/**
 * NavbarGroup default properties.
 */
NavbarGroup.defaultProps = {
  children: null,
  align: 'left',
};

export default NavbarGroup;
