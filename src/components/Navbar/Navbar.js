import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Navbar = ({ children, className, dark, fixed, ...rest }) => {
  return (
    <nav
      className={classnames(
        'pt-navbar',
        { 'pt-dark': dark },
        { 'pt-fixed-top': fixed },
        className
      )}
      {...rest}
    >
      {children}
    </nav>
  );
};

/**
 * Navbar property types.
 */
Navbar.propTypes = {
  /**
   * Primary content.
   */
  children: PropTypes.node,

  /**
   * Additional CSS classes.
   */
  className: PropTypes.string,

  /**
   * Applies dark style. Adds `.pt-dark` CSS class.
   */
  dark: PropTypes.bool,

  /**
   * Adds the `.pt-fixed-top` CSS class to the `Navbar`, which attaches to the top of the viewport.
   */
  fixed: PropTypes.bool,
};

/**
 * Navbar default properties.
 */
Navbar.defaultProps = {
  children: null,
  className: '',
  dark: false,
  fixed: false,
};

export default Navbar;
